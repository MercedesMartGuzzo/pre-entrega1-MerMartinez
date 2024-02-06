

let espectaculos = [];
const shows = document.querySelector("#shows");
const carrito = [];
let cantidadProductos = 0;
let totalAPagar = 0;
const seccionPagar = document.querySelector("#productos-en-carrito")


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
        card.classList.add("descripcion");
        card.innerHTML = `          
        
            <div class = "espectaculo" >
                <h3>${show.nombre}</h3>
                <img src="${show.foto}">
                <p>Día: ${show.dia}</p>
                <p class=descripcion-parrafo>Calificación: ${show.calificacion}</p>
                <p>Precio $ ${show.entrada}</p>
                <div class= "boton-pie">
                    <button class="agregar-show" id="${show.id}">Agregar</button>
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
        mostrarProductoEnCarrito(productoSeleccionado);
        mostrarPrecioTotalEnCarrito();
        console.log("Producto agregado al carrito:", productoSeleccionado);
    }


    function mostrarProductoEnCarrito(productoSeleccionado) {

        Swal.fire({
            title: `¡Compra Realizada! Usted seleccionó :${productoSeleccionado.nombre}`,
            text: "Desea seguir comprando más entradas?",
            icon: "success",
            confirmButtonColor: "rgba(8, 97, 8, 0.726)",
            confirmButtonText: "Si",
            showCancelButton: true,
            cancelButtonText: "No",
            width: 300,
        }).then((result) => {
            if (result.dismiss === Swal.DismissReason.cancel) {
                // Si se hace clic en el botón "Cancelar"
                Swal.fire({
                    title: `Usted seleccionó :${productoSeleccionado.nombre} con un precio de $:${productoSeleccionado.entrada}`,
                    text: " Ir a tus compras",
                    icon: "success",
                    confirmButtonColor: "rgba(8, 97, 8, 0.726)",
                    confirmButtonText: "Ir al Carro",
                    width: 300,
                }).then((payResult) => {
                    if (payResult.isConfirmed) {
                        // Si se hace clic en el botón "Pagar"
                        mostrarProductosEnSeccionPagar();
                        sacarPrecioTotalCarrito();
                        console.log("Redirigiendo a la sección de pagar");
                        window.location.href = "#carritoTotal";
                    }
                });
            }
        });


        console.log("Producto agregado al carrito:", productoSeleccionado);
        localStorage.setItem("producto-seleccionado", JSON.stringify(productoSeleccionado))

    }
}

function mostrarProductosEnSeccionPagar() {
    const contenedorProductos = document.getElementById("productos-en-carrito");
    contenedorProductos.innerHTML = ""; // Limpiamos el contenido actual

    carrito.forEach(producto => {
        const productoDiv = document.createElement("div");
        productoDiv.classList.add("descripcion2");
        productoDiv.innerHTML = `

    
    <div class ="espectaculo">
                <p>${producto.nombre} </p>
                <img src="${producto.foto}">
                <p>Día: ${producto.dia}</p>
                <p class=descripcion-parrafo>Calificación: ${producto.calificacion}</p>
                <p>Precio ${producto.entrada}</p>
            
            <div>
            </div>
        `;
        contenedorProductos.appendChild(productoDiv);
    });

}


function mostrarPrecioTotalEnCarrito() {
    const precioTotal = sacarPrecioTotalCarrito();
    let precioTotalElement = document.getElementById("carritoTotal");
    if (precioTotalElement) {
        precioTotalElement.innerText = `$${formatearPrecio(precioTotal)}`;
    }
}



function sacarPrecioTotalCarrito() {
    let precioTotal = 0;
    for (const producto of carrito) {
        precioTotal += producto.entrada;
    }
    return precioTotal;

}

function formatearPrecio(precio) {
    return precio.toFixed(2);
}

document.getElementById("btnPagar").addEventListener("click", () => {
    Swal.fire({
        title: 'Confirmar pago',
        text: '¿Estás seguro de que deseas realizar el pago?',
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: 'rgba(8, 97, 8, 0.726)',
        cancelButtonColor: 'grey',
        confirmButtonText: 'Sí, pagar',
        cancelButtonText: 'Cancelar'
    }).then((result) => {
        if (result.isConfirmed) {
            // Si el usuario confirma, realiza el pago
            setTimeout(() => {
                Swal.fire({
                    title: 'Pago realizado',
                    text: 'Hasta pronto!',
                    icon: 'succes',
                    confirmButtonColor: 'rgba(8, 97, 8, 0.726)',
                });
            }, 200);
            pagarTotal();
        }
    });
});

/*  Función para pagar el total */
function pagarTotal() {
    const precioTotal = sacarPrecioTotalCarrito();
    simularPago(precioTotal)
        .then(() => {
            console.log("Pago exitoso");

        })
        .catch(error => {
            /*  errores durante el pago */
            console.error("Error durante el pago:", error);
        });
    }
function limpiarCarrito() {

    carrito.length = 0;
    cantidadProductos = 0;
    totalAPagar = 0;

    mostrarPrecioTotalEnCarrito();
    mostrarProductosEnSeccionPagar();
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

