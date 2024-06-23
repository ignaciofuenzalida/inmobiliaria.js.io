
import casasAlquiler from "./casas_alquiler"
    
    const mostrarCasasAlquiler = () =>{
    const container = document.getElementById("soloAlquiler")
    
    casasAlquiler.for ((propiedad) => {
        const card = document.createElement("div");
        card.className = "col-md-4 mb-4";
        card.innerHTML = `<div class = "card">
        <img src = "${propiedad.src}"
        class= "card-img-top"
        alt="Imagen de la propiedad"
        />
        < div class = "card-body">
        <h5 class= "card-title">
            ${propiedad.nombre}
        </h5>
        <p class ="card-text">
            ${propiedad.descripcion}
        </p>
        <p>
            <i class= "fas fa-map-marker-alt"></i>
            ${Propiedad.ubicacion}
        </p>
        <p>
            <i class= "fas fa-bed"></i> ${propiedad.habitaciones} Habitaciones 
            <i class= "fas fa-bath"></i> ${propiedad.baño} Baños
        </p>
        <p><i class= "fas fa-dollar-sign"></i> ${propiedad.costo}</p>
        ${propiedad.smoke ?
        `<p class="text-success"><i class="fas fa-smoking"></i> Permitido fumar</p>` :
        `<p class="text-danger"><i class="fas fa-smoking-ban"></i> No se permite fumar</p>`}
        ${propiedad.pets ?
        `<p class="text-success"><i class="fas fa-paw"></i> Mascotas permitidas</p>` :
        `<p class="text-danger"><i class="fas fa-ban"></i> No se permiten mascotas</p>`}
        
    </div>
    </div>`
    
    })
    
    }

    export default casasAlquiler