function leerMessage(){
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