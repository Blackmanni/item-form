// Calculate subtotal based on item quantities
function calculateSubtotal() {
    const items = document.querySelectorAll('.item');
    let subtotal = 0;

    items.forEach(item => {
        const price = parseFloat(item.querySelector('.price').innerText);
        const quantity = parseInt(item.querySelector('.quantity').value) || 0;
        subtotal += price * quantity;
    });

    document.getElementById('subtotal').innerText = 'Subtotal: $' + subtotal.toFixed(2);
}

// Handle form submission
function submitForm() {
    const form = document.getElementById('orderForm');
    const formData = new FormData(form);

    const data = {
        firstName: formData.get('firstName'),
        lastName: formData.get('lastName'),
        company: formData.get('company'),
        phoneNumber: formData.get('phoneNumber'),
        address: formData.get('address'),
        city: formData.get('city'),
        state: formData.get('state'),
        email: formData.get('email'),
        items: []
    };

    // Collect item details
    document.querySelectorAll('.item').forEach(item => {
        const itemName = item.querySelector('.item-name').innerText;
        const itemPrice = parseFloat(item.querySelector('.price').innerText);
        const itemQuantity = parseInt(item.querySelector('.quantity').value) || 0;

        if (itemQuantity > 0) {
            data.items.push({
                name: itemName,
                price: itemPrice,
                quantity: itemQuantity
            });
        }
    });

    // Format data as JSON
    const jsonData = JSON.stringify(data, null, 2);
    console.log("Form Data:", jsonData);

    // Send data to email or external API (replace with actual email sending code)
    alert("Order submitted! Check console for data.");
}

// Attach event listeners
document.addEventListener('DOMContentLoaded', () => {
    // Recalculate subtotal whenever quantity changes
    document.querySelectorAll('.quantity').forEach(input => {
        input.addEventListener('input', calculateSubtotal);
    });

    // Form submission event
    document.getElementById('orderForm').addEventListener('submit', event => {
        event.preventDefault();  // Prevent default form submission
        submitForm();
    });
});
