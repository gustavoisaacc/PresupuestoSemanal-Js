const enlace = document.createElement('a');

//agregar una clase al enlase

enlace.className = 'enlace';

//agregar atributos

enlace.setAttribute('href', '#');

enlace.textContent = 'Nuevo enlace'

//agregara al html

document.querySelector('#secundaria').appendChild(enlace)


console.log(enlace)


//MOdificar elementos en el dom

const nuevoEncabezado = document.createElement('h2');

//agregar id
nuevoEncabezado.id = 'encabezado';

//Agregar nnuevo texto
nuevoEncabezado.appendChild(document.createTextNode('Los Mejores Cursos'));

//elemento anterior se repmlaza
const anterior = document.querySelector('#encabezado');

//elemento padre
const elPadre = document.querySelector('#lista-cursos');

//remplazamos h1 por h2 creado
elPadre.replaceChild(nuevoEncabezado, anterior)

console.log(anterior.parentElement)


//eliminar elemntos del dom

const links = document.querySelectorAll('.enlace');

const navegacion = document.querySelector('#principal');

// navegacion.removeChild(links[0]); eliminar desde el padre

// links[0].remove(); eliminar desde el elemento mismo

//getAttribute comprueba o muestra un atrributo set agregag y has nos da true   folse si exite ese atributo


//Eventos en javascript

const busqueda = document.querySelector('#buscador');

//obtenemos el texto de un input l que vams ingresando ceclaadaves que undes una t
// busqueda.addEventListener('keydown', obtenerEvento);

//cadaves que sueltas la tecla que estas presionando obtenemos el evento
// busqueda.addEventListener('keyup', obtenerEvento);

//obtienes lo qeu vas escribiendo
// busqueda.addEventListener('keypress', obtenerEvento);

//evento focus
// busqueda.addEventListener('focus', obtenerEvento);
//evento blur cuando hace click a fuera del formulario


function obtenerEvento(e){

    console.log(busqueda.value);
    // document.querySelector('#encabezado').innerText = busqueda.value;
    console.log(`Èvento: ${e.type}`)

}

localStorage.setItem('nombre', 'Gustavo')
;

//eliminar de local storage
// // localStorage.removeItem('llave', 'valor')
// sessionStorage.setItem('nombre', 'juan');

