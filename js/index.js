
function sacarEntrada() {

    let elegirShow = prompt("Seleccione el espectáculo que quiere ver ( Teatro Ciego/ Café literario/ Unipersonal)").toLowerCase();
    let dia = prompt("Elija el día a concurrir (Miércoles,Jueves o Viernes)").toLowerCase();

    alert("EL espectáculo elegido  es " + elegirShow + " para el día " + dia)


    const tickets = [

        { sector: "platea", precio: 10000 },
        { sector: "palco", precio: 15000 },
        { sector: "pullman", precio: 8000 },
        { sector: "super-pullman", precio: 7000 }
    ]

    let sectorElegido = prompt("Ingrese la ubicación que quiera comprar: platea/palco/pullman/super-pullman");

    let ubicacion = tickets.find((ticket) => ticket.sector === sectorElegido);

    if (ubicacion) {
        console.log(ubicacion);
        alert("Usted eligió " + sectorElegido + " con precio de " + ubicacion.precio + " pesos.");
    } else {
        console.log("Sector no encontrado");
        alert("Lo siento, el sector ingresado no está disponible");
    }


    let formaDePago = prompt("Ingrese la forma en que quiera pagar: Crédito/ Débito /Transferencia Bancaria o pulse (esc) para terminar").toLocaleLowerCase();
    while (formaDePago !== "esc") {

        if (formaDePago === "crédito" && (dia === "miercoles" || dia === "jueves" || dia === "viernes")) {
            alert("con tu entrada te regalamos un trago!🍹")
        }

        else if (formaDePago === "débito" && (dia === "miercoles" || dia === "jueves" || dia === "viernes")) {
            alert("con tu compra te regalamos un cupón de descuento en todas nuestras comidas!🍕🍔🥟")
        }

        else if (formaDePago === "transferencia bancaria" && (dia === "miercoles" || dia === "jueves" || dia === "viernes")) {
            alert("con tu compra te regalamos un descuento para nuestra carta de vinos!!🍷")
        }

        else {
            alert("Opcion incorrecta")

        }

        formaDePago = prompt("Ingrese la forma en que quiera pagar: Crédito/ Débito /Transferencia Bancaria o pulse (esc) para terminar").toLocaleLowerCase();
    }
    alert("Gracias por tu compra!")


}

sacarEntrada()

let invitacion = prompt("¿Desea asociarse a nuestro teatro y obtener increíbles beneficios? SI/NO");

if (invitacion === "si".toLowerCase() ){

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
    alert(  "Bievenida/o al club!! "+ nombre +" pronto recibirás un correo con tus beneficos y novedades del teatro" )
} else {
    alert("Gracias por su visita. Si cambia de opinión, ¡siempre puede volver!");
}






