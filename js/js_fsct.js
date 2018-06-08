$(document).ready(function(){

     $.ajax({
         url: "http://192.168.0.23:8080/fsctmain/public/getbrachall",
         success: function(data){
           $.each(data, function(key, value) {
                  $("#D_tail").append("<p class='text-about-p text-left' ><u>" + data[key].name_branch +"</u><br/>" + data[key].address + "<br/>" + data[key].tel + "<br/>lati: " + data[key].lat +" longti: " + data[key].lng + "</p>");
                    console.log(value);
                  });

        }});
});
