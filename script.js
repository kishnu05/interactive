// script.js
const solidImage = document.getElementById('solid');
const liquidImage = document.getElementById('liquid');
const gasImage = document.getElementById('gas');
const solidLabel = document.getElementById('solid-label');
const liquidLabel = document.getElementById('liquid-label');
const gasLabel = document.getElementById('gas-label');

// Make labels draggable
solidLabel.setAttribute('draggable', true);
liquidLabel.setAttribute('draggable', true);
gasLabel.setAttribute('draggable', true);

// Event listeners for drag-and-drop
solidLabel.addEventListener('dragstart', handleDragStart);
liquidLabel.addEventListener('dragstart', handleDragStart);
gasLabel.addEventListener('dragstart', handleDragStart);

solidImage.addEventListener('dragover', allowDrop);
liquidImage.addEventListener('dragover', allowDrop);
gasImage.addEventListener('dragover', allowDrop);

solidImage.addEventListener('drop', handleDrop);
liquidImage.addEventListener('drop', handleDrop);
gasImage.addEventListener('drop', handleDrop);

// Rest of the code remains the same
// ...


function handleDragStart(event) {
    event.dataTransfer.setData('text/plain', event.target.id);
}

function allowDrop(event) {
    event.preventDefault();
}

function handleDrop(event) {
    event.preventDefault();
    const labelId = event.dataTransfer.getData('text/plain');
    const imageId = event.target.id;

    if (labelId === 'solid-label') {
        if (imageId === 'solid') {
            showMessage('Correct! Solid matches.');
        } else {
            showMessage('Incorrect! Solid does not match.');
        }
    } else if (labelId === 'liquid-label') {
        if (imageId === 'liquid') {
            showMessage('Correct! Liquid matches.');
        } else {
            showMessage('Incorrect! Liquid does not match.');
        }
    } else if (labelId === 'gas-label') {
        if (imageId === 'gas') {
            showMessage('Correct! Gas matches.');
        } else {
            showMessage('Incorrect! Gas does not match.');
        }
    }
}

function showMessage(message) {
    // You can display the message wherever you like (e.g., an alert, a div, etc.)
    alert(message);
}
