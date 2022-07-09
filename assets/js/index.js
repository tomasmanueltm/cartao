let $ = (e)=> document.querySelector(e),
    form = $(".form"),
    cartao = $(".cartao"),
    index = $(".cancelar"),
    submit = $(".submit"),
    usuario = $(".nome"),     
    usuarioId = $(".id"),
    usuarioArea = $(".area"),
    usuarioImg = $(".img img"),
    usuarioCargo = $(".cargo"),
    usuarioEmail = $(".email"),
    usuarioCidade = $(".cidade"),
    usuarioTelefone = $(".telefone"),
    usuarioValidade = $(".validade"),
    usuarioFacebook = $(".facebook"),
    usuarioGithub = $(".github"),
    usuarioLinkedin = $(".linkedin"),



    editar = $(".editar"),
    inputAll = document.querySelectorAll("input");

// editar
editar.addEventListener("click", function(e){
    e.preventDefault();
    
    // form
    cartao.classList.add("descer");
    form.classList.add("subir");

    // card
    cartao.classList.add("none");
    form.classList.remove("none");
    
})

// sair
index.addEventListener("click", function(e){
    e.preventDefault();
    
    // form
    form.classList.add("descer", "none");
    // cartao.classList.add("subir");

    // card
    cartao.classList.remove("none", "descer");   
});


submit.addEventListener("click", function(e){
    e.preventDefault();  
    usuario.innerText = inputAll[0].value;
    usuarioEmail.innerText = inputAll[1].value;
    usuarioArea.innerText = inputAll[2].value;
    usuarioCargo.innerText = inputAll[3].value
    usuarioValidade.innerText = inputAll[4].value;
    usuarioCidade.innerText = inputAll[5].value;
    usuarioTelefone.innerText = inputAll[6].value;

    form.classList.add("descer", "none");
    // cartao.classList.add("subir");

    // card
    cartao.classList.remove("none", "descer");   
})




// pegar informacoes
function getInformacao(){

    inputAll[0].value = usuario.textContent;
    inputAll[1].value = usuarioEmail.textContent;
    inputAll[2].value = usuarioArea.textContent;
    inputAll[3].value = usuarioCargo.textContent
    inputAll[4].value = usuarioValidade.textContent;
    inputAll[5].value = usuarioCidade.textContent;
    inputAll[6].value = usuarioTelefone.textContent;
    // inputAll[7].value = usuarioImg.src.valueOf();
}





window.addEventListener("load", function(){
    getInformacao();
})
