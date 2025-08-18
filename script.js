// DOMContentLoaded wraps code incase browser doesn't display elements immediately, to prevent returnimg null.
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById("order_form");
  const sendingOrder = document.getElementById("sending-order");
  const confirmOrder = document.getElementById("order-received");
  const messageInput = document.getElementById('message');
  const characterCount = document.getElementById('characterCount');
  const maxLength = 300;

  // Form submit simulation
  form.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent page reload

    sendingOrder.style.display = "block";
    confirmOrder.style.display = "none";
    
//Timings for order sent and received messages.
    setTimeout(() => {
      sendingOrder.style.display = "none";
      confirmOrder.style.display = "block"; 
      form.reset();

      setTimeout(() => {
        confirmOrder.style.display = "none";
      }, 3000);
    }, 2000);
  });

  // Textarea character count
  messageInput.addEventListener('input', () => {
    let currentLength = messageInput.value.length;
    if (currentLength > maxLength) {
      messageInput.value = messageInput.value.substring(0, maxLength);
      currentLength = maxLength;
    }
    characterCount.textContent = `${currentLength} / ${maxLength}`;
  });
});
    
