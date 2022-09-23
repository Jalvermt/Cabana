function leerClientes(){
//FUNCION GET
	$.ajax({    
	    url : ' https://gcb03291783e9d6-q8y7hi9e9jd8s635.adb.mx-queretaro-1.oraclecloudapps.com/ords/admin/client/client',
	    type : 'GET',
	    dataType : 'json',

	    success : function(clientes) {
	   		let cs=clientes.items;
	   		$("#listaClientes").empty();
	   		for(i=0;i<cs.length;i++){
	   			$("#listaClientes").append(cs[i].id+" <b>"+cs[i].name+"</b> "+cs[i].email+" "+cs[i].age);
	   			$("#listaClientes").append("<button onclick='borrarCliente("+cs[i].id+")'>Borrar</button><br>");
	   		
	   		}
	    },
	    error : function(xhr, status) {
	        alert('ha sucedido un problema');
	    }
	});
}


function guardarCliente() {
	let idCliente=$("#idCliente").val();
	let nombre=$("#nombreCliente").val();
	let mailCliente=$("#mailCliente").val();
	let edad=$("#edadCliente").val();

	let data={
		id:idCliente,
		name:nombre,
		email:mailCliente,
		age:edad
	};

	let dataToSend=JSON.stringify(data);
	//console.log(dataToSend);


	$.ajax({    
	    url : 'https://gcb03291783e9d6-q8y7hi9e9jd8s635.adb.mx-queretaro-1.oraclecloudapps.com/ords/admin/client/client',
	    type : 'POST',
	 //   dataType : 'json',
	    data:dataToSend,
	    contentType:'application/json',
	    success : function(pepito) {
	   		$("#idCliente").val("");
			$("#nombreCliente").val("");
			$("#mailCliente").val("");
			$("#edadCliente").val("");
	    },
	    error : function(xhr, status) {
	   //     alert('ha sucedido un problema');
	    },
	    complete: function(){
	    	leerClientes();
	    }
	});


}


function editarCliente(){
	let idCliente=$("#idCliente").val();
	let nombre=$("#nombreCliente").val();
	let mailCliente=$("#mailCliente").val();
	let edad=$("#edadCliente").val();

	let data={
		id:idCliente,
		name:nombre,
		email:mailCliente,
		age:edad
	};
	let dataToSend=JSON.stringify(data);
	//console.log(dataToSend);
	$.ajax({    
	    url : 'https://gcb03291783e9d6-q8y7hi9e9jd8s635.adb.mx-queretaro-1.oraclecloudapps.com/ords/admin/client/client',
	    type : 'PUT',
	 //   dataType : 'json',
	    data:dataToSend,
	    contentType:'application/json',
	    success : function(pepito) {
	   		$("#idCliente").val("");
			$("#nombreCliente").val("");
			$("#mailCliente").val("");
			$("#edadCliente").val("");
	    },
	    error : function(xhr, status) {
	   //     alert('ha sucedido un problema');
	    },
	    complete: function(){
	    	leerClientes();
	    }
	});

}

function borrarCliente(idCliente){
	let data={
		id:idCliente
	};
	let dataToSend=JSON.stringify(data);
	//console.log(dataToSend);
	$.ajax({    
	    url : 'https://gcb03291783e9d6-q8y7hi9e9jd8s635.adb.mx-queretaro-1.oraclecloudapps.com/ords/admin/client/client',
	    type : 'DELETE',
	 //   dataType : 'json',
	    data:dataToSend,
	    contentType:'application/json',
	    success : function(pepito) {
	   		$("#idCliente").val("");
			$("#nombreCliente").val("");
			$("#mailCliente").val("");
			$("#edadCliente").val("");
	    },
	    error : function(xhr, status) {
	   //     alert('ha sucedido un problema');
	    },
	    complete: function(){
	    	leerClientes();
	    }
	});

}