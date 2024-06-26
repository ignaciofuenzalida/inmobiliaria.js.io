const propiedades_venta = [
    {
    nombre: "Apartamento de lujo en zona exclusiva",
    src: "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
    descripcion: "Este apartamento de lujo está ubicado en una exclusiva zona residencial",
    ubicacion: "123 Luxury Lane, Prestige Suburb, CA 45678",
    habitaciones: 4,
    baño:2,
    costo: 5.000,
    smoke: false,
    pets: false
    },

    {
    nombre: "Casa de campo",
    src: "https://arquitecturaviva.com/assets/uploads/articulos/71318/av_182045.webp?h=00ebdec0",
    descripcion: "Esta hermosa casas a las afueras de la ciudad, cuenta con todo lo necesario",
    ubicacion: "Lo marcoleta 505000, Rancagua,chile",
    habitaciones: 3,
    baño:2,
    costo: 2.500,
    smoke: true,
    pets: true,
    },

    {
    nombre: "Casa en zona de lujo",
     src: "https://planner5d.com/blog/content/images/size/w2000/2024/05/disenos.departamentos.software.1.jpg",
    descripcion: "Esta casa de lujo esta ubicada en la zona residencial de lo churro",
    ubicacion: "las brisas de lo churro 20010, lo churro, santigo",
    habitaciones: 7,
    baño:3,
    costo: 500.000,
    smoke: true,
    pets: true,
    },

    {
     nombre: "Apartamento en las condes",
     src: "https://i0.wp.com/www.socovesa.cl/blog/web/wp-content/uploads/2023/09/departamentos-vanguardia.webp?resize=1400%2C700&ssl=1",
     descripcion: "Este hermoso apartamento ofrece una diversas comodidas.",
     ubicacion: "Apoquindo 122233, Las condes, Santiago",
     habitaciones: 3,
     baño:2,
     costo: 2.500,
     smoke: true,
     pets: true,
    },

    {
    nombre: "Apartamento acogedor en la montaña",
    src: "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
    descripcion: "Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas",
    ubicacion: "789 Mountain Road, Summit Peaks, CA 23456",
    habitaciones: 2,
    baño:1,
    costo: 1.200,
    smoke: true,
    pets: true,
    },

    {
    nombre: "Penthouse de lujo con terraza panorámica",
    src: "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
    descripcion: "Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares",
    ubicacion: "567 Skyline Avenue, Skyview City, CA 56789",
    habitaciones: 3,
    baño:2,
    costo: 4.500,
    smoke: false,
    pets: true,
    },
     ]

     const template = document.querySelector('#venta');

     let html = ''
 
     for(propiedades_ventas of propiedades_venta){
         html+=
          `<div class="col-md-4 mb-4">
             <div class="card">
               <img
                 src= ${propiedades_ventas.src}
                 class="card-img-top"
                 alt="Imagen del departamento"
               />
               <div class="card-body">
                 <h5 class="card-title">
                     ${propiedades_ventas.nombre}
                 </h5>
                 <p class="card-text">
                     ${propiedades_ventas.descripcion}
                 </p>
                 <p>
                   <i class="fas fa-map-marker-alt"></i> 
                   ${propiedades_ventas.ubicacion}
                 </p>
                 <p>
                   <i class="fas fa-bed"></i> ${propiedades_ventas.habitaciones} Habitaciones |
                   <i class="fas fa-bath"></i> ${propiedades_ventas.baño} Baños
                 </p>
                 <p><i class="fas fa-dollar-sign"></i>${propiedades_ventas.costo}</p>
                 ${propiedades_ventas.smoke ? 
                     `<p class="text-success"><i class="fas fa-smoking"></i> Permitido fumar</p>` : 
                     `<p class="text-danger"><i class="fas fa-smoking-ban"></i> No se permite fumar</p>`}
                 ${propiedades_ventas.pets ? 
                     `<p class="text-success"><i class="fas fa-paw"></i> Mascotas permitidas</p>` : 
                     `<p class="text-danger"><i class="fas fa-ban"></i> No se permiten mascotas</p>`}
                 </div>
                 </div>
                 </div>`
                 }
 
     template.innerHTML = html;