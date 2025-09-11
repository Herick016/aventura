const avanca =document.querySelectorA11 ('.btn-proximo');
const reiniciarBtn = document.getElementById('.btn.reiniciar');

avanca.forEach(button=> {
button.addEventListener('click'function(){
    const atual = document.querySelector('.ativo');
    const proximoPsso='passo-'+this.getAttribute('data-proximo');
    atual.classList.remove('ativo');
    const proximoElemento= document. getElementbyid(proximoPsso);

if (proximoElemento){
    proximoElemento.classlisrt.add('ativo');
} else {
    console.error(`Elemento com ID "${proximoPasso}" não encontrado.`);

}

 })
}); 
