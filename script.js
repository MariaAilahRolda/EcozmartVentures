function sendMail(){
let parms = {
name : document.getElementById("name").Value,
email : document.getElementById("email").Value,
subject : document.getElementById("subject").Value,
message : document.getElementById("message").Value,

}

emailjs.send("service_rqa9c3n","template_d46nlpj",parms).then(alert("Email Sent!!"))

}

