import { CommonModule, NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CarritoService } from '../../servicios/carrito.service';
import { Productos } from '../../model/producto.model';
import { RouterModule } from '@angular/router';
import { FavoritoService } from '../../servicios/favorito.service';
import { OfertasService } from '../../servicios/ofertas.service';
import { FormsModule } from '@angular/forms';
import { BuscadorService } from '../../servicios/buscador.service';
import { ProductService } from '../../servicios/product.service';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent implements OnInit {
  /*
  
    Productos: Productos[] = [
      {
        id: 1,
        nombre: 'Taladro Percutor Luxus 13mm 850w ',
        descripcion: 'Con una capacidad de mandril de 13 mm y una velocidad máxima de rotación de 2700 rpm, este taladro es perfecto para perforar en diferentes materiales, desde madera hasta metal.',
        precio: 98568,
        img: './assets/taladro1.png',
        disponibilidad: true,
        categoria: 'Herramienta Electricas e Inalambricas',
        oferta: 0,
        stock: 20,
        marca: 'LUXUS',
        caracteristicas: 'Marca:LUXUS. TALADRO PERCUTOR REVERSIBLE. Mandril 13 MM. Selector de percutor. Limitador de profundidad. Traba de gatillo. Sentido de giro. Gatillo. Regulador de velocidad. Empuñadura auxiliar. Mango Soft. INCLUYE(73 accesorios). 40 Puntas de 25mm. 1 Bocallave magnética para punta. 10 Puntas de 50 mm. 2 Conectores para puntas. 3 Bocallaves magnéticas hexagonal. 5 Mechas 3 puntas para madera. 5 Mechas de acero rápido. 4 Mechas de widia. 3 Llave allem',
      },
  
      {
        id: 2,
        nombre: 'Amoladora Angular 115mm TOTAL Uso Profesional',
        descripcion: 'Amoladora Angular Total Tools 750W Monofásica Para Disco 115 Mm con Mango Auxiliar y Velocidad Máxima de 11000 RPM. Diseñada para alto rendimiento en aplicaciones profesionales y con calidad para uso industrial.',
        precio: 55811,
        img: './assets/amoladora2.png',
        disponibilidad: true,
        categoria: 'Herramienta Electricas e Inalambricas',
        oferta: 0,
        stock: 20,
        marca: 'TOTAL',
        caracteristicas: '• Marca:TOTAL • Eje con sistema de bloqueo para facilitar el cambio del disco.• Motor protegido contra ingreso de polvo.• Interruptor de encendido/apagado accesible para control y comodidad.• Mango de posición ajustable para facilitar la operación.• Engranajes de aluminio para mayor durabilidad.• Empuñadura lateral ergonómica.• Incluye mango auxiliar.• No incluye disco de corte.Especificaciones técnicas:• Potencia: 750W• Voltaje: 220V• Frecuencia: 50Hz• Diámetro del disco: 115 mm (4 1/2”)• Velocidad sin carga: 11000 RPM• Rosca del eje: M14• Accesorios incluidos:- Protector del disco- Brida de apoyo- Tuerca de ajuste- Manual de usuario',
      },
      {
        id: 3,
        nombre: 'Martillo Carpintero 450 Gr Total Industrial',
        descripcion: 'El Martillo Carpintero Galponero 450g 16oz Fibra D Vidrio Total es una herramienta esencial para cualquier carpintero, aficionado al bricolaje o profesional de la construcción. Con un peso de 16 oz y un largo de 32.5 cm, este martillo es perfecto para una variedad de tareas, desde clavar clavos hasta romper objetos.',
        precio: 9399,
        img: './assets/martillo3.png',
        disponibilidad: true,
        categoria: 'Herramientas Manuales',
        oferta: 0,
        stock: 4,
        marca: 'TOTAL',
        caracteristicas: 'Marca:Total-Modelo:THT73166-Tipo de martillo:Carpintero-Peso del martillo:450 g-Largo del martillo:33 cm-Material de la cabeza:Acero-Material de la manija:Fibra de vidrio',
      },
      {
        id: 4,
        nombre: 'Destornilladores Aislados Brinna 12 En 1 ',
        descripcion: 'SET DESTORNILLADORES AISLADOS 1000V 12 EN 1 MANGO INTERCAMBIABLE Y ESTUCHE HB-60 BRINNA',
        precio: 37756,
        img: './assets/destornilladores.png',
        disponibilidad: true,
        categoria: 'Herramientas Manuales',
        oferta: 0,
        stock: 12,
        marca: 'BRINNA',
        caracteristicas: '-Modelo:BRINNA-INCLUYE:- 12 puntas:Cuerpos Planos: 3x100mm , 4x100mm , 5.5x100mm-Cuerpos Pozidrive: PZ 1X100mm , PZ 2X100mm-Cuerpos Pozidriv + Plano: PZ/PL 1x100mm , PZ/PL 2x100mm-Cuerpos Phillips: PH Ox80mm, PH 1x80mm, PH 2x100mm-Cuerpos Torx: TX 10x100mm, TX 15x100mm- 1 Mango Intercambiable- 1 Tapa de Precisión- 1 Estuche Guardado- Destornilladores Aislados hasta 1000V- Materiales: Acero CRV 50, Mango: PP+TPR- Todas las puntas son magnéticas-Modelo:HB-60'
      },
      {
        id: 5,
        nombre: 'Juego Kit Set Destornillador Precisión Denver 145 Piezas',
        descripcion: 'DESTORNILLADOR DE PRECISIÓN INTERCAMBIABLE CON ESTUCHE RIGIDO IDEAL REPARACION DE CELULAR, COMPUTADORAS, CÁMARAS Y JOYERIA DENVER (DVP145)',
        precio: 64524,
        img: './assets/destornilladores5.png',
        disponibilidad: true,
        categoria: 'Herramientas Manuales',
        oferta: 10,
        stock: 5,
        marca: 'Denver',
        caracteristicas: '-Marca:Denver Tools -Modelo:DVP145 -Incluye: ESTUCHE RIGIDO CON SECTOR MAGNETICO--116 CRV BITS 4x28mm- HEX: H0.7 / H0.9 / H1.3 / H1.5 / H2.5 / H3.0 / H3.5 / H4.0 / H4.5 / H5.0 / H6.0- PHILLIPS: 1.0*2 / 1.5*3 / 2.0*2 / 2.5*2 / 3.0*3 / 3.5*2 / JIS000 / JIS00 / JIS0 / JIS1- TORX: T1*3 / T2*3 / T3*2 / T4*2 / T5 / T6 / T7 / T8 / T9 / T10 / T15 / T20- PLANO: 1.0*2 / 1.3*2 / 1.5*2 / 2.0*2 / 2.5*2 / 3.0*2 / 3.5*2 / 4.0*2- TORX HUECO: T6H / T7H / T8H / T9H / T10H / T15H / T20H- POZIDRIVE: PZ00*2 / PZ0*2 / PZ1*2 / PZ2*2- TRES ALAS: Y0.8*3 / Y2.0*2 / Y2.5*2 / Y3.0*2- PENTALOBE: 0.8*3 / 1.2*3 / 1.5*3 / 2.0*2- TIPO U: 2.0*2 / 2.6*2 / 3.0*2- TRIÁNGULO: 2.0 / 2.3 / 2.6 / 3.0- CUADRADO: SQ0 / SQ1 / SQ2- EXTRACTOR DE TARJETA SIM: SIM0.8 / SIM1.0- TIPO X: 1.5*2---4 S2 BITS 4x45mm- PHILLIPS: 1.5 / 2.0- PLANO: 1.5 / 2.0----12 MINI BOCALLAVES- SOCKET: M2.5*2 / 3.0 / 3.5 / 4.0 / 4.5 / 5.0 / 5 .5 / G3.8 / G4.5 / PH2 / U---2 PALANCAS DE CABEZA DOBLE-1 BARRA DE EXTENSION H4x130 mm-1 VENTOSA-5 PÚAS-1 PINZAS-1 MANGO ANTIDELIZANTE CON EXTENSION 50 MM',
      },
      {
        id: 6,
        nombre: 'Sierra Circular Bosch Gks 150 71/4 1500w',
        descripcion: 'La Sierra Circular Bosch GKS 150, con 1500W de potencia, tiene la fuerza y robustez suficiente para aplicaciones pesadas, ya sea en obras o talleres. Es ideal para cortes profundos y cortes en madera dura. Cuenta con recurso contra bloqueo para más seguridad, además de empuñadura auxiliar lo que garantiza más estabilidad durante el corte. El polvo se mantiene lejos del usuario gracias a su salida de polvo eficiente. Las escobillas de carbón son fácilmente accedidas, permitiendo que su cambio sea simple y fácil.',
        precio: 207456,
        img: './assets/sierraelectrica6.png',
        disponibilidad: true,
        categoria: 'Herramienta Electricas e Inalambricas',
        oferta: 0,
        stock: 5,
        marca: 'Bosch',
        caracteristicas: '•Marca:Bosch •Línea:Professional •Modelo:GKS 150 • Color:Azul •Voltaje:220V •Potencia:1,5 kW •Frecuencia:50 •Modelo detallado:GKS 150 •Diámetro del disco:184 mm •No es inalámbrico •Tipo de tecnología del motor:Con escobillas •Orientación de la mano:Ambidiestro •Profundidad de corte: 45 grados(4,5 cm) •Profundidad de corte: 90 grados(6,4 cm) •Accesorios incluidos:1 adaptador para aspiración de polvo, 1 disco de sierra de 24 dientes, 1 guía paralela •Velocidad máxima de rotación:6.000 rpm •Largo del cable:2 m •Nivel de ruido:96 dB •No incluye batería •No incluye guía láser •Con botón de bloqueo de disco •Usos recomendados:Madera, Plástico •Largo:34,7 cm •Ancho:23,2 cm •Altura:25,7 cm •Peso:3,7 kg',
      },
      {
        id: 7,
        nombre: 'Soldadora Inverter Lusqtoff MegaIron100-8 ',
        descripcion: 'Tipo de soldadora: MMA. Intensidad de soldadura mínima de 10A. Intensidad de soldadura máxima de 105A. Accesorio incluido:2 escuadras.',
        precio: 133423,
        img: './assets/soldadora7.png',
        disponibilidad: true,
        categoria: 'Herramienta Electricas e Inalambricas',
        oferta: 0,
        stock: 2,
        marca: 'Lusqtoff',
        caracteristicas: ' •Marca: Lusqtoff •Modelo: MEGAIRON100-8   •Con regulador     •Gabinete metálico muy resistente    •Tensión de entrada (V): lph AC220     •Frecuencia (Hz): 50.   •Capacidad de entrada nominal: 4,2 Kw   •Corriente de entrada nominal: 18,4 (A)    •Ciclo de trabajo MMA: 30%@)105A   •Tensión en vacío : 66 V          •Eficiencia: 85%             •Clase de protección: 1 P21S           •Grado de aislamiento: H             •Tipo de enfriamiento: FORZADO           •Electrodos: 1,6 - 2,5               •MASCARA DE SOLDAR FOTOSENSIBLE LUSQTOFF ST-1X           •Área de visualización: 90 * 35mm           •Tamaño del casquete: 110*90*9mm           •Sensor de arco: 2           •Estado de luz DIN: 4            •Oscuro Estado DIN fijo: 11           •Control ON/OFF Automático             •Control de sensibilidad: No Ajustable               •Protección UV / IR DIN 16            •Fuente de alimentación: Panel solar/Batería recargable            •Tiempo de encendido: 1 / 5000s              •Tiempo de apagado: 0.10-1.0s                   •Alarma de bajo volumen: SI             •Auto-comprobación: ADF NO              •Tº Funcionamiento -5~ +55c           •Tº almacenamiento-20~ +70c            •Plástico de alto impacto           •Peso: 420 g          •Soldadura : arco y plasma                 •ESCUADRA MAGNETICA LUSQTOFF 3 PULG 9KG            •Modelo: LQE6001            •Peso 320 Grs             •Medidas (Al x L x An): 8 x 1 x 12 cm      •Medida 3 pulgadas        •Angulo de trabajo 45; 90 y 135°     •Soporta: 9 kg      •CONTENIDO DE LA PUBLICACIÓN •1 Soldadora Inverter MEGAIRON100-8     •1 Cable con Pinza portaelectrodo      •1 Cable con Pinza masa     •1 Correa de transporte     •1 Manual de uso     •1 Mascara fotosensible para soldar Lusqtoff ST-1X     •2 Escuadras Soporte Magnético de 3 Pulgadas LQE6001',
      },
      {
        id: 8,
        nombre: 'Sierra Caladora Dewalt Dwe300 Portátil De 650w',
        descripcion: 'Sierra Caladora Dewalt Dwe300-b3 Portátil De 650w- Herramienta eléctrica portátil para cortes precisos en diversos materiales.- Potencia de 650W, ideal para trabajos exigentes.- Diseño ergonómico que facilita su manejo y reduce la fatiga durante el uso prolongado.- Velocidad variable que permite un control óptimo en diferentes tipos de corte.- Sistema de cambio rápido de hojas sin necesidad de herramientas adicionales.- Capacidad de biselado de 0 a 45 grados para cortes angulares.- Incluye adaptador para aspiración de polvo, manteniendo el área de trabajo limpia.',
        precio: 160575,
        img: './assets/caladora8.png',
        disponibilidad: true,
        categoria: 'Herramienta Electricas e Inalambricas',
        oferta: 15,
        stock: 7,
        marca: 'DeWalt',
        caracteristicas: 'Marca:DeWalt–Línea:serra dewalt–Modelo:DWE300–Voltaje:220V–Color:Amarillo/Negro–Potencia:650 W–Frecuencia:50 Hz–Velocidad mínima sin carga:500 rpm–Velocidad máxima sin carga:3.200 rpm–Capacidad máxima de perforación en madera:8,5 cm—Capacidad máxima de perforación en aluminio:2 cm—Capacidad máxima de perforación en acero:1 cm—Largo total:20 cm—Ancho total:8 cm—Altura total:21,5 cm—Peso:2,4 kg—Cantidad de velocidades:7—-Con velocidad variable—Sin sistema de reducción de ruido—Es industrial—No es inalámbrico—Con diseño ergonómico—Cantidad de posiciones:3—Grados de inclinación:45°—Accesorios incluidos:Sierra tico-tico, Manual de instrucciones—Con sistema de bloqueo—Sin luz LED—Sin batería—Con cargador—Sin extractor de polvo—Usos recomendados:Doméstico—Voltaje de la batería:12V',
      },
      {
        id: 9,
        nombre: 'Compresor de aire eléctrico portátil Lüsqtoff LC-2025',
        descripcion: 'Con tu Lüsqtoff LC-2025, las tareas manuales que requieran presión de aire serán mucho más sencillas. Ahorrá tiempo y lográ excelentes resultados sin esfuerzo.',
        precio: 253899,
        img: './assets/compresor9.png',
        disponibilidad: true,
        categoria: 'Herramienta Electricas e Inalambricas',
        oferta: 0,
        stock: 5,
        marca: 'Lusqtoff',
        caracteristicas: 'Marca: Lusqtoff---Modelo: LC-2025---Tensión: 220 V – 50 Hz---Potencia: 2 Hp---Tanque: 25 Lts---Presión Máxima: 115 Psi---Caudal: 186 L/min---Peso Neto: 22 Kg',
      },
      {
        id: 10,
        nombre: 'Amoladora Recta 710w 220v + Accesorios Lüsqtoff',
        descripcion: 'La amoladora Lüsqtoff es una herramienta versátil, que permite realizar diferentes trabajos con una terminación profesional. Por eso, es una excelente opción sumarla a tu taller o caja de herramientas.',
        precio: 145952,
        img: './assets/amoladorarecta10.png',
        disponibilidad: true,
        categoria: 'Herramienta Electricas e Inalambricas',
        oferta: 0,
        stock: 5,
        marca: 'Lusqtoff',
        caracteristicas: 'Marca:Lüsqtoff–Modelo:ARL710-8—Color:Naranja—Voltaje:220V—Velocidad mínima de rotación:12.000 rpm—Velocidad máxima de rotación:28.000 rpm—Peso:2,1 kg—Largo:35 cm—Ancho:8 cm—Accesorios incluidos:1 llave, 1 boquilla de sujeción—Frecuencia:50 Hz—Potencia:710 W—Tipo de amoladora:Recta—Es mini amoladora:No—Diámetro del disco:10 mm—Tipo de interruptor:Tecla—Con regulación de velocidad:Sí—Es inalámbrico:No—Con mango lateral:Sí',
      },
      {
        id: 11,
        nombre: 'Maza De Goma Wadfow Martillo 900grs',
        descripcion: ' Fabricada con materiales de alta calidad, la cabeza de goma garantiza un impacto efectivo sin dañar las superficies, mientras que el mango ergonómico de fibra proporciona un agarre seguro y cómodo durante horas de uso continuo',
        precio: 7304,
        img: './assets/maza11.png',
        disponibilidad: true,
        categoria: 'Herramientas Manuales',
        oferta: 0,
        stock: 12,
        marca: 'Wadfow',
        caracteristicas: '-Marca:Wadfow -Modelo:Whm7307-Peso:900 g-Material del mango:Plástico-Material de la cabeza:Goma-Forma de la cabeza:Octagonal-Largo del mango:25 cm',
      },
      {
        id: 12,
        nombre: 'Juego Llaves Torx 9 Piezas T 10 A T 50 Cortas Blister',
        descripcion: 'Resistentes y Duraderos • Ideal, para: Automóviles, Motos, Sistemas de Freno de Bicicleta, Discos Duros, Garage, Muebles, Hogar, Sistemas de Ordenador y Electrónica de Consumo, etc.',
        precio: 3685,
        img: './assets/juegodellaves12.png',
        disponibilidad: true,
        categoria: 'Herramientas Manuales',
        oferta: 10,
        stock: 5,
        marca: 'Price Mania',
        caracteristicas: '-Marca:Price Mania -Modelo:Qtools-Tipo de llave:Torx-Acabado de la llave:Brillante-Tamaño de la llave:T10 - T15 - T20 - T25 - T27 - T30 - T40 - T45 - T50-Tipo de cabezal:Fija-Materiales:Acero cromo vanadio',
      },
      {
        id: 13,
        nombre: 'Caja JIN Feng jf-1046 Set Herramientas',
        descripcion: "Set Caja Herramientas Juego Llave Tubo Kit 46 Piezas Estuche:* Estuche Organizador Plástico.* Llave Cricket Reversible.* Incluye todo encastres 1/4:Llaves allen 1.5mm, 2mm, 2.5mm.*Movimiento en ángulo.*Barras extensión 2'' y 4''.*Extension flexible 6'' (resorte flexible permite trabajar en lugares difíciles).*Llave de fuerza.*Agarre tipo destornillador para los bits.*Adaptador para bits standard.* 13 Tubos incluidos:4mm, 4.5mm, 5mm, 5.5mm, 6mm, 7mm, 8mm, 9mm, 10mm, 11mm, 12mm, 13mm,14mm.* 21 puntas bits incluidas:*PARKER 4, 5.5, 7*PHILIPS 1, 2, 3*POZIDRIVE 1, 2, 3*ALLEN 3, 4, 5, 6, 7, 8*TORK 10, 15, 20, 25, 30, 40 ",
        precio: 11999,
        img: './assets/juegodellaves13.png',
        disponibilidad: true,
        categoria: 'Herramientas Manuales',
        oferta: 0,
        stock: 5,
        marca: 'JIN Feng',
        caracteristicas: '-Marca:JIN Feng -Modelo:jf-1046-Tipo de llave:Tubo-Color:Negro-Acabado de la llave:Mate-Medidas del cabezal:1/4-Tipo de cabezal:Ajustable-Materiales:Acero-Con mango antideslizante:Si-Con diseño ergonómico:si',
      },
      {
        id: 14,
        nombre: 'Mini Motosierra Inalambrica 20v De Mano',
        descripcion: 'La motosierra de mano DALMCH20-1K a batería de 20 V es compacta y potente, ideal para cortes precisos y rápidos en madera de hasta 90 mm de grosor. Con una velocidad sin carga de 3000 rpm y una longitud de espada de 4" (102 mm), ofrece un rendimiento excepcional en un diseño ligero de solo 1 kg. Perfecta para tareas de jardinería y mantenimiento, combina eficiencia y facilidad de uso.',
        precio: 81817,
        img: './assets/minimotosierra14.png',
        disponibilidad: true,
        categoria: 'Herramienta Electricas e Inalambricas',
        oferta: 5,
        stock: 5,
        marca: 'Daewoo',
        caracteristicas: '•Marca:Daewoo •Modelo:DALMCH20-1K •Color:Naranja/Negro/Gris •Voltaje:20V •Tipo de alimentación:Batería •Con arranque fácil:si •Largo de la espada:10,16 cm •Accesorios incluidos:1 batería, 1 cargador, 1 contenedor para lubricante (no incluye lubricante), 1 destornillador, 1 llave, 1 maletín •Voltaje de la batería:20V •Peso: 1kg •Velocidad máxima de la cadena:5m/s •Velocidad máxima del motor:3.000 rpm',
      },
      {
        id: 15,
        nombre: 'Kit Pinza Pelacables Automatica',
        descripcion: 'KIT PINZA PELA CABLES AUTOMATICA PROFESIONAL + TERMINALES - TBCIN. Realiza un corte radial y la extracción del aislamiento del cable evitando el desmechado de los hilos de cobre. También funciona como alicate corta cables. Incluye kit de terminales y precintos. Presentación en blister con gancho para colgar, ideal para transportar.',
        precio: 44905,
        img: './assets/pinzapelacables15.png',
        disponibilidad: true,
        categoria: 'Herramientas Manuales',
        oferta: 0,
        stock: 5,
        marca: 'TBCin',
        caracteristicas: '•Marca: TBCin •INCLUYE:Empalme A14 x10, B16 x10. Horquilla A10 x20, B10 x20. Pala hembra A16 x20, B18 x20. Ojal A3 x20, B3 x20. Pala macho A17 x20, B19 x20. Puntera hueca NEGRO x19. Precinto amarillo x20 y azul x20. Seda negra x20. •Modelo: HS-K700A. •Rango de pelado de cable: 0,25 - 6 mm2. •Rango de crimpeo de terminales: 0,50 - 6 mm2. Fuerza y largo de pelado ajustable. •Colocación de terminales aislados y no aislados. •Alicate cortacables. •Dimensión: 210 mm - 10”. • Peso: 570 gr. •Con mango antideslizante •Color:Rojo/Negro',
      },
      {
        id: 16,
        nombre: 'Taladro Atornillador Percutor 18v Inalambrico',
        descripcion: 'El Taladro Atornillador Percutor Inalámbrico Lusqtoff 18V es una herramienta potente y versátil, ideal para bricolaje y reparaciones. Cuenta con mandril autoajustable, 18+1 niveles de torque, mango antideslizante, luz LED, indicador de batería, dos baterías de litio, cargador, punta Phillips y maletín. Ofrece hasta 1350 RPM y 2.0A de potencia, combinando comodidad y alto rendimiento.',
        precio: 115358,
        img: './assets/taladroatornillador16.png',
        disponibilidad: true,
        categoria: 'Herramienta Electricas e Inalambricas',
        oferta: 0,
        stock: 5,
        marca: 'Lusqtoff',
        caracteristicas: '•Marca:Lusqtoff •Voltaje: 18V •Viene con maletín. •Su frecuencia es de 50. •Incluye: 2 Baterías de ion de litio de carga rápida •Tamaño del mandril: 10 mm •Es inalámbrico •Con función destornillador •Con función percutor',
      },
      {
        id: 17,
        nombre: 'Escalera Articulada Black+decker',
        descripcion: 'Escalera articulada Black and decker 4x4 16 escalones FS >13 posiciones en 1 escalera >Extremadamente versátil, ligera y fácil de transportar. >Se puede utilizar como escalera trasera, escalera de pintor en forma de A, andamio y otras 10 posiciones. >Sus juntas son autoblocantes. >Posee extensión lateral para mayor estabilidad, peldaños antideslizantes con mayor área de contacto, zapatas engomadas. >Carga máxima de trabajo es de 150 Kg. >Material de aluminio y polipropileno.',
        precio: 232369,
        img: './assets/escalera17.png',
        disponibilidad: true,
        categoria: 'Herramientas Manuales',
        oferta: 15,
        stock: 5,
        marca: 'Black+Decker',
        caracteristicas: '-Marca: Black+Decker- Medidas de la escalera empaquetado. - *Alto: 123 Cm - *Profundidad: 28 Cm - *Ancho: 36 Cm - *Peso: 13kg - Medidas de la escalera Abierta - largo total: 460 Cm - Abierta Tipo tijera: 225 Cm - Abierta como andamio: 123 Cm',
      },
      {
        id: 18,
        nombre: 'Tornillo Autoperforante Techo 14 X 2 Bolsa X 100',
        descripcion: 'Punta mecha con arandela vulcanizada. Son utilizados para montajes de techos, tinglados, galpones, silos, carrocerías, unión de perfiles, carpintería metálica y viviendas industrializadas. Fabricados en acero cincado, estos tornillos autoperforantes de 6.3 mm de diámetro y cabeza hexagonal garantizan una fijación segura y duradera en superficies como chapa y perfiles metálicos. La forma de la rosca es aterrajadora, lo que facilita su instalación. Se calculan 3 tornillos por m² de chapa.',
        precio: 8910,
        img: './assets/tornillo18.png',
        disponibilidad: true,
        categoria: 'Herramientas Manuales',
        oferta: 10,
        stock: 5,
        marca: 'Gramabi',
        caracteristicas: '•Marca: Gramabi •Tipo de tornillo:Autoperforante •Autoperforante:Hexagonal •Sistema de apriete: Rosca •Unidades por pack:100 •Tamaño:14 •Largo: 5cm •Diámetro:6,3 mm •Superficies recomendadas:Chapa, Perfil Metálico •Forma de la punta del tornillo:Mecha •Material:Acero zincado',
      },
      {
        id: 19,
        nombre: 'Kit Cintas Aisladoras Tacsa 6 Rollos De 10 Metros',
        descripcion: 'Cada Kit Consta de: •1 Rollo de Cinta Aisladora Tacsa 10 Metros Amarilla •1 Rollo de Cinta Aisladora Tacsa 10 Metros Azul •1 Rollo de Cinta Aisladora Tacsa 10 Metros Roja •1 Rollo de Cinta Aisladora Tacsa 10 Metros Verde •1 Rollo de Cinta Aisladora Tacsa 10 Metros Blanca •1 Rollo de Cinta Aisladora Tacsa 10 Metros Negra',
        precio: 13853,
        img: './assets/cinta19.png',
        disponibilidad: true,
        categoria: 'Herramientas Manuales',
        oferta: 10,
        stock: 5,
        marca: 'Elumiled',
        caracteristicas: '•Marca:Elumiled •Modelo: KIT-AIS-10M-6 •Color:Rojo Negro Azul Verde Amarillo Blanco •Largo x Ancho:10 m x 1.9 cm •Tipo de cinta adhesiva:Aislante •Superficies recomendadas:Cables •Espesor: 0,15 mm •Material:PVC •Temperatura máxima soportada:90 °C ',
      },
      {
        id: 20,
        nombre: 'Cinta Métrica 5 Metros Con Freno Evel 525 ',
        descripcion: 'Esta cinta métrica tiene un fleje de acero de 25 mm, carcasa plástica resistente y diseño ergonómico. Incluye gancho magnético, botón de tranca, puntera corrediza y accesorios para cinturón y mano, lo que la hace precisa, segura y fácil de transportar. Ideal para trabajos exigentes.',
        precio: 12210,
        img: './assets/cintametrica20.png',
        disponibilidad: true,
        categoria: 'Herramientas Manuales',
        oferta: 0,
        stock: 5,
        marca: 'Evel',
        caracteristicas: '•Marca: Evel •Modelo:525 •Largo de la cinta:5m •Ancho de la cinta:2,5cm •Peso:230 g •Unidades de medida:m •Material de la cinta:Acero •Material de la superficie:Plástico •Es retráctil •Es plegable •Con botón de tranca •Con gancho magnético •Con diseño ergonómico',
      },
  
  
  
    ]
  
    productosFiltrados: Productos[] = []
    productosBuscados: Productos[] = []
    busc: string = '';
  
  
    constructor(private carritoService: CarritoService,
      private favoritoService: FavoritoService,
      private ofetrasService: OfertasService,
      private buscadorService: BuscadorService
    ) { }
  
    ngOnInit(): void {
      this.ofetrasService.cargarProductos(this.Productos);
  
      this.buscadorService.filtro$.subscribe(valor => {
        this.busc = valor;
        this.buscarProductos();
      })
  
  
    }
  
  
  
  
  
    agregar(producto: Productos) {
      this.carritoService.agregarAlCarrito(producto);
      alert('Producto agregado al carrito');
  
    }
    productoSeleccionado: Productos | null = null;//guarda el producto seleccionado aunque al principio empienza en null
  
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
    agregarF(producto: Productos) {/**agrega los productos a favoritos 
      this.favoritoService.agregarFavorito(producto);
      alert('Producto agregado a favoritos')
  
    }
    filtrarPorCategoria(valor: string): void {
      if (valor === "Todos") {
        this.productosFiltrados = this.Productos
        console.log(this.productosFiltrados)
  
      } else {
        this.productosFiltrados = this.Productos.filter(p => p.categoria === valor)/**realiza un arreglo con los productos filtrados segun su categoria 
        console.log(this.productosFiltrados)
  
      }
  
  
  
  
    }
    searchTerm: string = '';
    selectedCategory: string = '';
    selectedBrad: string = '';
    minprecio: number | null = null;
    maxprecio: number | null = null;
    get categories(): string[] {
      return [...new Set(this.Productos.map(p => p.categoria))]
    }
    get marca(): string[] {
      return [...new Set(this.Productos.map(p => p.marca))]
    }
    onSearch(event: Event): void {
      event.preventDefault();
    }
    resetFilter(): void {
      this.searchTerm = ''
      this.selectedCategory = ''
      this.selectedBrad = ''
      this.minprecio = null;
      this.maxprecio = null;
    }
  
  
    get filteredProducts(): Productos[] {
      return this.Productos.filter(p => (
        this.searchTerm === '' || p.nombre.toLocaleLowerCase().includes(this.searchTerm.toLocaleLowerCase())
      ) &&
        (this.selectedCategory === '' || p.categoria === this.selectedCategory) &&
        (this.selectedBrad === '' || p.marca === this.selectedBrad) &&
        (this.minprecio === null || p.precio >= this.minprecio) &&
        (this.maxprecio === null || p.precio <= this.maxprecio))
    }
    buscarProductos() {
      if (!this.busc || this.busc.trim() === '') {
        // si no hay búsqueda, muestro filtrados (no todos)
        this.filteredProducts;
      } else {
        const termino = this.busc.toLowerCase();
  
        this.productosBuscados = this.filteredProducts.filter(p =>
          p.nombre.toLowerCase().includes(termino) ||
          p.descripcion.toLowerCase().includes(termino) ||
          p.marca.toLowerCase().includes(termino) ||
          p.categoria.toLowerCase().includes(termino)
        );
      }
    }
    get productosParaMostrar(): Productos[] {
      // si hay productos buscados, muestro esos
      if (this.productosBuscados && this.productosBuscados.length > 0) {
        return this.productosBuscados;
      }
  
  
      // si no hay búsqueda, muestro los filtrados
      return this.filteredProducts;
  
  
  */
  productosFiltrados: Productos[] = []
  productosBuscados: Productos[] = []
  busc: string = '';

  // Lista de productos obtenidos desde el backend.
  productos: Productos[] = [];

  // Estado para mostrar un spinner o mensaje de carga.
  cargando = true;

  // Texto para mostrar un error en la interfaz si algo falla.
  error = '';

  constructor(
    // Servicio encargado de obtener productos desde el backend.
    private productService: ProductService,

    // Servicio responsable de agregar productos al carrito y manejar su estado.
    private carritoService: CarritoService,

    // Servicio encargado de gestionar los productos favoritos del usuario.
    private favoritoService: FavoritoService
  ) { }

  // Método del ciclo de vida, se ejecuta al inicializar el componente.

  // Método del ciclo de vida, se ejecuta al inicializar el componente.
  ngOnInit(): void {
    this.cargarProductos();
  }
  cargarProductos(): void {
  this.productService.obtenerProductos().subscribe({
    next: (res: any) => {
      console.log('RAW backend response:', res);
      this.productos = res; // prueba directa
      this.cargando = false;
    },
    error: (err) => {
      console.error('Error al cargar productos:', err);
      this.error = 'No se pudieron cargar los productos.';
      this.cargando = false;
    }
  });
  
  
}





  // Agrega un producto al carrito llamando al servicio correspondiente.
  agregarAlCarrito(producto: Productos): void {
    this.carritoService.agregarProducto(producto).subscribe({
      next: () => console.log('Producto agregado'),
      error: err => console.error(err)
    });
  }

  // Agrega un producto a la lista de favoritos del usuario.
  agregarAFavoritos(producto: Productos): void {
    this.favoritoService.agregarFavorito(producto).subscribe({
      next: () => console.log('Agregado'),
      error: (err) => console.error(err)
    });
  }


  filtrarPorCategoria(valor: string): void {
    if (valor === "Todos") {
      this.productosFiltrados = this.productos
      console.log(this.productosFiltrados)

    } else {
      this.productosFiltrados = this.productos.filter(p => p.categoria === valor)/**realiza un arreglo con los productos filtrados segun su categoria*/
      console.log(this.productosFiltrados)

    }
  }





  searchTerm: String = '';
  selectedCategory: string = '';
  selectedBrad: string = '';
  minprecio: number | null = null;
  maxprecio: number | null = null;
  get categories(): string[] {
    return [...new Set(this.productos.map(p => p.categoria))]
  }
  get marca(): string[] {
    return [...new Set(this.productos.map(p => p.marca))]
  }
  onSearch(event: Event): void {
    event.preventDefault();
  }
  resetFilter(): void {
    this.searchTerm = ''
    this.selectedCategory = ''
    this.selectedBrad = ''
    this.minprecio = null;
    this.maxprecio = null;
  }


  get filteredProducts(): Productos[] {
    return this.productos.filter(p => (
      this.searchTerm === '' || p.Nombre.toLocaleLowerCase().includes(this.searchTerm.toLocaleLowerCase())
    ) &&
      (this.selectedCategory === '' || p.categoria === this.selectedCategory) &&
      (this.selectedBrad === '' || p.marca === this.selectedBrad) &&
      (this.minprecio === null || p.Precio >= this.minprecio) &&
      (this.maxprecio === null || p.Precio <= this.maxprecio))
  }
  buscarProductos() {

    const termino = this.busc.trim().toLowerCase();

    // Si no hay texto de búsqueda → vaciar resultados y mostrar filtrados
    if (termino === '') {
      this.productosBuscados = [];
      return;
    }

    // Si hay búsqueda → filtrar dentro de los productos filtrados
    this.productosBuscados = this.filteredProducts.filter(p =>
      p.Nombre.toLowerCase().includes(termino) ||
      p.Descripcion.toLowerCase().includes(termino) ||
      p.marca.toLowerCase().includes(termino) ||
      p.categoria.toLowerCase().includes(termino)
    );

  }

  get productosParaMostrar(): Productos[] {
    // si hay productos buscados, muestro esos
    if (this.productosBuscados && this.productosBuscados.length > 0) {
      return this.productosBuscados;
    }


    // si no hay búsqueda, muestro los filtrados
    return this.filteredProducts;









  }
  productoSeleccionado: Productos | null = null;//guarda el producto seleccionado aunque al principio empienza en null

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




