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
                    
                    const criptomoneda = document.getElementById('criptomoneda');

                    const opcion = document.createElement('option');
               
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

     mostrarResultado(resultado, moneda, crypto){

          const resutadoAnterior = document.querySelector('#resultado > div');
          if(resutadoAnterior){
               resutadoAnterior.remove();
          }

          const datoMoneda = resultado[crypto][moneda];
          console.log(datoMoneda)
          const precio = datoMoneda.PRICE.toFixed(2),
               porsentaje = datoMoneda.CHANGEPCTDAY.toFixed(2),
               actualizado = new Date(datoMoneda.LASTUPDATE * 1000).toLocaleDateString('es');
          //template resutado
          const templateHtml = `
               <div class="card bg-warning">
                    <div class="card-body text-light">
                         <h2 class="card-title">Resultado</h2>
                         <p>El Precio de ${datoMoneda.FROMSYMBOL} a moneda ${datoMoneda.TOSYMBOL} es de: $ ${precio}</p>
                         <p>Variacion último dia: % ${porsentaje}</p>
                         <p>Ultima actualizacion: ${actualizado}</p>
                         
                    </div>
               </div>
          
          `

          //mostramos resutado
          this.mostrarSpiner('block');

          setTimeout(()=>{
               document.getElementById('resultado').innerHTML = templateHtml;
               this.mostrarSpiner('none');

          },3000)
          
     }

     mostrarSpiner(vista){
          const spiner = document.querySelector('.contenido-spinner');
          spiner.style.display = vista;
     }
}
