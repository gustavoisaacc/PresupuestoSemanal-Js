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

}