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

var ref = db.ref('clark');
ref.on('value',function(ss){
 var usuario = ss.val()
 //console.log(usuario);
 document.getElementById('newClave').innerHTML=usuario.clave;
 document.getElementById('newNombre').innerHTML=usuario.nombre;
 document.getElementById('newCorreo').innerHTML=usuario.correo;

});

  //crearUsuario('clark','Jesus Manrique','manriquej@gmail.com');
  //crearUsuario('gaby','Gabriela Castillo','castillg@gmail.com');

//$(document).ready(function(){
	//$("#login").click(function(){
		//alert('Usuario: '+$("#user").val()+" Clave: "+$("#clave").val())
		
	//	var usuario = {
		//	email: $("#user").val(),
			//password: $("#clave").val()
		//}

		//FUNCION LOGIN VERSION 3

	//})
//})

//clark es un objeto
//db.ref('clark').on('value', function (snapshot){
	//documetnt.getElementById('holamundo').innerText = snapshot.val();
	//console.log(snapshot.val())
//})




//nombre es una propiedad del  objeto clark
//db.ref('clark').child('nombre').on('value', function(snapshot){
 //   snapshot.val()	
//});


//funcion para registrar usuario
//function crearUsuario(login,nombre,correo)
//{
 // db.ref(login).set({
  //	clave: '1234',
  	//nombre: nombre,
  	//correo: correo
  //});
//}
