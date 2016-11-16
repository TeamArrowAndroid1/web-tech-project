function signin()
{
	
	var usern=document.getElementById('user').value;
    var pswd=document.getElementById('pswd').value;
    if(usern=="A" && pswd=="gh")
    {
    	window.open("patient_data.html","_self");
    }
    else if(usern=="B" && pswd=="gh")
    {
    	window.open("newpage.html","_self");
    }
    else if(usern=="C" && pswd=="gh")
    {
    	window.open("newpage.html","_self");
    }
    else if(usern=="" || pswd=="")
    {
    	document.getElementById('login_error').innerHTML="user or pswd empty!";
    }

}


