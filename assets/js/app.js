// Initialize Firebase
var config = {
    apiKey: "AIzaSyDGtZ_xGNto5YRyJ0UyjFpvTfZEeoGM3FA",
    authDomain: "travel-a3801.firebaseapp.com",
    databaseURL: "https://travel-a3801.firebaseio.com",
    projectId: "travel-a3801",
    storageBucket: "travel-a3801.appspot.com",
    messagingSenderId: "679853152568"
  };
firebase.initializeApp(config);
var db = firebase.database();

/*var ref = db.ref('clark');
ref.on('value',function(ss){
/ //console.log(usuario);
 document.getElementById('newClave').innerHTML=usuario.clave;
 document.getElementById('newNombre').innerHTML=usuario.nombre;
 document.getElementById('newCorreo').innerHTML=usuario.correo;

});*/

  //crearUsuario('clark','Jesus Manrique','manriquej@gmail.com');
  //crearUsuario('gaby','Gabriela Castillo','castillg@gmail.com');

$(document).ready(function(){
	$("#btn-login").click(function(){
		
		//FUNCION LOGIN VERSION 3
		var usuarios = db.ref('usuarios');
		usuarios.on('value',function(ss){
			var usuario = ss.val();
			// Suiche que me indica si encontre el correo y la clave en caso de encontrarlo cambia valor de 0 a 1
			var logeado = 0;
			usr = Object.keys(usuario);
            for(i=0; i<usr.length; i++){
            	if(usuario[usr[i]].correo == $("#email").val() && usuario[usr[i]].clave == $("#password").val())
            	{
                  logeado=1
            	}	
            }
            if(logeado == 1){
            	alert("existe el usuario")
            }else
                alert("Ese usuario no existe o la contraseña esta incorrecta")
			
		})
        
	})
})

$(document).ready(function(){
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('.modal').modal();
  });