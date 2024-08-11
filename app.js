const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

// biome-ignore lint/style/useSingleVarDeclarator: <explanation>
const randomChar = () => chars[Math.floor(Math.random() * (chars.length - 1))],
      randomString = length => Array.from(Array(length)).map(randomChar).join("");

const card = document.querySelector(".card");
const letters = card.querySelector(".card-letters");

const handleOnMove = e => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
  
    letters.style.setProperty("--x", `${x}px`);
    letters.style.setProperty("--y", `${y}px`);
  
    letters.innerText = randomString(5000); // Increase the number of characters
  }

card.onmousemove = e => handleOnMove(e);

card.ontouchmove = e => handleOnMove(e.touches[0]);

document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    
    // Toggle between hamburger and "X" symbol
    if (navLinks.classList.contains('active')) {
      menuToggle.innerHTML = '&times;'; // "X" symbol
    } else {
      menuToggle.innerHTML = '&#9776;'; // Hamburger menu symbol
    }
    
    // Toggle body overflow to prevent scrolling when the menu is open
    document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
  });
});


