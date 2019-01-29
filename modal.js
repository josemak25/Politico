window.onclick = event => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};
// Get the modal
const modal = document.getElementById("myModal");

const btn = document.querySelectorAll(".menu");

const span = document.getElementsByClassName("close")[0];

btn.forEach(element => {
  element.onclick = () => (modal.style.display = "block");
});

span.onclick = () => (modal.style.display = "none");
