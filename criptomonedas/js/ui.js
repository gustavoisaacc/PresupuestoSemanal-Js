class Interfaz{
     constructor(){
          this.init();
     }

     init(){
          this.construirSelect();
     }

     construirSelect(){
          cotizar.obtenrApi()
          .then(monedas=>{
               for(const [key, value] of Object.entries(monedas.monedas.Data)){
                    console.log(value)
                    const criptomoneda = document.getElementById('criptomoneda');

                    const opcion = document.createElement('option');
                    const img = document.createElement('img');
                    opcion.style.backgroundImage = `url(${value.ImageUrl}})`;
                    opcion.value = value.Symbol;
                    opcion.appendChild(document.createTextNode(value.CoinName))

                    criptomoneda.appendChild(opcion)
               }
          })

          
     }

     mostrarMensaje(mensaje, clase){
          const div = document.createElement('p');
          div.className = clase;
          div.innerHTML = mensaje;

          const divMensaje = document.querySelector('.mensajes');
          divMensaje.appendChild(div)

          setTimeout(()=>{
               document.querySelector('.mensajes p').remove()
          },3000);
     }
}