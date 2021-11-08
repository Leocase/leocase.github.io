
let texto = document.querySelector('#texto')
let hist = document.querySelector('#hist')


let show = false
texto.onclick = function(){
   
   if(show === true){
      show = false
      hist.classList.add('hist')
      
      return
   }
      show = true
      hist.classList.remove('hist')
   


}
