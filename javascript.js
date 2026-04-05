function callNow() {
  window.location.href = "tel:+919999999999";
}

function whatsappNow() {
  window.open("https://wa.me/919999999999");
}

function scrollToContact() {
  document.getElementById("contact").scrollIntoView({
    behavior: "smooth"
  });
}
