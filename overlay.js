function showOverlay(message, duration) {
    var overlay = $('<div class="overlay"></div>');
    var message = $('<div class="overlayMessage">'+message+'</div>');
    overlay.append(message);
    $('body').append(overlay);
    overlay.fadeIn();
    setTimeout(function() {
      overlay.fadeOut(function() {
        $(this).remove();
      });
    }, duration);
  }

document.head.innerHTML += "<style>.overlay {position: fixed;top: 0;left: 0;width: 100%; height: 100%;background-color: rgba(0,0,0,0.6);z-index: 9999;display: none;}.overlayMessage {font-size: 60px;font-weight: bold;color: white;position: absolute;top: 50%;left: 50%;transform: translate(-50%, -50%);font-family: 'Seoge UI', sans-serif;}</style>";

console.log("OVERLAYJS By lu2000luk")
