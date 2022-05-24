const aumetar = document.querySelector('input');
const disminuir= document.querySelector('.disminuir');
const cuenta = document.querySelector('span')
let contador = 0;

aumetar.addEventListener('click', ()=>{
    contador++;
    cuenta.textContent = contador;
});

disminuir.addEventListener('click',()=>{
    contador--;
    cuenta.textContent = contador;
    if(contador === -1){
         contador = 0;
         cuenta.textContent = contador;
    }
});


