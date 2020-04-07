class Interfaz{
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