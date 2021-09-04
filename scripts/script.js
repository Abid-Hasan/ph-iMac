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

    setCosting(container, event);
}

function setCosting(container, event) {
    // extra-memory-cost
    if (container.id == 'memory-container') {
        if (event.target.id == 'memory-2') {
            document.getElementById('extra-memory-cost').innerText = '180';
        }
        else {
            document.getElementById('extra-memory-cost').innerText = '0';
        }
    }
    // extra-storage-cost
    else if (container.id == 'storage-container') {
        if (event.target.id == 'storage-2') {
            document.getElementById('extra-storage-cost').innerText = '100';
        }
        else if (event.target.id == 'storage-3') {
            document.getElementById('extra-storage-cost').innerText = '180';
        }
        else {
            document.getElementById('extra-storage-cost').innerText = '0';
        }
    }
    // delivery-charge
    else if (container.id == 'delivery-container') {
        if (event.target.id == 'delivery-2') {
            document.getElementById('delivery-charge').innerText = '20';
        }
        else {
            document.getElementById('delivery-charge').innerText = '0';
        }
    }

    // update total
    updateTotal();
}

function updateTotal() {
    let total = 0;

    const basePrice = parseFloat(document.getElementById('base-price').innerText);
    if (!isNaN(basePrice)) total += basePrice;

    const extraMemoryCost = parseFloat(document.getElementById('extra-memory-cost').innerText);
    if (!isNaN(extraMemoryCost)) total += extraMemoryCost;

    const extraStorageCost = parseFloat(document.getElementById('extra-storage-cost').innerText);
    if (!isNaN(extraStorageCost)) total += extraStorageCost;

    const deliveryCharge = parseFloat(document.getElementById('delivery-charge').innerText);
    if (!isNaN(deliveryCharge)) total += deliveryCharge;

    document.getElementById('total-price').innerText = total;

    updateGrandTotal();
}

function updateGrandTotal() {
    const total = parseFloat(document.getElementById('total-price').innerText);

    if (isPromoApplied) {
        document.getElementById('grand-total-price').innerText = total * 0.8;
    }
    else {
        document.getElementById('grand-total-price').innerText = total;
    }
}

let isPromoApplied = false;
document.getElementById('apply-promo-button').addEventListener('click', function () {
    const promoField = document.getElementById('promo-input');
    const promo = promoField.value;
    if (promo.toLowerCase() == 'stevekaku') {
        isPromoApplied = true;
    }
    else {
        isPromoApplied = false;
    }
    updateGrandTotal();
    promoField.value = '';
});