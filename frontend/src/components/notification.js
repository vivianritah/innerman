
// notification.js
export function showNotification(message) {
    const notificationDiv = document.createElement('div');
    notificationDiv.classList.add('notification');
    notificationDiv.textContent = message;
    document.body.appendChild(notificationDiv);
  
    setTimeout(() => {
      notificationDiv.remove();
    }, 5000);
  }
  

