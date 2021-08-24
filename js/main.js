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
// temas
let temas = document.getElementsByClassName("theme-span");
let cambiarTema = document.getElementById("btn-theme");
//container
let container = document.getElementById("container");
// operacion
let suma = document.getElementById("suma");
let resta = document.getElementById("resta");
let multiplicacion = document.getElementById("multiplicacion");
let division = document.getElementById("division");
let punto = document.getElementById("punto");
let equal = document.getElementById("equal");
// funciones
let del = document.getElementById("del");
let reset = document.getElementById("reset");
let screen = document.getElementById("screen");
// numeros
let ope = [];
let signs = ["x", "/", "-", "+", "."];
// eventos numeros
for (const i of numbers) {
    i.addEventListener("click", (e) => {
        if (screen.textContent == "0" || screen.textContent == "Infinito") screen.textContent = ""
    })
}
// validar existencia de un signo
const validarSignos = () => {
    let string = screen.textContent.split("");
    return signs.includes(string[string.length - 1]);
}
// cambiar temas
for (let i = 0; i < temas.length; i++) {
    temas[i].addEventListener("click", () => {
        cambiarTema.className = `theme-${i+1}`;
        container.className = `theme-${i+1}`;
    })
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

})
resta.addEventListener("click", (e) => {
    e.preventDefault();
    if (!validarSignos()) {
        screen.textContent += "-";

    }
})
multiplicacion.addEventListener("click", (e) => {
    e.preventDefault();
    if (!validarSignos()) {
        screen.textContent += "x";

    }

})
division.addEventListener("click", (e) => {
    e.preventDefault();
    if (!validarSignos()) {
        screen.textContent += "/";

    }

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
    ope = [];
})
equal.addEventListener("click", (e) => {
    e.preventDefault();
    if (signs.includes(ope[ope.length - 1])) {
        alert("repeta")
    } else {
        ope = screen.textContent.split("");
        screen.textContent = resolv(ope);
    }
})

// resolver
const resolv = (operacion) => {
    let numbers = [];
    let signos = [];
    let j = 0;
    let pos = buscarSignos(operacion);
    // separar numeros y signos
    for (let i = 0; i < pos.length; i++) {
        numbers[i] = operacion.slice(j, pos[i]).join("");
        signos[i] = operacion[pos[i]];
        j = pos[i] + 1;
    }
    numbers.push(operacion.slice(j, pos[pos.length]).join(""))
    if (signos.includes("i")) {
        return "Infinito"
    }
    while (numbers.length > 1) {
        if (signos.includes("x") || signos.includes("/")) {
            if (signos.includes("x")) {
                let indice = signos.indexOf("x");

                numbers[indice] = resolver(numbers[indice], numbers[indice + 1], "*")
                signos.splice(indice, 1);
                numbers.splice(indice + 1, 1);
                console.log(`numbers=${numbers}, signos=${signos}`)
            }
            if (signos.includes("/")) {
                let indice = signos.indexOf("/");
                if (numbers[indice + 1] != 0) {
                    numbers[indice] = resolver(numbers[indice], numbers[indice + 1], "/")
                } else {
                    return "Infinito"
                }

                signos.splice(indice, 1);
                numbers.splice(indice + 1, 1);
            }
        } else {
            numbers[0] = resolver(numbers[0], numbers[1], signos[0])
            signos.splice(0, 1);
            numbers.splice(1, 1);
            console.log(`numbers=${numbers}, signos=${signos}`)
        }

    }

    return numbers;

    // console.log(resolver(a, b, signo))
}
const buscarSignos = (op) => {
    let pos = [];

    for (let i = 0; i < op.length; i++) {
        if (!/[0-9\.]/.test(op[i])) {

            pos.push(i)


        }
    }
    return pos;
}
const resolver = (a, b, signo) => {
    let result = 0;
    switch (signo) {
        case "+":
            result = parseFloat(a) + parseFloat(b);
            break;
        case "-":
            result = parseFloat(a) - parseFloat(b);
            break;
        case "*":
            result = parseFloat(a) * parseFloat(b);
            break;
        case "/":
            if (b != "0") {
                result = parseFloat(a) / parseFloat(b);
            }
            break;
        default:
            break;
    }

    return result.toString();
}