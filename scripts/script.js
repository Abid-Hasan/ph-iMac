document.getElementById('memory-container').addEventListener('click', function (event) {
    selectOption(this, event);
});

document.getElementById('storage-container').addEventListener('click', function (event) {
    selectOption(this, event);
});

document.getElementById('delivery-container').addEventListener('click', function (event) {
    selectOption(this, event);
});



function selectOption(container, event) {
    // don't do anything if parent is clicked
    if (event.target.classList.contains('option-container')) return;

    // removing option-selected class from all
    for (const child of container.children) {
        child.classList.remove('option-selected');
    }

    // adding option-selected class to current selection
    if (event.target.classList.contains('option')) {
        event.target.classList.add('option-selected');
    }
}