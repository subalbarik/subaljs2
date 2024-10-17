const draggables = document.querySelectorAll('.draggable');
const dropzone = document.getElementById('dropzone');

draggables.forEach(draggable => {
    draggable.addEventListener('dragstart', dragStart);
});

function dragStart(event) {
    event.dataTransfer.setData('text/plain', event.target.id);
}

dropzone.addEventListener('dragover', dragOver);
dropzone.addEventListener('drop', drop);

function dragOver(event) {
    event.preventDefault();
}

// Handle the drop event
function drop(event) {
    event.preventDefault();
    const id = event.dataTransfer.getData('text');
    const draggableElement = document.getElementById(id);
    draggableElement.classList.add('draggable-in-dropzone');
    dropzone.appendChild(draggableElement);
    draggableElement.addEventListener('click', function() {
        removeFromDropzone(draggableElement);
    });
}

function removeFromDropzone(draggableElement) {
   
    dropzone.removeChild(draggableElement);
    draggableElement.classList.remove('draggable-in-dropzone');
        document.body.appendChild(draggableElement);
}
