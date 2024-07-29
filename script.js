class Smoothie {
    constructor(name, flavor, size, quantity) {
        this.name = name;
        this.flavor = flavor;
        this.size = size;
        this.quantity = quantity;
    }

    getDescription() {
        return `${this.name} ordered ${this.quantity} ${this.size} ${this.flavor} smoothie(s).`;
    }
}

document.getElementById('orderForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form values
    const name = document.getElementById('name').value;
    const flavor = document.getElementById('flavor').value;
    const size = document.querySelector('input[name="size"]:checked').value;
    const quantity = document.getElementById('quantity').value;

    // Create a new Smoothie object
    const smoothie = new Smoothie(name, flavor, size, quantity);

    // Store the values in session storage
    sessionStorage.setItem('smoothieDescription', smoothie.getDescription());

    // Display the thank you section and hide the order form
    document.getElementById('orderSection').classList.add('hidden');
    document.getElementById('thankYouSection').classList.remove('hidden');
    document.getElementById('orderSummary').innerText = smoothie.getDescription();
});

// Script that controls the increment and decrement of the order quantity as we hit the + and - button
document.getElementById('increment').addEventListener('click', function() {
    const quantityInput = document.getElementById('quantity');
    quantityInput.value = parseInt(quantityInput.value) + 1;
});

document.getElementById('decrement').addEventListener('click', function() {
    const quantityInput = document.getElementById('quantity');
    if (parseInt(quantityInput.value) > 1) {
        quantityInput.value = parseInt(quantityInput.value) - 1;
    }
});

// Script to handle going back to the order form
document.getElementById('backToOrder').addEventListener('click', function() {
    document.getElementById('orderSection').classList.remove('hidden');
    document.getElementById('thankYouSection').classList.add('hidden');
});

// Check if there is an order description in session storage and display the thank you section if present
const storedDescription = sessionStorage.getItem('smoothieDescription');
if (storedDescription) {
    document.getElementById('orderSection').classList.add('hidden');
    document.getElementById('thankYouSection').classList.remove('hidden');
    document.getElementById('orderSummary').innerText = storedDescription;
}
