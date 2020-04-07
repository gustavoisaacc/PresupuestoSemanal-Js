const cotizar = new API('3e122e304276ea80673d440787d74ad50e9c8c195473b6886b105031e287abfe');

const ui = new Interfaz();


//leer formulario
const formulario = document.getElementById('formulario');


formulario.addEventListener('submit', (e)=>{
     e.preventDefault();
     //moneda del los paises
     const monedaPais = document.getElementById('moneda');
     const monedaSeleccionada = monedaPais.options[monedaPais.selectedIndex].value;

     //bitcoint
     const criptomoneda = document.getElementById('criptomoneda');
     const cryptoSeleccionada = criptomoneda.options [criptomoneda.selectedIndex].value;


     console.log(monedaSeleccionada)
     console.log(cryptoSeleccionada)

     //validando que los campos no esten vacios
     if(monedaSeleccionada === '' || cryptoSeleccionada  === ''){
          ui.mostrarMensaje('Debe completar los campos', 'alert alert-danger text-center')
     }else{
          
     }

});

