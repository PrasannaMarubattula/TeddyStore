$(".slider-one")
.not(".slick-initialized")
.slick({

	prevArrow:".site-slider.prev",
	nextArrow: ".site-slider.next",
	slidesToShow: 5,
	slidesToScroll: 1,
	autoplaySpeed: 3000
});

function signin()
{
	var username=document.getElementById("username");
	var password=document.getElementById("password");
	var regex="^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,8}$";
	if(username.value!=null&&password.value.match(regex))
	{
		document.getElementById("signInSuccessfull").style.display = "block";
		document.getElementById("signInSuccessfull").innerHTML = "successfull login";
		location.replace("index.html");
		alert("welcome "+username.value+" :)");
	}
	else if(username.value=="")
	{
		document.getElementById("wrongInfo").style.display = "block";
		document.getElementById("wrongInfo").innerHTML = "username should not be null,Authentication failed";
		
	}
	else
	{
		document.getElementById("wrongInfo").style.display = "block";
		document.getElementById("wrongInfo").innerHTML = "password should have exactly 8 char,1 UC,1 Special char";
		
	}
	
	
}

function signup()
{
	var username=document.getElementById("username");
	var email=document.getElementById("email");
	var password=document.getElementById("password");
	var passregex="^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,8}$";
	var emailregex="^[A-Za-z0-9]+@[A-Z0-9a-z]+\.[A-Za-z]{3,}$";
	if(username.value!=null&&password.value.match(passregex)&&email.value.match(emailregex))
	{
		document.getElementById("signInSuccessfull").style.display = "block";
		document.getElementById("signInSuccessfull").innerHTML = "successfull login";
		location.replace("index.html");
		alert("welcome "+username.value+" :)");
	}
	else if(username.value=="")
	{
		document.getElementById("wrongInfo").style.display = "block";
		document.getElementById("wrongInfo").innerHTML = "User name should not be null,,Authentication failed";
	}
	else if(!(password.value.match(passregex)))
	{
		document.getElementById("wrongInfo").style.display = "block";
		document.getElementById("wrongInfo").innerHTML = "password should have exactly 8 char,1 UC,1 Special char";
	}
	else 
	{
		document.getElementById("wrongInfo").style.display = "block";
		document.getElementById("wrongInfo").innerHTML = "valid email please eg:prasanna@edubridge.com";
	}
	
}

function orderid()
{
	var x = "TEDDY"+Math.floor((Math.random() * 10000000000) + 1);
  document.getElementById("demo").innerHTML = x;
}
