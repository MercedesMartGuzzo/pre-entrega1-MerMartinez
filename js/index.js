/* Seleccionar espectaculo */
const shows = document.querySelector("#shows");
const mostrar = document.querySelector("#mostrar");
const campoShow = document.querySelector("#campo-show")


shows.addEventListener("submit", (e) => {
    e.preventDefault();

    alert(`Bien hecho! Usted seleccionó ${campoShow.value} Continuamos al paso dos!`)

});



/* Elegir ubicación,día y formade pago */

const carrito = [];

let cantidadProductos = 0;
let totalAPagar = 0;



function sumarAlCarrito() {
    function seleccioneLugar() {
        const tickets = [
            { sector: "platea", precio: 10000 },
            { sector: "palco", precio: 15000 },
            { sector: "pullman", precio: 8000 },
            { sector: "super-pullman", precio: 7000 }
        ];

        let sectorElegido = prompt("Ingrese la ubicación que quiera comprar: platea/palco/pullman/super-pullman");

        let ubicaciones = tickets.find((ticket) => ticket.sector === sectorElegido);

        
        let dia = prompt("Elija el día a concurrir (Miércoles, Jueves o Viernes)").toLowerCase();
        alert("EL día seleccionado es " + dia);

        let formaDePago = prompt("Ingrese la forma en que quiera pagar: Credito/ Debito /Transferencia Bancaria o pulse (esc) para terminar").toLowerCase();


        
        while (formaDePago !== "esc") {

            if (formaDePago === "credito" && (dia === "miercoles" || dia === "jueves" || dia === "viernes")) {
                alert("Con tu entrada te regalamos un trago!🍹");
            }
            else if (formaDePago === "debito" && (dia === "miercoles" || dia === "jueves" || dia === "viernes")) {
                alert("Con tu compra te regalamos un cupón de descuento en todas nuestras comidas!🍕🍔🥟");
            }
            else if (formaDePago === "transferencia bancaria" && (dia === "miercoles" || dia === "jueves" || dia === "viernes")) {
                alert("Con tu compra te regalamos un descuento para nuestra carta de vinos!!🍷");
            }
            else {
                alert("Opción incorrecta");
            }

            if (formaDePago !== "esc") {

                formaDePago = prompt("Ingrese la forma en que quiera pagar: Credito/ Debito /Transferencia Bancaria o pulse (esc) para terminar").toLowerCase();

            }
        }

        alert("Gracias por tu compra!");


        if (ubicaciones) {

            console.log(ubicaciones);
            alert("Usted eligió " + sectorElegido + " con precio de " + ubicaciones.precio + " pesos.")

            return {
                sector: sectorElegido,
                precio: ubicaciones.precio,
                dia: dia,

            };
        }
        else {
            console.log("Sector no encontrado");

            alert("Lo siento, el sector ingresado no está disponible");
            return null;
        }
    }


/* Agregar productos al carrito */

    const productoSeleccionado = seleccioneLugar();

    if (productoSeleccionado) {

        carrito.push(productoSeleccionado);

        cantidadProductos++;
        totalAPagar += productoSeleccionado.precio;

        mostrarProductoEnCarrito(productoSeleccionado);

        const agregarMas = confirm("¿Desea agregar más productos al carrito?");

        if (agregarMas) {
            sumarAlCarrito();
        } else {
            alert("Gracias por tu compra!");
            localStorage.setItem("producto-seleccionado", JSON.stringify(productoSeleccionado));

        }
    } else {
        alert("No se ha añadido ningún producto al carrito");
    }


    function mostrarProductoEnCarrito(producto) {

        alert(` Producto añadido al carrito:\n
                Sector: ${producto.sector}\n
                Precio: ${producto.precio} pesos\n
                Día: ${producto.dia}\n
                Cantidad total de productos en el carrito: ${cantidadProductos};
                Total a pagar: ${totalAPagar} pesos`);
    }

}

let carro = document.querySelector("#carro")
carro.addEventListener("click", sumarAlCarrito);

/* Formulario para asociarse */

const membresia = document.querySelector("#membresia");
const campoNombre = document.querySelector("#campo-nombre");

const campoEdad = document.querySelector("#campo-edad")
const campoCorreo = document.querySelector("#campo-correo")
const enviar = document.querySelector("#enviar");


membresia.addEventListener("submit", (e) => {
    e.preventDefault();
    alert(`Muchas gracias ${campoNombre.value}  por asociarte, tus datos han sido ingresado con éxito! `);
    localStorage.setItem("campo-nombre", JSON.stringify(campoNombre.value));
    localStorage.setItem("campo-edad", JSON.stringify(campoEdad.value));
    localStorage.setItem("campo-correo", JSON.stringify(campoCorreo.value));


});
