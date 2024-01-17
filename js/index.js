/*  

l
*/

const uno = document.querySelector("#uno");
uno.addEventListener("click", elegirTeatro);
function elegirTeatro() {
    alert("Usted seleccionó Teatro Ciego")

}

const dos = document.querySelector("#dos");
dos.addEventListener("click", elegirCafe);
function elegirCafe() {
    alert("Usted seleccionó Café Literario")


}


const tres = document.querySelector("#tres");
tres.addEventListener("click", elegirUni);
function elegirUni() {
    alert("Usted seleccionó Unipersonal")

}




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

        let formaDePago = prompt("Ingrese la forma en que quiera pagar: Crédito/ Débito /Transferencia Bancaria o pulse (esc) para terminar").toLowerCase();



        while (formaDePago !== "esc") {

            if (formaDePago === "crédito" && (dia === "miercoles" || dia === "jueves" || dia === "viernes")) {
                alert("Con tu entrada te regalamos un trago!🍹");
            }
            else if (formaDePago === "débito" && (dia === "miercoles" || dia === "jueves" || dia === "viernes")) {
                alert("Con tu compra te regalamos un cupón de descuento en todas nuestras comidas!🍕🍔🥟");
            }
            else if (formaDePago === "transferencia bancaria" && (dia === "miercoles" || dia === "jueves" || dia === "viernes")) {
                alert("Con tu compra te regalamos un descuento para nuestra carta de vinos!!🍷");
            }
            else {
                alert("Opción incorrecta");
            }

            if (formaDePago !== "esc") {

                formaDePago = prompt("Ingrese la forma en que quiera pagar: Crédito/ Débito /Transferencia Bancaria o pulse (esc) para terminar").toLowerCase();

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

        }
    } else {
        alert("No se ha añadido ningún producto al carrito");
    }
}

function mostrarProductoEnCarrito(producto) {
    alert(` Producto añadido al carrito:\n
                Sector: ${producto.sector}\n
                Precio: ${producto.precio} pesos\n
                Día: ${producto.dia}\n
                Cantidad total de productos en el carrito: ${cantidadProductos};
                Total a pagar: ${totalAPagar} pesos`);
}



let cart = document.querySelector("#carrito");
cart.addEventListener("click", sumarAlCarrito);
localStorage.setItem("cart", JSON.stringify(cart))



let adherirme = document.querySelector("#asociarse");
asociarse.addEventListener("click", nuevoMiembro);
localStorage.setItem("asociarse", JSON.stringify(asociarse));

function nuevoMiembro() {

    let invitacion = prompt("¿Desea asociarse a nuestro teatro y obtener increíbles beneficios? SI/NO");

    if (invitacion === "si".toLowerCase()) {

        alert("A continuación, deberá ingresar sus datos");

        class Socios {
            constructor(nombre, edad, correo) {
                this.nombre = nombre;
                this.edad = edad;
                this.correo = correo;
            }
        }


        let nombre = prompt("Ingrese su nombre y apellido:");
        let edad = prompt("Ingrese su edad:");
        let correo = prompt("Ingrese su correo:");


        let nuevoSocio = new Socios(nombre, edad, correo);

        console.log("Nuevo socio: ", nuevoSocio);
        alert("Bievenida/o al club!! " + nombre + " pronto recibirás un correo con tus beneficos y novedades del teatro")
    } else {
        alert("Gracias por su visita. Si cambia de opinión, ¡siempre puede volver!");
    }
}

