const buttons = document.querySelectorAll('.button');
const monthlyPlans = document.querySelector('.monthly-plans');
const dailyPlans = document.querySelector('.daily-plans');
const annualPlans = document.querySelector('.annual-plans');

buttons.forEach(button => {
  button.addEventListener('click', function() {
    buttons.forEach(otherButton => otherButton.classList.remove('active'));
    this.classList.add('active');

    if (this.dataset.plan === 'monthly') {
      monthlyPlans.style.display = 'block';
      dailyPlans.style.display = 'none';
      annualPlans.style.display = 'none';
    } else if (this.dataset.plan === 'daily') {
      monthlyPlans.style.display = 'none';
      dailyPlans.style.display = 'block';
      annualPlans.style.display = 'none';
    } else {
      monthlyPlans.style.display = 'none';
      dailyPlans.style.display = 'none';
      annualPlans.style.display = 'block';
    }
  });
});
/*Navbar edit*/
const navbar = document.querySelector('.navbar');


// Add an event listener to the window's scroll event
window.addEventListener('scroll', changeNavbarColor);

document.querySelectorAll('.button').forEach(button => {
  button.addEventListener('click', function() {
    // Remove 'active' class from all buttons
    document.querySelectorAll('.button').forEach(btn => {
      btn.classList.remove('active');
    });
    // Add 'active' class to the clicked button
    this.classList.add('active');

    // Change background image based on the data-plan attribute of the clicked button
    const plan = this.getAttribute('data-plan');
    if (plan === 'daily') {
      document.body.style.backgroundImage = "url('home.jpg')"; // Replace 'path_to_birthday_image.jpg' with the actual path to your birthday background image
    } else if (plan === 'annual') {
      document.body.style.backgroundImage = "url('game.jpg')"; // Replace 'path_to_corporate_image.jpg' with the actual path to your corporate background image
    } else {
      document.body.style.backgroundImage = ''; // Reset background image for other plans
    }
  });
});