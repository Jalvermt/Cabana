function leerCabañas(){
//FUNCION GET
	$.ajax({    
	    url : 'https://gcb03291783e9d6-q8y7hi9e9jd8s635.adb.mx-queretaro-1.oraclecloudapps.com/ords/admin/cabin/cabin',
	    type : 'GET',
	    dataType : 'json',

	    success : function(Cabañas) {
	   		let cs=Cabañas.items;
	   		$("#listaCabañas").empty();
	   		for(i=0;i<cs.length;i++){
	   			$("#listaCabañas").append(cs[i].id+" <b>"+cs[i].brand+"</b> "+cs[i].rooms+" </b>"+cs[i].category_id+" </b>"+cs[i].name);
	   			$("#listaCabañas").append("<button onclick='borrarCabañas("+cs[i].id+")'>Borrar cb</button><br>");
	   		
	   		}
	    },
	    error : function(xhr, status) {
	        alert('ha sucedido un problema');
	    }
	});
}

function guardarCabañas() {
	let idCabaña=$("#idCabaña").val();
	let brandCabaña=$("#brandCabaña").val();
	let roomsCabaña=$("#roomsCabaña").val();
	let category_idCabaña=$("#category_idCabaña").val();
	let nombre=$("#nombreCabaña").val();

	let data={
		id:idCabaña,
		brand:brandCabaña,
		rooms:roomsCabaña,
		category_id:category_idCabaña,
		name:nombre
		
		};

	let dataToSend=JSON.stringify(data);
	//console.log(dataToSend);


	$.ajax({    
	    url : 'https://gcb03291783e9d6-q8y7hi9e9jd8s635.adb.mx-queretaro-1.oraclecloudapps.com/ords/admin/cabin/cabin',
	    type : 'POST',
	 //   dataType : 'json',
	    data:dataToSend,
	    contentType:'application/json',
	    success : function(pepito) {
	   		$("#idCabaña").val("");
			$("#brandCabaña").val("");
			$("#roomsCabaña").val("");
			$("#category_idCabaña").val("");
			$("#nombreCabaña").val("");
			
	    },
	    error : function(xhr, status) {
	   //     alert('ha sucedido un problema');
	    },
	    complete: function(){
	    	leerCabañas();
	    }
	});
}

function editarCabañas(){
	let idCabaña=$("#idCabaña").val();
	let brandCabaña=$("#brandCabaña").val();
	let roomsCabaña=$("#roomsCabaña").val();
	let category_idCabaña=$("#category_idCabaña").val();
	let nombre=$("#nombreCabaña").val();

	let data={
		id:idCabaña,
		brand:brandCabaña,
		rooms:roomsCabaña,
		category_id:category_idCabaña,
		name:nombre
		
		};

	let dataToSend=JSON.stringify(data);
	//console.log(dataToSend);
		
	$.ajax({    
	    url : 'https://gcb03291783e9d6-q8y7hi9e9jd8s635.adb.mx-queretaro-1.oraclecloudapps.com/ords/admin/cabin/cabin',
	    type : 'PUT',
	 //   dataType : 'json',
	    data:dataToSend,
	    contentType:'application/json',
	    success : function(pepito) {
	   		$("#idCabaña").val("");
			$("#brandCabaña").val("");
			$("#roomsCabaña").val("");
			$("#category_idCabaña").val("");
			$("#nombreCabaña").val("");
	    },
	    error : function(xhr, status) {
	   //     alert('ha sucedido un problema');
	    },
	    complete: function(){
	    	leerCabañas();
	    }
	});

}

function borrarCabañas(idCabaña){
	let data={
		id:idCabaña
	};
	let dataToSend=JSON.stringify(data);
	//console.log(dataToSend);
	$.ajax({    
	    url : 'https://gcb03291783e9d6-q8y7hi9e9jd8s635.adb.mx-queretaro-1.oraclecloudapps.com/ords/admin/cabin/cabin',
	    type : 'DELETE',
	 //   dataType : 'json',
	    data:dataToSend,
	    contentType:'application/json',
	    success : function(pepito) {
	   		$("#idCabaña").val("");
			$("#brandCabaña").val("");
			$("#roomsCabaña").val("");
			$("#category_idCabaña").val("");
			$("#nombreCabaña").val("");
	    },
	    error : function(xhr, status) {
	   //     alert('ha sucedido un problema');
	    },
	    complete: function(){
	    	leerCabañas();
	    }
	});

}