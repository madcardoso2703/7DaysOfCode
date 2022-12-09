var form_inicial = document.getElementById("form-inicial");
var form_final = document.getElementById("form-final");

var input_nome = document.getElementById("nome");
var input_idade = document.getElementById("idade");
var input_linguagem = document.getElementById("linguagem-programacao")

input_nome.addEventListener("input" , evento => {
    //reseta mensagem de valid
    evento.target.setCustomValidity("")

     // Altera a mensagem de validação caso a entrada informada não seja válida
     if (!evento.target.validity.valid){
        evento.target.setCustomValidity("Nome Inválido.")
     }
} )

form_inicial.addEventListener("submit", evento => {
    evento.preventDefault()

    let nome = input_nome.value;
    let idade = input_idade.value;
    let linguagem_programacao = input_linguagem.value

    alert(`Olá ${nome}, você tem ${idade} de idade e está aprendendo ${linguagem_programacao}!`);

    //Oculta e desativa prim. formulario
    form_inicial.hidden = true;
    form_inicial.disabled = true;

    //Aciona ling. informada no label proximo formulario
    document.querySelector("#form-final  .pergunta").innerText = "Você está gostando de aprender";
    document.querySelector("#form-final  .pergunta").innerText += `${linguagem_programacao}?`;

    // Mostra formulario adcional
    form_final.hidden = false;
    form_final.disabled = false;

    document.getElementsByName("esta-gostando")[0].focus();
    
} )

form_final.addEventListener("submit" , evento => {
    evento.preventDefault()
    // Opção
    let escolha = document.querySelector("input[name='esta-gostando']:checked").value

    if (escolha == "sim"){
        alert("Exelente , Continue estudando . Pois O SUCESSO É A SOMA DE PEQUENOS ESFORÇOS,REPETIDOS DIA APÓS DIA. Lembre-se disso")
    }
    else{
        alert("Não desista ainda ... ja tentou experimentar outras linguagens de pragramação .")
    }
})

// Ret. Form. Principal

document.getElementById("botao-voltar").addEventListener("click" , evento => {
    form_final.hidden = true
    form_final.disabled = true
    form_inicial.hidden = false
    form_inicial.disabled = false

}) 