function leerMessage(){
    //FUNCION GET
        $.ajax({    
            url : 'https://gcb03291783e9d6-q8y7hi9e9jd8s635.adb.mx-queretaro-1.oraclecloudapps.com/ords/admin/message/message',
            type : 'GET',
            dataType : 'json',
    
            success : function(Message) {
                   let cs=Message.items;
                   $("#listaMessage").empty();
                   for(i=0;i<cs.length;i++){
                       $("#listaMessage").append(cs[i].id+" <b>"+cs[i].messagetext );
                       $("#listaMessage").append("<button onclick='borrarMessages("+cs[i].id+")'>Borrar MSG</button><br>");
                   
                   }
            },
            error : function(xhr, status) {
                alert('ha sucedido un problema');
            }
        });
    }
	
function guardarMessages() {
	let idMessage=$("#idMensaje").val();
	let mensaje=$("#mensaje").val();

	let data={
		id:idMessage,
		messagetext:mensaje
		
		
		};

	let dataToSend=JSON.stringify(data);
	//console.log(dataToSend);


	$.ajax({    
	    url : 'https://gcb03291783e9d6-q8y7hi9e9jd8s635.adb.mx-queretaro-1.oraclecloudapps.com/ords/admin/message/message',
	    type : 'POST',
	 //   dataType : 'json',
	    data:dataToSend,
	    contentType:'application/json',
	    success : function(pepito) {
	   		$("#idMessage").val("");
			$("#mensaje").val("");
			
	    },
	    error : function(xhr, status) {
	   //     alert('ha sucedido un problema');
	    },
	    complete: function(){
	    	leerMessage();
	    }
	});
}

function editarMessages(){
	let idMessage=$("#idMensaje").val();
	let mensaje=$("#mensaje").val();

	let data={
		id:idMessage,
		messagetext:mensaje
		};

	let dataToSend=JSON.stringify(data);
	//console.log(dataToSend);
	$.ajax({    
	    url : 'https://gcb03291783e9d6-q8y7hi9e9jd8s635.adb.mx-queretaro-1.oraclecloudapps.com/ords/admin/message/message',
	    type : 'PUT',
	 //   dataType : 'json',
	    data:dataToSend,
	    contentType:'application/json',
	    success : function(pepito) {
			$("#idMensaje").val("");
			$("#mensaje").val("");
	    },
	    error : function(xhr, status) {
	   //     alert('ha sucedido un problema');
	    },
	    complete: function(){
	    	leerMessage();
	    }
	});

}

function borrarMessages(idCliente){
	let data={
		id:idMessage
	};
	let dataToSend=JSON.stringify(data);
	//console.log(dataToSend);
	$.ajax({    
	    url :'https://gcb03291783e9d6-q8y7hi9e9jd8s635.adb.mx-queretaro-1.oraclecloudapps.com/ords/admin/message/message',
	    type : 'DELETE',
	 //   dataType : 'json',
	    data:dataToSend,
	    contentType:'application/json',
	    success : function(pepito) {
			$("#idMensaje").val("");
			$("#mensaje").val("");
	    },
	    error : function(xhr, status) {
	   //     alert('ha sucedido un problema');
	    },
	    complete: function(){
	    	leerMessage();
	    }
	});

}