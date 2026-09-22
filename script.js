// Replace this with the KMFC business WhatsApp number in international format.
// Example for a South African number: 27821234567 (no +, spaces or leading 0).
const WHATSAPP_NUMBER = "27000000000";

document.getElementById("year").textContent = new Date().getFullYear();

const form = document.getElementById("bookingForm");
form.addEventListener("submit", function (event) {
  event.preventDefault();

  const message =
`KMFC SHUTTLES BOOKING ENQUIRY
Name: ${document.getElementById("name").value}
Phone: ${document.getElementById("phone").value}
Pickup: ${document.getElementById("pickup").value}
Destination: ${document.getElementById("destination").value}
Date: ${document.getElementById("date").value}
Passengers: ${document.getElementById("passengers").value}
Details: ${document.getElementById("details").value}`;

  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, "_blank");
});

document.getElementById("whatsappLink").href =
  `https://wa.me/${WHATSAPP_NUMBER}`;
