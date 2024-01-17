function auth(){
    password = window.prompt("Please enter password.", "");
    if(password == "E#&%3*$m"){
        location.href = "#top";
    }
    else if(password != null){
      window.alert(password + ' is not matched!');
      location.href = "void(0)";
    }
    else{
      window.alert('Canceled!');
      location.href = "void(0)";
    }
}
auth();
