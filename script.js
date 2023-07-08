<<<<<<< HEAD
const lineasContainer = document.querySelector('.lineas-container');
const lineas = document.querySelectorAll('.linea');
let lineasExtendidas = false;
let opacidad = false;
const h1 = document.querySelector('h1'); // Seleccionar el elemento h1

lineasContainer.addEventListener('mouseenter', extendLines);
lineasContainer.addEventListener('mouseleave', resetLines);

function extendLines() {
    lineas.forEach((linea) => {
        linea.style.transform = 'translateX(0)';
    });
    lineasExtendidas = true;
    opacidad = true;

    setTimeout(() => {
        h1.style.opacity = 1;
    }, 3000); // Retrasar la aplicación del cambio de opacidad en 500 milisegundos (ajusta el valor según sea necesario)
}

function resetLines() {
    if (!lineasExtendidas && opacidad) {
        return;
    } 
    lineas.forEach((linea) => {
        linea.style.transform = 'translateX(0)';
    });
    lineasExtendidas = false;
}
=======
const lineasContainer = document.querySelector('.lineas-container');
const lineas = document.querySelectorAll('.linea');
let lineasExtendidas = false;
let opacidad = false;
const h1 = document.querySelector('h1'); // Seleccionar el elemento h1

lineasContainer.addEventListener('mouseenter', extendLines);
lineasContainer.addEventListener('mouseleave', resetLines);

function extendLines() {
    lineas.forEach((linea) => {
        linea.style.transform = 'translateX(0)';
    });
    lineasExtendidas = true;
    opacidad = true;

    setTimeout(() => {
        h1.style.opacity = 1;
    }, 3000); // Retrasar la aplicación del cambio de opacidad en 500 milisegundos (ajusta el valor según sea necesario)
}

function resetLines() {
    if (!lineasExtendidas && opacidad) {
        return;
    } 
    lineas.forEach((linea) => {
        linea.style.transform = 'translateX(0)';
    });
    lineasExtendidas = false;
}
>>>>>>> 6f77c15ee8fd0bed9d618afcf7853162cd5d300f
