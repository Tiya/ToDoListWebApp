
function ajax(){

    var xhttp=new XMLHttpRequest();
xhttp.onreadystatechange=function(){
    if(this.readyState==4&&this.status==200){
      
      var response=JSON.parse(this.responseText);
    
      var output="";
    
      // for(var i=0;i<response.length;i++){
      //     output+="<li>"+response[i].completed +" "+response[i].title+"</li>";
      // value=response[i].completed;
    
      // }
  var table = $('#example');
        var rows = "";
        for (var i = 0; i < response.length; i++) {
            var name = response[i].title;
            var status = response[i].completed;
           
            if (status == true) {
               rows += "<tr><td><input type=checkbox id=chk1 checked=checked></td>";      
            }
            else {
                rows += "<tr><td><input type=checkbox id=chk1 ></td>";
            }
            rows += "<td>" + name + "</td></tr>";
        }
        table.append(rows);


   //  document.getElementById("demo").innerHTML=output;
 
      
        }

      
}
xhttp.open("GET","https://jsonplaceholder.typicode.com/todos",true);
xhttp.send();

}
