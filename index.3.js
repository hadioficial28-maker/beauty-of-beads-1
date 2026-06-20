function submitOrder(e) {
    e.preventDefault();
    
    const productName = document.getElementById('modalProductName').textContent;
    const productPrice = document.getElementById('modalProductPrice').textContent;
    const name = document.getElementById('customerName').value;
    const phone = document.getElementById('customerPhone').value;
    const address = document.getElementById('customerAddress').value;
    const quantity = document.getElementById('orderQuantity').value;
    const totalPrice = productPrice.replace('PKR ', '') * quantity;

    // Your Email Address
    const emailTo = "beautyofbeads87@gmail.com";
    const subject = `New Order: ${productName}`;
    
    // Format the email body
    const body = `Hello Beauty of Beads,%0D%0A%0D%0AI would like to place a new order.%0D%0A%0D%0A--- ORDER DETAILS ---%0D%0AProduct: ${productName}%0D%0APrice: ${productPrice}%0D%0AQuantity: ${quantity}%0D%0ATotal: PKR ${totalPrice}%0D%0A%0D%0A--- CUSTOMER DETAILS ---%0D%0AName: ${name}%0D%0APhone: ${phone}%0D%0AAddress: ${address}%0D%0A%0D%0APayment Method: Cash on Delivery%0D%0A%0D%0AThank you!`;

    // Open the customer's email app
    window.location.href = `mailto:${emailTo}?subject=${encodeURIComponent(subject)}&body=${body}`;
    
    // Close modal and show message
    closeOrderModal();
    alert('Thank you! Your email app will open now. Please click "Send" to confirm your order.');
}