class API{

     constructor(key){
          this.key = key;
     }
     async obtenrApi() {
          const url = (`https://min-api.cryptocompare.com/data/all/coinlist?api_key=${this.key}`);

          const obtenerMoneda = await fetch(url);

          const monedas = await obtenerMoneda.json();

      
          return{
               monedas
          }
     }

     async obteniendoValor(moneda, crypto){
          const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${crypto}&tsyms=${moneda}&api_key=${this.key}`;

          const urlConvertir = await fetch(url);

          const resultado = await urlConvertir.json();
          
          return{
               resultado
          }
     }

}