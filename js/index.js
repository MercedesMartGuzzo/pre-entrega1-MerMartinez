

let espectaculos = [];
const shows = document.querySelector("#shows");
const carrito = [];

let cantidadProductos = 0;
let totalAPagar = 0;


fetch("./js/espectaculos.json")
    .then(response => response.json())
    .then(ticket => {
        espectaculos = ticket
        elegirShow(espectaculos)
        agregarEventos();
    })
    .catch(error => console.error("Error al cargar los espectáculos:", error));


function elegirShow(showElegido) {
    shows.innerHTML = "";

    showElegido.forEach(show => {
        const card = document.createElement("div");
        card.classList.add("espectaculo");
        card.innerHTML = `          
            <div clas="espectaculo">

            <div class="descripcion">
                <h3>${show.nombre}</h3>
                <img src="${show.foto}">
                <p>Día: ${show.dia}</p>
                <p class=descripcion-parrafo>Calificación: ${show.calificacion}</p>
                <p>Precio $ ${show.entrada}</p>
                <div>
                    <button class="agregar-show" id="${show.id}">Agregar</button>
                </div>
            </div>
        </div>
            `;
        shows.appendChild(card);

    });

}

function agregarEventos() {
    const botonesAgregar = document.querySelectorAll(".agregar-show");

    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", sumarAlCarrito);
    });
}

function sumarAlCarrito(event) {
    const idShowSeleccionado = event.target.id;
    console.log("ID del show seleccionado:", idShowSeleccionado);

    const productoSeleccionado = espectaculos.find(show => show.id === idShowSeleccionado);
    console.log("Producto seleccionado:", productoSeleccionado);

    if (productoSeleccionado) {
        carrito.push(productoSeleccionado);

        cantidadProductos++;
        totalAPagar += productoSeleccionado.entrada;


        mostrarProductoEnCarrito(productoSeleccionado);
        if (productoSeleccionado) {


            console.log("Producto agregado al carrito:", productoSeleccionado);
           
        }
    }


    function mostrarProductoEnCarrito(productoSeleccionado) {

        Swal.fire({
            title: `¡Compra Realizada! Usted seleccionó :${productoSeleccionado.nombre}`,
            text: `Desea seguir comprando más entradas?`,

            icon: "success",
            confirmButtonColor: `rgba(8, 97, 8, 0.726)`,
            showCancelButton: true,
            cancelButtonText: `Fin`,
            width: 300,
        })


        console.log("Producto agregado al carrito:", productoSeleccionado);
        localStorage.setItem("producto-seleccionado", JSON.stringify(productoSeleccionado))

    }

}
const membresia = document.querySelector("#membresia");
const campoNombre = document.querySelector("#campo-nombre");

const campoEdad = document.querySelector("#campo-edad")
const campoCorreo = document.querySelector("#campo-correo")
const enviar = document.querySelector("#enviar");


membresia.addEventListener("submit", (e) => {
    e.preventDefault();
    Swal.fire({
        title: `¡Muchas gracias ${campoNombre.value}  por asociarte, tus datos han sido ingresado con éxito! `,
        icon: "success",
        confirmButtonColor: `rgba(8, 97, 8, 0.726)`,
        width: 300,
    });

    localStorage.setItem("campo-nombre", JSON.stringify(campoNombre.value));
    localStorage.setItem("campo-edad", JSON.stringify(campoEdad.value));
    localStorage.setItem("campo-correo", JSON.stringify(campoCorreo.value));


});

