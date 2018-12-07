function myfun(){
    if(document.getElementById('maroc').checked)
    {
        var pays=document.getElementById('maroc').value;
    }
    else{
        var pays=document.getElementById("someDropdown").value;
    }
        
       

    

    var n=document.getElementById('nom').value;
    var p=document.getElementById('prenom').value;
    var age=document.getElementById('age').value;
    var res=document.getElementById('resultat');
    res.innerHTML = n+"  "+p+", âge "+age+"ans. Elle est  "+pays;
    //interet
    var t = document.getElementsByName("vehicle1"); 
    var list=[];
    var k=0;
    for(var i =0;i<6;i++)
    {
        if(t[i].checked ==true)
        {
            list.push(t[i].value);
           k++;
        }
    }
    
    for(var j =0 ;j<k;j++)
    {
        res.innerHTML+=" est interet "+list[j]+" , ";
    }
    
   
};
var etr=document.getElementById("etrange");

etr.addEventListener("click",cheked());
//function
function cheked(){
   
    var options = "<option>france</option>" + "<option>algeré</option>"+ "<option>canda</option>"
    document.getElementById("someDropdown").innerHTML = options;
    
}

var mrc=document.getElementById("maroc");
mrc.addEventListener("click",uncheked());
//function2
function uncheked(){
   
    document.getElementById("someDropdown").innerHTML="";
    
    
}
   
  
   
   

   