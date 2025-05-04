import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { CarritoService } from '../../servicios/carrito.service';
import { Productos } from '../../model/producto.model';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {


  Productos: Productos[] = [
    {
      id: 1,
      nombre: 'Taladro Percutor Luxus 13mm 850w Kit Con Accesorios 220v Color Naranja Frecuencia 50hz',
      descripcion: 'Con una capacidad de mandril de 13 mm y una velocidad máxima de rotación de 2700 rpm, este taladro es perfecto para perforar en diferentes materiales, desde madera hasta metal.',
      precio: 98568,
      img: './assets/taladro1.webp',
      disponibilidad: true,
      categoria: 'taladro',
      marca: 'LUXUS',
      stock: 20,
      caracteristicas: 'TALADRO PERCUTOR REVERSIBLE. Mandril 13 MM. Selector de percutor. Limitador de profundidad. Traba de gatillo. Sentido de giro. Gatillo. Regulador de velocidad. Empuñadura auxiliar. Mango Soft. INCLUYE(73 accesorios). 40 Puntas de 25mm. 1 Bocallave magnética para punta. 10 Puntas de 50 mm. 2 Conectores para puntas. 3 Bocallaves magnéticas hexagonal. 5 Mechas 3 puntas para madera. 5 Mechas de acero rápido. 4 Mechas de widia. 3 Llave allem',
    },

    {
      id: 2,
      nombre: 'Amoladora Angular 115mm TOTAL Uso Profesional 750w Ergonónica, Potente y Resistente',
      descripcion: 'Amoladora Angular Total Tools 750W Monofásica Para Disco 115 Mm con Mango Auxiliar y Velocidad Máxima de 11000 RPM. Diseñada para alto rendimiento en aplicaciones profesionales y con calidad para uso industrial.',
      precio: 55811,
      img: './assets/amoladora2.webp',
      disponibilidad: true,
      categoria: 'amoladora',
      marca: 'TOTAL',
      stock: 20,
      caracteristicas: 'Características:• Eje con sistema de bloqueo para facilitar el cambio del disco.• Motor protegido contra ingreso de polvo.• Interruptor de encendido/apagado accesible para control y comodidad.• Mango de posición ajustable para facilitar la operación.• Engranajes de aluminio para mayor durabilidad.• Empuñadura lateral ergonómica.• Incluye mango auxiliar.• No incluye disco de corte.Especificaciones técnicas:• Potencia: 750W• Voltaje: 220V• Frecuencia: 50Hz• Diámetro del disco: 115 mm (4 1/2”)• Velocidad sin carga: 11000 RPM• Rosca del eje: M14• Accesorios incluidos:- Protector del disco- Brida de apoyo- Tuerca de ajuste- Manual de usuario',
    },
    {
      id: 3,
      nombre: 'Martillo Carpintero 450 Gr Total Industrial',
      descripcion: 'El Martillo Carpintero Galponero 450g 16oz Fibra D Vidrio Total es una herramienta esencial para cualquier carpintero, aficionado al bricolaje o profesional de la construcción. Con un peso de 16 oz y un largo de 32.5 cm, este martillo es perfecto para una variedad de tareas, desde clavar clavos hasta romper objetos.',
      precio: 9399,
      img: './assets/martillo3.webp',
      disponibilidad: true,
      categoria: 'martillo',
      marca: 'TOTAL',
      stock: 4,
      caracteristicas: 'Marca:Total-Modelo:THT73166-Tipo de martillo:Carpintero-Peso del martillo:450 g-Largo del martillo:33 cm-Material de la cabeza:Acero-Material de la manija:Fibra de vidrio',
    },
    {
      id: 4,
      nombre: 'Destornilladores Aislados Brinna 12 En 1 Estuche 1000v',
      descripcion: 'SET DESTORNILLADORES AISLADOS 1000V 12 EN 1 MANGO INTERCAMBIABLE Y ESTUCHE HB-60 BRINNA',
      precio: 37756,
      img: './assets/destornilladores.webp',
      disponibilidad: true,
      categoria: 'destornillador',
      marca: 'BRINNA',
      stock: 12,
      caracteristicas: 'INCLUYE:- 12 puntas:Cuerpos Planos: 3x100mm , 4x100mm , 5.5x100mm-Cuerpos Pozidrive: PZ 1X100mm , PZ 2X100mm-Cuerpos Pozidriv + Plano: PZ/PL 1x100mm , PZ/PL 2x100mm-Cuerpos Phillips: PH Ox80mm, PH 1x80mm, PH 2x100mm-Cuerpos Torx: TX 10x100mm, TX 15x100mm- 1 Mango Intercambiable- 1 Tapa de Precisión- 1 Estuche Guardado- Destornilladores Aislados hasta 1000V- Materiales: Acero CRV 50, Mango: PP+TPR- Todas las puntas son magnéticas-Modelo:HB-60'
    },
    {
      id:5,
      nombre:'Juego Kit Set Destornillador Precisión Denver 145 Piezas Cel',
      descripcion:'DESTORNILLADOR DE PRECISIÓN INTERCAMBIABLE CON ESTUCHE RIGIDO IDEAL REPARACION DE CELULAR, COMPUTADORAS, CÁMARAS Y JOYERIA DENVER (DVP145)',
      precio:64524,
      img:'./assets/destornilladores5.webp',
      disponibilidad:true,
      categoria:'destornillador',
      marca:'Denver Tools',
      stock:5,
      caracteristicas:'Modelo:DVP145 -Incluye: ESTUCHE RIGIDO CON SECTOR MAGNETICO--116 CRV BITS 4x28mm- HEX: H0.7 / H0.9 / H1.3 / H1.5 / H2.5 / H3.0 / H3.5 / H4.0 / H4.5 / H5.0 / H6.0- PHILLIPS: 1.0*2 / 1.5*3 / 2.0*2 / 2.5*2 / 3.0*3 / 3.5*2 / JIS000 / JIS00 / JIS0 / JIS1- TORX: T1*3 / T2*3 / T3*2 / T4*2 / T5 / T6 / T7 / T8 / T9 / T10 / T15 / T20- PLANO: 1.0*2 / 1.3*2 / 1.5*2 / 2.0*2 / 2.5*2 / 3.0*2 / 3.5*2 / 4.0*2- TORX HUECO: T6H / T7H / T8H / T9H / T10H / T15H / T20H- POZIDRIVE: PZ00*2 / PZ0*2 / PZ1*2 / PZ2*2- TRES ALAS: Y0.8*3 / Y2.0*2 / Y2.5*2 / Y3.0*2- PENTALOBE: 0.8*3 / 1.2*3 / 1.5*3 / 2.0*2- TIPO U: 2.0*2 / 2.6*2 / 3.0*2- TRIÁNGULO: 2.0 / 2.3 / 2.6 / 3.0- CUADRADO: SQ0 / SQ1 / SQ2- EXTRACTOR DE TARJETA SIM: SIM0.8 / SIM1.0- TIPO X: 1.5*2---4 S2 BITS 4x45mm- PHILLIPS: 1.5 / 2.0- PLANO: 1.5 / 2.0----12 MINI BOCALLAVES- SOCKET: M2.5*2 / 3.0 / 3.5 / 4.0 / 4.5 / 5.0 / 5 .5 / G3.8 / G4.5 / PH2 / U---2 PALANCAS DE CABEZA DOBLE-1 BARRA DE EXTENSION H4x130 mm-1 VENTOSA-5 PÚAS-1 PINZAS-1 MANGO ANTIDELIZANTE CON EXTENSION 50 MM',
    },
    {
      id:6,
      nombre:'Sierra Circular Bosch Gks 150 71/4 1500w con disco y guía incluidos',
      descripcion:'La Sierra Circular Bosch GKS 150, con 1500W de potencia, tiene la fuerza y robustez suficiente para aplicaciones pesadas, ya sea en obras o talleres. Es ideal para cortes profundos y cortes en madera dura. Cuenta con recurso contra bloqueo para más seguridad, además de empuñadura auxiliar lo que garantiza más estabilidad durante el corte. El polvo se mantiene lejos del usuario gracias a su salida de polvo eficiente. Las escobillas de carbón son fácilmente accedidas, permitiendo que su cambio sea simple y fácil.',
      precio:207456,
      img:'./assets/sierraelectrica6.webp',
      disponibilidad:true,
      categoria:'sierra',
      marca:'BOSCH',
      stock:5,
      caracteristicas:'•Marca:Bosch •Línea:Professional •Modelo:GKS 150 • Color:Azul •Voltaje:220V •Potencia:1,5 kW •Frecuencia:50 •Modelo detallado:GKS 150 •Diámetro del disco:184 mm •No es inalámbrico •Tipo de tecnología del motor:Con escobillas •Orientación de la mano:Ambidiestro •Profundidad de corte: 45 grados(4,5 cm) •Profundidad de corte: 90 grados(6,4 cm) •Accesorios incluidos:1 adaptador para aspiración de polvo, 1 disco de sierra de 24 dientes, 1 guía paralela •Velocidad máxima de rotación:6.000 rpm •Largo del cable:2 m •Nivel de ruido:96 dB •No incluye batería •No incluye guía láser •Con botón de bloqueo de disco •Usos recomendados:Madera, Plástico •Largo:34,7 cm •Ancho:23,2 cm •Altura:25,7 cm •Peso:3,7 kg',
    },
    {
      id:7,
      nombre:'Soldadora Inverter Lusqtoff MegaIron100-8 Mascara Escuadras Magneticas Naranja/negro 220v 50hz',
      descripcion:'Tipo de soldadora: MMA. Intensidad de soldadura mínima de 10A. Intensidad de soldadura máxima de 105A. Accesorio incluido:2 escuadras.',
      precio:133423,
      img:'./assets/soldadora7.webp',
      disponibilidad:true,
      categoria:'soldadora',
      marca:' Lusqtoff',
      stock:2,
      caracteristicas:' •Marca: Lusqtoff •Modelo: MEGAIRON100-8   •Con regulador     •Gabinete metálico muy resistente    •Tensión de entrada (V): lph AC220     •Frecuencia (Hz): 50.   •Capacidad de entrada nominal: 4,2 Kw   •Corriente de entrada nominal: 18,4 (A)    •Ciclo de trabajo MMA: 30%@)105A   •Tensión en vacío : 66 V          •Eficiencia: 85%             •Clase de protección: 1 P21S           •Grado de aislamiento: H             •Tipo de enfriamiento: FORZADO           •Electrodos: 1,6 - 2,5               •MASCARA DE SOLDAR FOTOSENSIBLE LUSQTOFF ST-1X           •Área de visualización: 90 * 35mm           •Tamaño del casquete: 110*90*9mm           •Sensor de arco: 2           •Estado de luz DIN: 4            •Oscuro Estado DIN fijo: 11           •Control ON/OFF Automático             •Control de sensibilidad: No Ajustable               •Protección UV / IR DIN 16            •Fuente de alimentación: Panel solar/Batería recargable            •Tiempo de encendido: 1 / 5000s              •Tiempo de apagado: 0.10-1.0s                   •Alarma de bajo volumen: SI             •Auto-comprobación: ADF NO              •Tº Funcionamiento -5~ +55c           •Tº almacenamiento-20~ +70c            •Plástico de alto impacto           •Peso: 420 g          •Soldadura : arco y plasma                 •ESCUADRA MAGNETICA LUSQTOFF 3 PULG 9KG            •Modelo: LQE6001            •Peso 320 Grs             •Medidas (Al x L x An): 8 x 1 x 12 cm      •Medida 3 pulgadas        •Angulo de trabajo 45; 90 y 135°     •Soporta: 9 kg      •CONTENIDO DE LA PUBLICACIÓN •1 Soldadora Inverter MEGAIRON100-8     •1 Cable con Pinza portaelectrodo      •1 Cable con Pinza masa     •1 Correa de transporte     •1 Manual de uso     •1 Mascara fotosensible para soldar Lusqtoff ST-1X     •2 Escuadras Soporte Magnético de 3 Pulgadas LQE6001',
    },
    {
      id:8,
      nombre:'Sierra Caladora Dewalt Dwe300 Portátil De 650w',
      descripcion:'Sierra Caladora Dewalt Dwe300-b3 Portátil De 650w- Herramienta eléctrica portátil para cortes precisos en diversos materiales.- Potencia de 650W, ideal para trabajos exigentes.- Diseño ergonómico que facilita su manejo y reduce la fatiga durante el uso prolongado.- Velocidad variable que permite un control óptimo en diferentes tipos de corte.- Sistema de cambio rápido de hojas sin necesidad de herramientas adicionales.- Capacidad de biselado de 0 a 45 grados para cortes angulares.- Incluye adaptador para aspiración de polvo, manteniendo el área de trabajo limpia.',
      precio:160575,
      img:'./assets/caladora8.webp',
      disponibilidad:true,
      categoria:'sierra',
      marca:'dewalt',
      stock:7,
      caracteristicas:'Marca:DeWalt–Línea:serra dewalt–Modelo:DWE300–Voltaje:220V–Color:Amarillo/Negro–Potencia:650 W–Frecuencia:50 Hz–Velocidad mínima sin carga:500 rpm–Velocidad máxima sin carga:3.200 rpm–Capacidad máxima de perforación en madera:8,5 cm—Capacidad máxima de perforación en aluminio:2 cm—Capacidad máxima de perforación en acero:1 cm—Largo total:20 cm—Ancho total:8 cm—Altura total:21,5 cm—Peso:2,4 kg—Cantidad de velocidades:7—-Con velocidad variable—Sin sistema de reducción de ruido—Es industrial—No es inalámbrico—Con diseño ergonómico—Cantidad de posiciones:3—Grados de inclinación:45°—Accesorios incluidos:Sierra tico-tico, Manual de instrucciones—Con sistema de bloqueo—Sin luz LED—Sin batería—Con cargador—Sin extractor de polvo—Usos recomendados:Doméstico—Voltaje de la batería:12V',
    },
    {
      id:9,
      nombre:'Compresor de aire eléctrico portátil Lüsqtoff LC-2025 monofásico 25L 2hp 220V 50Hz naranja',
      descripcion:'Con tu Lüsqtoff LC-2025, las tareas manuales que requieran presión de aire serán mucho más sencillas. Ahorrá tiempo y lográ excelentes resultados sin esfuerzo.',
      precio:253899,
      img:'./assets/compresor9.webp',
      disponibilidad:true,
      categoria:'compresor',
      marca:'Lüsqtoff',
      stock:5,
      caracteristicas:'Marca: Lusqtoff---Modelo: LC-2025---Tensión: 220 V – 50 Hz---Potencia: 2 Hp---Tanque: 25 Lts---Presión Máxima: 115 Psi---Caudal: 186 L/min---Peso Neto: 22 Kg',
    },
    {
      id:10,
      nombre:'Amoladora Recta 710w 220v + Accesorios Lüsqtoff Arl710-8 Color Naranja Frecuencia 50 Hz',
      descripcion:'La amoladora Lüsqtoff es una herramienta versátil, que permite realizar diferentes trabajos con una terminación profesional. Por eso, es una excelente opción sumarla a tu taller o caja de herramientas.',
      precio:145952,
      img:'./assets/amoladorarecta10.webp',
      disponibilidad:true,
      categoria:'amoladora',
      marca:'Lüsqtoff',
      stock:5,
      caracteristicas:'Marca:Lüsqtoff–Modelo:ARL710-8—Color:Naranja—Voltaje:220V—Velocidad mínima de rotación:12.000 rpm—Velocidad máxima de rotación:28.000 rpm—Peso:2,1 kg—Largo:35 cm—Ancho:8 cm—Accesorios incluidos:1 llave, 1 boquilla de sujeción—Frecuencia:50 Hz—Potencia:710 W—Tipo de amoladora:Recta—Es mini amoladora:No—Diámetro del disco:10 mm—Tipo de interruptor:Tecla—Con regulación de velocidad:Sí—Es inalámbrico:No—Con mango lateral:Sí',
    },
    {
      id:11,
      nombre:'',
      descripcion:'',
      precio:5,
      img:'',
      disponibilidad:true,
      categoria:'',
      marca:'',
      stock:5,
      caracteristicas:'',
    },
    {
      id:12,
      nombre:'',
      descripcion:'',
      precio:5,
      img:'',
      disponibilidad:true,
      categoria:'',
      marca:'',
      stock:5,
      caracteristicas:'',
    },
    {
      id:13,
      nombre:'',
      descripcion:'',
      precio:5,
      img:'',
      disponibilidad:true,
      categoria:'',
      marca:'',
      stock:5,
      caracteristicas:'',
    },
    {
      id:14,
      nombre:'',
      descripcion:'',
      precio:5,
      img:'',
      disponibilidad:true,
      categoria:'',
      marca:'',
      stock:5,
      caracteristicas:'',
    },
    {
      id:15,
      nombre:'',
      descripcion:'',
      precio:5,
      img:'',
      disponibilidad:true,
      categoria:'',
      marca:'',
      stock:5,
      caracteristicas:'',
    },
    {
      id:16,
      nombre:'',
      descripcion:'',
      precio:5,
      img:'',
      disponibilidad:true,
      categoria:'',
      marca:'',
      stock:5,
      caracteristicas:'',
    },
    {
      id:17,
      nombre:'',
      descripcion:'',
      precio:5,
      img:'',
      disponibilidad:true,
      categoria:'',
      marca:'',
      stock:5,
      caracteristicas:'',
    },
    {
      id:18,
      nombre:'',
      descripcion:'',
      precio:5,
      img:'',
      disponibilidad:true,
      categoria:'',
      marca:'',
      stock:5,
      caracteristicas:'',
    },
    {
      id:19,
      nombre:'',
      descripcion:'',
      precio:5,
      img:'',
      disponibilidad:true,
      categoria:'',
      marca:'',
      stock:5,
      caracteristicas:'',
    },
    {
      id:20,
      nombre:'',
      descripcion:'',
      precio:5,
      img:'',
      disponibilidad:true,
      categoria:'',
      marca:'',
      stock:5,
      caracteristicas:'',
    },



  ]


  constructor(private carritoService: CarritoService) { }
  agregar(producto: Productos) {
    this.carritoService.agregarAlCarrito(producto);
    alert('Producto agregado al carrito');

  }
  productoSeleccionado: Productos | null = null;

  productoSeleccionadoC: Productos | null = null;
  mostrardescripcion(producto: Productos) {
    if (this.productoSeleccionado === producto) {
      this.productoSeleccionado = null; // Oculta si ya estaba seleccionado
    } else {
      this.productoSeleccionado = producto; // Muestra el nuevo
    }
  }
  mostrarcaracteristicas(producto: Productos) {
    if (this.productoSeleccionadoC === producto) {
      this.productoSeleccionadoC = null; // Oculta si ya estaba seleccionado
    } else {
      this.productoSeleccionadoC = producto; // Muestra el nuevo
    }
  }

}




