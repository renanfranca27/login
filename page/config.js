
function entra() {
    let texto = document.getElementById('texto')
    let senha = document.getElementById('senha')
    let email = document.getElementById('email')

  if(email.value === "renanfrancabrito27@gmail.com"){
      console.log('bem vindo')
    }
    else{
        texto.innerHTML ='Email invalido'
        texto.style.color ='red'
     //   alert('EMAIL INVALIDO')
  }
  if(senha.value === "renanGT2004"){
      console.log("senha valida")
  }
  else{
      // alert('erro na senhaa')
      
  }
}