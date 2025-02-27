// First, remove the main element with id 'main'
const mainElement = document.getElementById('main');
mainElement.remove();

// Create a new h1 element with id 'victory' and assign it to the newHeader variable
const newHeader = document.createElement('h1');
newHeader.id = 'victory';
newHeader.textContent = "Edgar is the champion";

// Add the newHeader to the document body
document.body.appendChild(newHeader);

