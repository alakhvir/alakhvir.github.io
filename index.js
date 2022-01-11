
document.querySelector(".contact-form").addEventListner("submit", submitForm);

function submitForm(e){
  e.preventDefault();

  let name = document.querySelector(".name").value;
  let email = document.querySelector(".email").value;
  let message = document.querySelector(".message").value;

  saveContactInfo(name, email, message);

  document.querySelector(".contact-form").reset();

  sendEmail(name, email, message);

}


function sendEmail(name, email, message){
  Email.send({
    Host: "smtp.gmail.com",
    Username: "alakhvir@gmail.com",
    Password: "hchyijqkmjrcplaj",
    To: "alakhvir@gmail.com",
    From: "alakhvir@gmail.com",
    Subject: `${name} sent you a message`,
    Body: `Name: ${name}<br />Email: ${email}<br />Message: ${message}`,
  }).then((message) => alert("Message sent successfully!"));
}
