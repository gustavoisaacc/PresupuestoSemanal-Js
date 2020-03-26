//clases cotizador
class Seguro{
    constructor (marca, anio, tipo){
    this.marca = marca;
    this.anio = anio;
    this.tipo = tipo;
    }

    cotizarSeguro(){
        /*
        1 = americano 1.15
        2 = asiatico 1.05
        3 = europeo 1.35
        */ 
       let cantidad;
       const base = 2000;
       switch(this.marca){
           case '1':
               cantidad = base * 1.15;
               break;
            case '2':
                cantidad = base * 1.05;
                break;
            case '3':
                cantidad = base * 1.35;
                break;
       }
    
    
    
       const diferencia = new Date().getFullYear() - this.anio;
    
       //cada anio de diferencia reducimos un 3% menos
       cantidad -= ((diferencia * 3) * cantidad) / 100;
       
       //si el seguro es basico 30% mas
       //si es completo 50% mas
    
       if(this.tipo == 'basio'){
           cantidad *= 1.30;
       }else{
            cantidad *= 1.50;
       }
    
       return cantidad;
    
    }

}



//Todo lo que muestra
class Interfaz{

    mostrarError(mensaje, tipo){
        const div = document.createElement('div');
    
        if(tipo === 'error'){
            div.classList.add('mensaje', 'error')
        }else{
            div.classList.add('mensaje', 'correcto')
        }
    
        div.innerHTML = `${mensaje}`;
        formulario.insertBefore(div, document.querySelector('.form-group'));
    
        setTimeout(()=>{
            document.querySelector('.mensaje').remove()
        }, 3000);
    }

    mostrarResultado(seguro, total){
        const rsultado = document.getElementById('resultado');
    
        let marca;
        switch (seguro.marca) {
            case '1':
                marca = 'Americano';
                break;
            case '2':
                marca = 'Asiarico';
                break;
            case '3':
                marca = 'Europeo';
                break;
        
            default:
                break;
        }
        //crear div
        const div = document.createElement('div');
    
        //insertar la informacion
        div.innerHTML = `
        <p class="header">Tu Resultado:</p>
        <p>Marca: ${marca}</p>
        <p>Añio: ${seguro.anio}</p>
        <p>Tipo: ${seguro.tipo}</p>
        <p>Total: ${total}</p>
        `;
        const spinner = document.querySelector('#cargando img');
        spinner.style.display = 'block';
    
        setTimeout(()=>{
            spinner.style.display = 'none';
            resultado.appendChild(div);
    
        },3000);
    
    }

}




//EventListener
const formulario = document.getElementById('cotizar-seguro');
formulario.addEventListener('submit', e => {
    e.preventDefault();
    
    //Leer la marca seleccionada del select
    const marca = document.getElementById('marca');
    const marcaSeleccionada = marca.options[marca.selectedIndex].value;

    //Leer año seleccionado del options
    const anio = document.getElementById('anio');
    const anioSeleccionado = anio.options[anio.selectedIndex].value;

    const tipo = document.querySelector('input[name="tipo"]:checked').value;

    const interfaz = new Interfaz();

    //Revisamos que los campos no esten vacios
    
    if(marcaSeleccionada === '' || anioSeleccionado === '' || tipo === ''){
        interfaz.mostrarError('Faltan datos, revisar el formulario y prueva de nuevo', 'error')
    }else{
        //borramos resultado y mostramos nueva peticion
        const resultado = document.querySelector('#resultado div');

        if(resultado != null){
            resultado.remove();
        }
    
        // instansiar seguro y mostrar interfaz
        const seguro = new Seguro(marcaSeleccionada, anioSeleccionado, tipo);

        //cotizar el seguro
        const cantidad = seguro.cotizarSeguro();

        interfaz.mostrarResultado(seguro, cantidad);
        interfaz.mostrarError('cotizando...', 'exito')

    }  

});

const max = new Date().getFullYear(),
      min = max - 20;
const selectAnios = document.getElementById('anio');

for(let i = max; i > min; i--){
    let option = document.createElement('option');
    option.value = i;
    
    option.innerHTML = i;
    selectAnios.appendChild(option)
}