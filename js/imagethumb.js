function changepic(x)
{
	var so=document.getElementById("mainframe").getAttribute("src");
	//var sour=document.getElementsByClassName("mainframe1");

		
		//var sour1=sour[0].getAttribute("src");
	if(x==1){
	document.getElementById("mainframe").setAttribute("src","IMG_0230.JPG");
	}
	else if(x==2){
	document.getElementById("mainframe").setAttribute("src","IMG_0231.JPG");
	}
	else if(x==3){
	document.getElementById("mainframe").setAttribute("src","IMG_0232.JPG");
	}
	else{
	document.getElementById("mainframe").setAttribute("src","IMG_0238.JPG");
	}
	
	
	
	
}
/*var intervalid;
function startanimation()
{ 
	intervalid=setInterval(animation,5);
	
	
	
}
function animation()
{
    static pos=0;
	var lef=document.getElementById("animator");
	   if (pos == 450) {
            clearInterval(intervalid);
        } else {
            pos++; 
            lef.style.top = pos + 'px'; 
            lef.style.left = pos + 'px'; 
        }
    
 /*document.getElementById("pp").innerHTML=topy;
	var to1=Number(parseInt(to)+5);
	var to2=Number(parseInt(lef)+5);
	var str1="to1"+"px";
		var str2="to2"+"px";
	document.getElementById("animator").setAttribute("top",str1);
	document.getElementById("animator").setAttribute("left",str2);*/
	
}*/
function myMove() {
    var elem = document.getElementById("animator"); 
    var pos = 0;
    var id = setInterval(frame, 5);
    function frame() {
        if (pos == 450) {
            clearInterval(id);
        } else {
            pos++; 
            elem.style.top = pos + 'px'; 
            elem.style.left = pos + 'px'; 
        }
    }
}