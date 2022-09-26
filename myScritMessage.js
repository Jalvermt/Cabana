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
                       $("#listaMessage").append("<button onclick='borrarMessage("+cs[i].id+")'>Borrar cb</button><br>");
                   
                   }
            },
            error : function(xhr, status) {
                alert('ha sucedido un problema');
            }
        });
    }