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