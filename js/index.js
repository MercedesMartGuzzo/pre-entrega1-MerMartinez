
function sacarEntrada() {

    let elegirShow = prompt("Seleccione el espectáculo que quiere ver ( Teatro Ciego/ Café literario, Unipersonal)").toLowerCase();
    let dia = prompt("Elija el día a concurrir (Miércoles,Jueves o Viernes)").toLowerCase();

    alert("EL espectáculo elegido  es " + elegirShow + " para el día " + dia)

    let formaDePago = prompt("Ingrese la forma en que quiera pagar: Crédito/ Débito /Transferencia Bancaria y pulse (esc) para TERMINAR").toLocaleLowerCase();
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

        formaDePago = prompt("Ingrese la forma en que quiera pagar: Crédito/ Débito /Transferencia Bancaria y pulse (esc) para TERMINAR").toLocaleLowerCase();

    }
    alert("Gracias por visitarnos, hasta la próxima!")
}
sacarEntrada()

