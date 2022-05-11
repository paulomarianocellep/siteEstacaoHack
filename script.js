// Scripts por Paulo Mariano

var myButtonModal = document.getElementById('myButtonModal')
var myTextModal = document.getElementById('myTextModal')

var inputUsuario = document.getElementById('inputUsuario')
var inputSenha = document.getElementById('inputSenha')

function autenticar(event){
  // escopo função autenticar
  event.preventDefault()

  if(inputUsuario.value == 'admin' && inputSenha.value == '1234'){
    myTextModal.className = 'text-success'
    myTextModal.innerText = 'Usuário Logado!!!'
  } else {
    myTextModal.className = 'text-danger'
    myTextModal.innerText = 'Usuário ou senha inválidos!!!'
  }

  myButtonModal.click()
}