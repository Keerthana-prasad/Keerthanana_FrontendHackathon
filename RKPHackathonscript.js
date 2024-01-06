document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector("header");
    const menu = document.querySelector("#menu-icon");
    const navlist = document.querySelector('.navbar');
  
    window.addEventListener("scroll", function () {
      header.classList.toggle("sticky", this.window.scrollY > 120);
    });
  
    menu.onclick = () => {
      menu.classList.toggle('bx-x');
      navlist.classList.toggle('active');
    };
  
    window.onscroll = () => {
      menu.remove.toggle('bx-x');
      navlist.remove.toggle('active');
    };
  });
  


document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector('form');
    const submitButton = document.getElementById('submitButton');
    const submissionResponse = document.getElementById('submissionResponse');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        

        // Display submission response
        submissionResponse.textContent = "Response Submitted";
        submissionResponse.style.color = 'green'; // Set your desired color
        submissionResponse.style.fontWeight = 'italic';
        submissionResponse.style.fontSize = '20px'; // Set your desired font size
        submissionResponse.style.fontFamily = 'Arial, sans-serif';

        // Disable the submit button after submission
        submitButton.disabled = true;
    });
});
