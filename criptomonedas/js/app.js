const formulario = document.getElementById('formulario');
const cotizar = new API();
const ui = new Interfaz();


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
          cotizar.obtenrApi()
     }

});