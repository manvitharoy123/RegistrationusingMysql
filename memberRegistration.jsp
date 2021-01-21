<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>

<style>
body{
background-image:url('https://i.pinimg.com/originals/1e/88/fe/1e88fe6f595948a651ee3299eedb9aad.jpg');
background-repeat:no-repeat;
background-size:cover;}
.login{
 width: 382px;
 overflow: hidden;
 margin: auto;
 margin: 20 0 0 450px;
 padding: 80px;
 background: #23463f;
 border-radius: 16px ;
 margin-top: 7.5%;
}
label{
 color: #08ffd1;
 font-size: 17px;
}
#Uname{
 width: 300px;
 height: 30px;
 border: none;
 border-radius: 3px;
 padding-left: 8px;
}
#Pass{
 width: 300px;
 height: 30px;
 border: none;
 border-radius: 3px;
 padding-left: 8px;
}
#log{
 width: 300px;
 height: 30px;
 border: none;
 border-radius: 17px;
 padding-left: 7px;
 color: blue;
}
span{
 color: white;
 font-size: 17px;
}
a{
 float: right;
 background-color: grey;
} 
		</style>
</head>
<body>
<div class="login">
<form action="./Register" method="post">

<label><b>User Name
 </b>
 </label>
 <input type="text" name="uname"id="Uname">
 <br><br>
 <label><b>Password
 </b>
 </label>
<input type="password" name="password" id="Pass">
 <br><br>
 <label><b>Email
 </b>
 </label><br>
<input type="text" name="email" id="Pass">
<br><br>
 <label><b>phone number
 </b>
 </label>

 <input type="text" name="phone" id="Pass"><br><br>
<input type="submit" value="register"  id="log">
</form></div>
</body>
</html>
