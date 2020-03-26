//varables 
const carrito = document.getElementById('carrito');
const cursos = document.getElementById('lista-cursos');
const listaCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.getElementById('vaciar-carrito');


//cargar eventlistener
cargarEventListeners();

function cargarEventListeners(){
    //dispara cundo se presiona agregar carrito
    cursos.addEventListener('click', comprarCurso);

    //borrar curso del carrito 
    carrito.addEventListener('click', eliminarCurso);

    //vaciar carrito
    vaciarCarritoBtn.addEventListener('click', vaciarCarrito);

    //al cargar documento leer de local storage
    document.addEventListener('DOMContentLoaded', leerLocalStorage);
}


//funciones

//funcion que añade el curso al carrito
function comprarCurso(e){
    e.preventDefault();

    //delegacion para agregar al carrito
    if(e.target.classList.contains('agregar-carrito')){
        const curso = e.target.parentElement.parentElement;
        //enviamos el curso seleccionado para tomar sus datos
        leerDatoCurso(curso);
    }
}

//lee los datos del curso seleccionado

function leerDatoCurso(curso){
    const infoCurso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id')
    }

    insertarCarrito(infoCurso);
}

//insercar cursos en carrito 

function insertarCarrito(curso){
    const row = document.createElement('tr');

    row.innerHTML = `
        <td>
            <img src="${curso.imagen}">
        </td>
        <td>${curso.titulo}</td>
        <td>${curso.precio}</td>
        <td>
            <a href="#" class="borrar-curso" data-id="${curso.id}">X</a>
        </td>
    `;

    listaCarrito.appendChild(row)
    guardarEnLocalStorage(curso);

}

function eliminarCurso(e){
    e.preventDefault();
    let curso;
    let cursoId;

    if(e.target.classList.contains('borrar-curso')){
        e.target.parentElement.parentElement.remove();
        curso = e.target.parentElement.parentElement;
        cursoId = curso.querySelector('a').getAttribute('data-id');
    }
    eliminarCursosLocalStorage(cursoId);

}

//eliminar elementos con un solo boton del carrito
function vaciarCarrito(){
    while(listaCarrito.firstChild){
        listaCarrito.removeChild(listaCarrito.firstChild)
    }

    //VACIAR CARRITO DE LOCAL STORAGE
    vaciarCarritoLocalSotrage()
}

//Alacenar curso en el carrito
function guardarEnLocalStorage(curso){
     let cursos;

     cursos = obtenerCursosLocalStorage();
     //el curso seleccionado se agrega 
     cursos.push(curso);

    //  se agrega al local storage
    localStorage.setItem('cursos', JSON.stringify(cursos));
}

//comprobando que hay algo en local storage
function obtenerCursosLocalStorage(){
    let cursosLS;

    //comprobar si hay algo en local storage
    if(localStorage.getItem('cursos') === null){
        cursosLS = [];
    }else{
        cursosLS = JSON.parse(localStorage.getItem('cursos'))
    }

    return cursosLS;
}

//leer de local storager al cargar documento
function leerLocalStorage(){
    let cursoLS;
    cursoLS = obtenerCursosLocalStorage();
   cursoLS.forEach(curso => {
    const row = document.createElement('tr');

    row.innerHTML = `
        <td>
            <img src="${curso.imagen}">
        </td>
        <td>${curso.titulo}</td>
        <td>${curso.precio}</td>
        <td>
            <a href="#" class="borrar-curso" data-id="${curso.id}">X</a>
        </td>
    `;

    listaCarrito.appendChild(row)
   });
}

// eliminar cursos de local storage
function eliminarCursosLocalStorage(curso){
     let cursosLS;
     cursosLS = obtenerCursosLocalStorage();

     cursosLS.forEach((cursoLS,index)=>{
         if(cursoLS.id === curso){
            cursosLS.splice(index, 1)
         }
     });

     localStorage.setItem('cursos', JSON.stringify(cursosLS));
}

function vaciarCarritoLocalSotrage(){
    localStorage.clear();
}