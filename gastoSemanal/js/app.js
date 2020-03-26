//Variables
const presupuestoUsuario = prompt('¿Cul es tu presupuesto semanal?');

let cantidadPresupuesto;

const formulario = document.getElementById('agregar-gasto');

const presupuesto = document.getElementById('presupuesto');

const spanTotal = document.querySelector('span#total');
const spanRestante = document.querySelector('span#restante');


//Clases

//class del presupuest 
class Presupuesto{
    constructor(presupuesto){
        this.presupuesto = Number(presupuesto);
        this.restante = Number(presupuesto);
    }

    presupuestoRestante(cantidad = 0){
        return this.restante -= Number(cantidad);
    }
}

//class de interfaz maneja todo lo relacionado al html
class Interfaz{
    insertarPresupuesto(cantidad){
        //insertando presupuesto al html
        spanTotal.innerHTML = `${cantidad}`;
        spanRestante.innerHTML = `${cantidad}`;
    }

    mostrarMensaje(mensaje, tipo){
        const div = document.createElement('div')
        div.classList.add('text-center', 'alert');

        if(tipo === 'error'){
            div.classList.add('alert-danger')
        }else{
            div.classList.add('alert-success')
        }

        //insertand en el dom
        div.innerHTML = mensaje;
        console.log(mensaje)
        formulario.insertBefore(div, document.querySelector('.form-group'));

        //quitando el alert despues de 3s
        setTimeout(()=>{
            document.querySelector('#agregar-gasto .alert').remove();
            formulario.reset();
        },3000)
    }

    agregarGastosLista(gasto, cantidad){
        const listaLi = document.querySelector('#gastos ul');

        // crear e insertar la lista de gastos
        const li = document.createElement('li');
        li.className = 'list-group-item d-flex justify-content-between align-items-center';

        li.innerHTML = `
            <strong>${gasto}</strong>
            <span class="badge badge-primary badge-pill">$ ${cantidad}
        `;
        listaLi.appendChild(li)

    }

    //logica de ir restado la cantdad gastada menos el resto del presupuesto
    presupuestoRestante(cantidad){
        const restante = document.querySelector('span#restante');
        const presupuestoRestanteUsuario = cantidadPresupuesto.presupuestoRestante(cantidad);
        restante.innerHTML = presupuestoRestanteUsuario;
        
        this.comprobarPresupesto()
    }

    comprobarPresupesto(){
        const presupuestoTotal = cantidadPresupuesto.presupuesto;
        const presupuestoRestante = cantidadPresupuesto.restante;

        if((presupuestoTotal / 4) > presupuestoRestante){
            const restante = document.querySelector('.restante');
            restante.classList.remove('alert-success', 'alert-warning');
            restante.classList.add('alert-danger');
        }else if((presupuestoTotal / 2) > presupuestoRestante){
            const restante = document.querySelector('.restante');
            restante.classList.remove('alert-success');
            restante.classList.add('alert-warning');
        }
    }
}




//EventListener
document.addEventListener('DOMContentLoaded', ()=>{
    if(presupuestoUsuario === null || presupuestoUsuario === '' ){
        window.location.reload();
    }else{
        //inicializamos un presupuesto
        cantidadPresupuesto = new Presupuesto(presupuestoUsuario);

        //inicializamos la interfaz
        const ui = new Interfaz();
        ui.insertarPresupuesto(cantidadPresupuesto.presupuesto)
    }

})

formulario.addEventListener('submit', e =>{
    e.preventDefault();

    //leer del formulario el gasto
    const gasto = document.getElementById('gasto').value;
    const cantidad = document.getElementById('cantidad').value;

    // instanciar la interfaz
    const ui = new Interfaz();

    //comprobar que los campos no esten vacios
    if( gasto === '' || cantidad === ''){
       ui.mostrarMensaje('Debes completar todos los campos', 'error');
    }else{
       ui.mostrarMensaje('Se agrego correctamente', 'correcto');
       //inserter lista al html
       ui.agregarGastosLista(gasto, cantidad);
       ui.presupuestoRestante(cantidad);
    }

})