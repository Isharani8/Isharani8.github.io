/* TYPING EFFECT */

const text = "Cybersecurity Student";
let index = 0;

function typeEffect(){
if(index < text.length){
document.querySelector(".typing").innerHTML += text.charAt(index);
index++;
setTimeout(typeEffect,60);
}
}

typeEffect();

/* CERTIFICATE MODAL */

const modal = document.getElementById("certModal");
const modalImg = document.getElementById("modalImg");
const closeBtn = document.getElementsByClassName("close")[0];

// Get all certificate images
const certImages = document.querySelectorAll(".cert-card img");

// Add click event to each certificate image
certImages.forEach(img => {
img.style.cursor = "pointer";
img.addEventListener("click", function() {
modal.style.display = "block";
modalImg.src = this.src;
});
});

// Close modal when clicking the X
closeBtn.addEventListener("click", function() {
modal.style.display = "none";
});

// Close modal when clicking outside the image
modal.addEventListener("click", function(event) {
if (event.target === modal) {
modal.style.display = "none";
}
});

// Close modal with Escape key
document.addEventListener("keydown", function(event) {
if (event.key === "Escape" && modal.style.display === "block") {
modal.style.display = "none";
}
});