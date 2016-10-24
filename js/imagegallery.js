var intervalid;
function startslideshow()
{
	intervalid=setInterval(changeimage,1000);
	
	
}
function stopslideshow()
{
	clearInterval(intervalid);
	
	
}
function changeimage()
{
	var Source=document.getElementById("myimages").getAttribute("src");
	var getnum=Number(Source.substr(7,1));
//	document.getElementById("funny").innerHTML=getnum;
var Source1=document.getElementById("links").getAttribute("href");

if(getnum ==8)
{
	getnum=-1;
	
}
	document.getElementById("myimages").setAttribute("src","IMG_023"+(getnum+1)+".JPG");
	if(getnum==1||getnum==2)
	{
	document.getElementById("links").setAttribute("href","https://www.fb.com");}
	if(getnum==3||getnum==4)
	{
	document.getElementById("links").setAttribute("href","https://www.gmail.com");}
	if(getnum==5||getnum==6)
	{
	document.getElementById("links").setAttribute("href","https://www.codeacademy.com");}
	if(getnum==7||getnum==8)
	{
	document.getElementById("links").setAttribute("href","https://www.youtube.com");
	}
	
}