// numeros
let one = document.getElementById("one");
let two = document.getElementById("two");
let three = document.getElementById("three");
let four = document.getElementById("four");
let five = document.getElementById("five");
let six = document.getElementById("six");
let seven = document.getElementById("seven");
let eight = document.getElementById("eight");
let nine = document.getElementById("nine");
let zero = document.getElementById("zero");
let numbers = document.getElementsByClassName("number");
// operacion
let suma = document.getElementById("suma");
let resta = document.getElementById("resta");
let multiplicacion = document.getElementById("multiplicacion");
let division = document.getElementById("division");
let punto = document.getElementById("punto");
let equal = document.getElementById("equal");
let operation = document.getElementsByClassName("operation");
// funciones
let del = document.getElementById("del");
let reset = document.getElementById("reset");
let screen = document.getElementById("screen");
// numeros
let numa = "0";
let numb = "";
let operacion = "";
let swit = 0;
// eventos numeros
for (const i of numbers) {
    i.addEventListener("click", (e) => {
        if (screen.textContent == "0") screen.textContent = ""
    })
}
const validarSignos = () => {
    let string = screen.textContent.split("");
    let reg = ["x", "/", "-", "+", "."];
    return reg.includes(string[string.length - 1]);
}

one.addEventListener("click", (e) => {
    e.preventDefault();

    screen.textContent += "1";

})
two.addEventListener("click", (e) => {
    e.preventDefault();

    screen.textContent += "2";

})
three.addEventListener("click", (e) => {
    e.preventDefault();

    screen.textContent += "3";

})
four.addEventListener("click", (e) => {
    e.preventDefault();

    screen.textContent += "4";

})
five.addEventListener("click", (e) => {
    e.preventDefault();

    screen.textContent += "5";

})
six.addEventListener("click", (e) => {
    e.preventDefault();

    screen.textContent += "6";

})
seven.addEventListener("click", (e) => {
    e.preventDefault();

    screen.textContent += "7";

})
eight.addEventListener("click", (e) => {
    e.preventDefault();

    screen.textContent += "8";


})
nine.addEventListener("click", (e) => {
    e.preventDefault();

    screen.textContent += "9";

})
zero.addEventListener("click", (e) => {
    e.preventDefault();

    screen.textContent += "0";

})
// operaciones
suma.addEventListener("click", (e) => {
    e.preventDefault();
    if (!validarSignos()) {
        screen.textContent += "+";
    }

    operacion = "+"


})
resta.addEventListener("click", (e) => {
    e.preventDefault();
    if (!validarSignos()) {
        screen.textContent += "-";

    }


    operacion = "-"
})
multiplicacion.addEventListener("click", (e) => {
    e.preventDefault();
    if (!validarSignos()) {
        screen.textContent += "x";

    }

    operacion = "x"
})
division.addEventListener("click", (e) => {
    e.preventDefault();
    if (!validarSignos()) {
        screen.textContent += "/";

    }

    operacion = "/"
})
punto.addEventListener("click", (e) => {
    e.preventDefault();
    if (!validarSignos()) {
        screen.textContent += ".";

    }
})
// funciones
del.addEventListener("click", (e) => {
    e.preventDefault();
    let string = screen.textContent.split("");
    string.pop();
    screen.textContent = string.join("");
    if (screen.textContent == "") screen.textContent = "0"
})
reset.addEventListener("click", (e) => {
    e.preventDefault();
    screen.textContent = "0";
    numa = "0";
    numb = "";
    swit = 0;
    operacion = "";
})
equal.addEventListener("click", (e) => {
    e.preventDefault();

})

// resolver
const resolv = (a, b, operacion) => {
    let res = 0;
    switch (operacion) {
        case "+":
            res = parseFloat(a) + parseFloat(b);
            break;
        case "-":
            res = parseFloat(a) - parseFloat(b);
            break;
        case "*":
            res = parseFloat(a) * parseFloat(b);
            break;
        case "/":
            if (b != 0) {
                res = parseFloat(a) / parseFloat(b);
            } else {
                res = "Infinito";
            }
            break;
        default:
            break;
    }
    return res;
}