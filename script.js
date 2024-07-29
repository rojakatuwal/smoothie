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
    event.preventDefault(); // Prevents the default form submission

    // Gets form values
    const name = document.getElementById('name').value;
    const flavor = document.getElementById('flavor').value;
    const size = document.querySelector('input[name="size"]:checked').value;
    const quantity = document.getElementById('quantity').value;

    // Creates a new Smoothie object
    const smoothie = new Smoothie(name, flavor, size, quantity);

    // Stores the values in session storage
    sessionStorage.setItem('smoothieDescription', smoothie.getDescription());

    // Redirects to the thank you page
    window.location.href = 'index1.html';
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
