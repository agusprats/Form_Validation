function iniciar(){
     nombre=document.getElementById("nombre");
     apellido=document.getElementById("apellido");
     email=document.getElementById("correo");
     telefono=document.getElementById("telefono");

     nombre.addEventListener("input", validacion, false);
     apellido.addEventListener("input", validacion, false);
     email.addEventListener("input", validacion, false);
     telefono.addEventListener("input", validacion, false);

     validacion();
     }
     function validacion(){
          if(nombre.value=='' && apellido.value=='' && email.value=='' && telefono.value==''){
               nombre.setCustomValidity('inserte su nombre');
               nombre.style.background='#185a9d';
               apellido.setCustomValidity('inserte su apellido');
               apellido.style.background='#185a9d';
               email.setCustomValidity('inserte su mail');
               email.style.background='#185a9d';
               telefono.setCustomValidity('inserte su telefono');
               telefono.style.background='#185a9d';     

               }else{
               nombre.setCustomValidity('');
               nombre.style.background='#43cea2';
               apellido.setCustomValidity('');
               apellido.style.background='#43cea2';
               email.setCustomValidity('');
               email.style.background='#43cea2';     
               telefono.setCustomValidity('');
               telefono.style.background='#43cea2';
               
               }
               }
               window.addEventListener("load", iniciar, false);
               alert("Su mensaje se ha enviado");