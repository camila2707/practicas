import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductService } from '../../servicios/product.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin',
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  standalone: true,
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent implements OnInit {


  // Lista de productos cargados desde el backend.
  productos: any[] = [];

  // Formulario reactivo donde se cargan los datos del producto.
  formulario!: FormGroup;

  // Indica si estamos editando un producto existente.
  editando = false;

  // Contiene los datos del producto que se está editando.
  productoActual: any = null;

  // Vista previa de la imagen antes de enviarla.
  imagenPrevia: string | null = null;

  // Archivo físico seleccionado para subir al servidor.
  archivoImagen: File | null = null;

  constructor(
    // Servicio que maneja las operaciones CRUD de productos.
    private productService: ProductService,

    // FormBuilder para simplificar la creación del formulario reactivo.
    private fb: FormBuilder
  ) { }

  // Se ejecuta al iniciar el componente.
  ngOnInit(): void {
    this.crearFormulario();   // Inicializa el formulario con validaciones.
    this.cargarProductos();   // Obtiene todos los productos del backend.
  }

  // Configura el formulario reactivo y sus campos.
  crearFormulario() {
    this.formulario = this.fb.group({
      Nombre: ['', Validators.required],
      Descripcion: ['', Validators.required],
      Precio: [0, [Validators.required, Validators.min(1)]],
      Stock: [0, Validators.required],
      Imagen: [''], // Este campo solo se usa para mantener el archivo seleccionado.
      caracteristicas: ['', Validators.required],
      marca: ['', Validators.required],
      categoria: ['', Validators.required],
      oferta: [0, Validators.required],
    });
  }

  // Llama al backend para obtener la lista de productos.
  cargarProductos() {
    this.productService.obtenerProductos().subscribe({
      next: (res) => this.productos = res,
      error: (err) => console.error('Error cargando productos', err)
    });
  }

  // Maneja el cambio de archivo cuando el usuario selecciona una imagen.
  onFileChange(event: any) {
    const file = event.target.files[0];
    if (!file) return; // Si no se seleccionó nada, no hacemos nada.

    // Guardamos la imagen física para enviarla luego en FormData.
    this.archivoImagen = file;

    // Preparamos vista previa usando FileReader.
    const reader = new FileReader();
    reader.onload = () => (this.imagenPrevia = reader.result as string);
    reader.readAsDataURL(file);
  }

  // Guarda un producto: crea uno nuevo o actualiza uno existente según "editando".
  guardar() {
    if (!this.archivoImagen && !this.editando) {
      alert("Debes seleccionar una imagen para el producto");
      return;
    }

    // Armamos un FormData, obligatorio para enviar archivos.
    const formData = new FormData();
    formData.append("Nombre", this.formulario.value.Nombre);
    formData.append("Descripcion", this.formulario.value.Descripcion);
    formData.append("Precio", this.formulario.value.Precio);
    formData.append("Stock", this.formulario.value.Stock);
    formData.append("caracteristicas", this.formulario.value.caracteristicas);
    formData.append("marca", this.formulario.value.marca);
    formData.append("categoria", this.formulario.value.categoria);
    formData.append("oferta", this.formulario.value.oferta);


    // Solo enviamos la imagen si se seleccionó una nueva.
    if (this.archivoImagen) {
      formData.append("Imagen", this.archivoImagen);
    }

    // EDICIÓN
    if (this.editando) {

      this.productService.actualizarProducto(this.productoActual.Id_productos, formData).subscribe({
        next: () => {
          alert("Producto actualizado");
          this.reset();           // Resetea los estados del formulario.
          this.cargarProductos(); // Refresca la lista.
        },
        error: (err) => console.error("Error actualizando producto", err)
      });

    }
    // CREACIÓN
    else {

      this.productService.crearProducto(formData).subscribe({
        next: () => {
          alert("Producto creado");
          this.reset();
          this.cargarProductos();
        },
        error: () => alert("Error al crear producto")
      });
    }
  }

  // Cargar datos de un producto en el formulario para editarlo.
  editar(producto: any) {
    this.editando = true;
    this.productoActual = producto;

    // Cargar datos actuales al formulario.
    this.formulario.patchValue({
      Nombre: producto.Nombre,
      Descripcion: producto.Descripcion,
      Precio: producto.Precio,
      Stock: producto.Stock,
      caracteristicas: producto.caracteristicas,
      marca: producto.marca,
      categoria: producto.categoria,
      oferta: producto.oferta,
    });

    // Arma la URL completa para mostrar la imagen previa.
    this.imagenPrevia = producto.Imagen
      ? `http://localhost/api_proyecto/public/uploads/${producto.Imagen}`
      : null;
  }

  // Elimina un producto del backend.
  eliminar(id: number) {
    if (!confirm("¿Seguro de eliminar este producto?")) return;

    this.productService.eliminarProducto(id).subscribe({
      next: () => {
        alert("Producto eliminado");
        this.cargarProductos();
      },
      error: () => alert("Error eliminando producto")
    });
  }

  // Resetea el formulario y vuelve al estado inicial.
  reset() {
    this.formulario.reset();
    this.editando = false;
    this.productoActual = null;
    this.imagenPrevia = null;
    this.archivoImagen = null;
  }

}
