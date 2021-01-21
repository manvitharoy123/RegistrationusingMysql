<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Login</title><style>
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
 border-radius: 5px;
 padding-left: 8px;
}
#Pass{
 width: 300px;
 height: 30px;
 border: none;
 border-radius: 5px;
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
h1{
color:pink;}</style>
</head>
<body>
<div class="login" align ="center">
<h1>User Login Form</h1>
<form action ="./login" method="post">


<label><b>User Name
 </b>
 </label><input type="text" name="uname" id="Uname" required>
<br>
 <label><b>Password
 </b>
 </label> <input type="password" name="password"id="Pass" required>
 <br><br>
<input type="submit" value="Submit" id="log">


 <br><br>
</form>

</div>
</body>
</html>