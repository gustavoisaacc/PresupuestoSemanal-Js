const listaTweets = document.querySelector('#lista-tweets');


eventListeners();

function eventListeners(){
    //cuando se envia el formulario
    document.querySelector('#formulario').addEventListener('submit', agregarTweet);

    listaTweets.addEventListener('click', borrarTweet);

    //cargar contenido 
    document.addEventListener('DOMContentLoaded', localStorageListo);
}


//añadir twwet del formulario

function agregarTweet(e){
    e.preventDefault();
    //leer el valr del texarea
    const tweet = document.querySelector('#tweet').value;

    const li = document.createElement('li');
    li.innerText = tweet;
    listaTweets.appendChild(li)

    //agregar botton de borrar 

    const borrarLista = document.createElement('a');

    borrarLista.classList = 'borrar-tweet';
    borrarLista.innerText = 'X';
    //añade el botom al dom
    li.appendChild(borrarLista);

    console.log(tweet)


    // Agregar tweet a local storage
    agregarTweetLocalStorage(tweet);

}

//funcion de borrar tweet del dom

function borrarTweet(e){
    e.preventDefault();
    if(e.target.className === 'borrar-tweet'){
        e.target.parentElement.remove();

        //borrando tweet del local storage
        borrarTweetLocalstorage(e.target.parentElement.innerText)
    }
}

 // Agregar tweet a local storage
 function agregarTweetLocalStorage(tweet){
     let tweets;

     tweets = obteniendoLocalStorage();

     //añadir nuevo tweet 
     tweets.push(tweet);

     //convertir de string a areglos

     localStorage.setItem('tweets', JSON.stringify(tweets))
 }


 //comprobar que haya elementos en local storage retorna un array
 function obteniendoLocalStorage(){
     let tweets;

     //revisando los valores de local storage
     if(localStorage.getItem('tweets') === null){
         tweets = [];
     }else{
         tweets = JSON.parse(localStorage.getItem('tweets'));
     }
     return tweets;
 }

 //Mostrar contenido de local storage en la lista 

 function localStorageListo(){
     let tweets;

     tweets = obteniendoLocalStorage();
    
     tweets.forEach(function(tweet){
        const li = document.createElement('li');
        li.innerText = tweet;
        listaTweets.appendChild(li);
    
        //agregar botton de borrar 
    
        const borrarLista = document.createElement('a');
    
        borrarLista.classList = 'borrar-tweet';
        borrarLista.innerText = 'X';
        //añade el botom al dom
        li.appendChild(borrarLista);
    
        console.log(tweet);
    
        // Agregar tweet a local storage
        agregarTweetLocalStorage(tweet);
     })
 }

 function borrarTweetLocalstorage(tweet){
    let tweets, tweetBorrar;

    //elimina la x del texto del li
    tweetBorrar = tweet.substring(0 , tweet.length -1);

    tweets = obteniendoLocalStorage();
    tweets.forEach(function(tweet, index){
        if(tweetBorrar === tweet){
            tweets.splice(index, 1)
        }

    })

    localStorage.setItem('tweets', JSON.stringify(tweets))
 }