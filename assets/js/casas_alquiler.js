const casas_alquiler = [
    {
    nombre: "apartamento en el centro de la ciudad",
    src: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60",
    descripcion: "Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.",
    ubicacion: "123 Main Street, Anytown CA 91234",
    habitaciones: 2,
    baño:2,
    costo: 2.000,
    smoke: false,
    pets: true
    },

    { 
    nombre: "Apartamento con una excelente ubicación",
    src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT4GNTs5BfkwYLsiMldef_dS-bLvn88F0k4A&s",
    descripcion: "Este hermoso apartamento esta ubicado frente a grandes areas verdes y centros comerciales",
    ubicacion: "400000 Av. providencia, Providencia, Santiago",
    habitaciones: 2,
    baño:1,
    costo: 4.500,
    smoke: true,
    pets: false,
    },
    
    { nombre: "Apartamento luminoso con vista al mar",
     src:"https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
     descripcion: "Este hermoso apartamento ofrece una vista impresionante al mar",
    ubicacion: "456 Ocean Avenue, Seaside Town, CA 56789",
    habitaciones: 3,
    baño:2,
     costo: 2.500,
     smoke: true,
     pets: true,
    },
    
    { nombre: "Apartamento lujo en Papudo",
     src:"https://http2.mlstatic.com/D_NQ_NP_794390-MLC74642329237_022024-O.webp",
     descripcion: "Este hermoso departamento cuenta con una hermosa vista al mar y una gran piscina",
     ubicacion: " Av. Matta 200, Papudo.",
     habitaciones: 2,
     baño:1,
    costo: 5.500,
    smoke: true,
    pets: false,
     },
    
    { nombre: "Apartamento de lujo con exclusiva ubicación",
    src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtLA99aZpgvOW7VzrSI1WRnydE0f5RSDsVkA&s",
    descripcion: "Este hermoso apartamento ubicado en un sector residencial de la región",
    ubicacion: " 5030 Las palmas,",
    habitaciones: 3,
    baño:2,
    costo: 12.500,
    smoke: true,
    pets: true,
    },
    
    { nombre: "Condominio moderno en zona residencial",
    src:"https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60",
    descripcion: "Este elegante condominio moderno está ubicado en una tranquila zona residencial",
    ubicacion: "123 Main Street, Anytown, CA 91234",
    habitaciones: 2,
    baño:1,
    costo: 2.200,
    smoke: false,
    pets: false,
    },
             
    ]

    const template = document.querySelector('#casas_alquiler')
    let html = ''
    
    for(propiedades.alquiler of propiedades.alquiler){
        html+=
             `<div class="col-md-4 mb-4">
                <div class="card">
                  <img
                    src= ${propiedades.alquiler.src}
                    class="card-img-top"
                    alt="Imagen del departamento"
                  />
                  <div class="card-body">
                    <h5 class="card-title">
                        ${propiedades.alquiler.nombre}
                    </h5>
                    <p class="card-text">
                        ${propiedades.alquiler.descripcion}
                    </p>
                    <p>
                      <i class="fas fa-map-marker-alt"></i> 
                      ${propiedasdes.alquiler.ubicacion}
                    </p>
                    <p>
                      <i class="fas fa-bed"></i> ${propiedades.alquiler.habitaciones} Habitaciones |
                      <i class="fas fa-bath"></i> ${casas_alquiler.baño} Baños
                    </p>
                    <p><i class="fas fa-dollar-sign"></i>${casas_alquiler.costo}</p>
                    ${propiedades.alquiler.smoke ? 
                        `<p class="text-success"><i class="fas fa-smoking"></i> Permitido fumar</p>` : 
                        `<p class="text-danger"><i class="fas fa-smoking-ban"></i> No se permite fumar</p>`}
                    ${propiedades.alquiler.pets ? 
                        `<p class="text-success"><i class="fas fa-paw"></i> Mascotas permitidas</p>` : 
                        `<p class="text-danger"><i class="fas fa-ban"></i> No se permiten mascotas</p>`}
                    </div>
                    </div>
                    </div>`
                    }
    template.innerHTML = html
    