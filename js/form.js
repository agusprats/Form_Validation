var nombre=document.getElementById("nombre");
  var apellido=document.getElementById("apellido");
  var email=document.getElementById("correo");
  var telephone=document.getElementById("telephone");
  var contrasenia1=document.getElementById("contrasenia1");
  var contrasenia2=document.getElementById("contrasenia2");
  var message=document.getElementById("mensaje");


function iniciar(){
  
    nombre.addEventListener("blur", validarNombre, false);
    apellido.addEventListener("blur", validarApellido, false);
    telephone.addEventListener("blur", validarTelephone, false);
    email.addEventListener("blur", validarEmail, false);
    contrasenia1.addEventListener("blur", validarContrasenia1, false);
    contrasenia2.addEventListener("blur", validarContrasenia2, false);
    message.addEventListener("blur", validarMessage, false);
    
    

    }
    function validarNombre(){
        if(nombre.value==''){
            nombre.setCustomValidity('inserte su nombre');
              nombre.style.background='#185a9d';
        }else{
            nombre.setCustomValidity('');
            nombre.style.background='#43cea2';
        }
    }   
    function validarApellido(){
     if(apellido.value==''){
          apellido.setCustomValidity('inserte su apellido');
          apellido.style.background='#185a9d';
     }else{
          apellido.setCustomValidity('');
          apellido.style.background='#43cea2';
     }
 }  
    function validarTelephone(){
            if(telephone.value==''){
            telephone.setCustomValidity('inserte su teléfono');
            telephone.style.background='#185a9d';
            }else{
            telephone.setCustomValidity('');
            telephone.style.background='#43cea2';
            }
        }
    function validarEmail(){
        if(email.value==''){
            email.setCustomValidity('inserte su mail');
            email.style.background='#185a9d';
        }else{
            email.setCustomValidity('');
            email.style.background='#43cea2';
        }
    }

    function validarContrasenia1(){
     if(contrasenia1.value==''){  
          contrasenia1.setCustomValidity('inserte su contraseña');
          contrasenia1.style.background='#185a9d';  
      }else{     
          contrasenia1.setCustomValidity('');
          contrasenia1.style.background='#43cea2';
        
      }
}

function validarContrasenia2(){
     
    if(contrasenia2.value==''){  
          contrasenia2.setCustomValidity('inserte la contraseña');
          contrasenia2.style.background='#185a9d';  
      }
      else if(contrasenia2.value===contrasenia1.value){
          contrasenia2.setCustomValidity('');
          contrasenia2.style.background='#43cea2';
     }else{
          contrasenia2.setCustomValidity("inserte una contraseña válida");
          
     }
}


    function validarMessage(){
         if(message.value==''){  
              message.setCustomValidity('inserte su mensaje');
              message.style.background='#185a9d';  
          }else{     
              message.setCustomValidity('');
              message.style.background='#43cea2';
            
          }
}
window.addEventListener("load", iniciar, false);
