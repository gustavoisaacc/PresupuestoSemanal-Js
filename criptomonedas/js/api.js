class API{

     constructor(key){
          this.key = key;
     }
     async obtenrApi() {
          const url = ('https://min-api.cryptocompare.com/data/all/coinlist');

          const obtenerMoneda = await fetch(url);

          const monedas = await obtenerMoneda.json();
          console.log(monedas)
          
     }

}