/* function redirectToWhatsApp() { */
    /* Isi Pesan Form */
   /*  var name = document.getElementById("cName").value;
    var number = document.getElementById("cNumber").value;
    //var subject = document.getElementById("cSubject").value;
    var cMessage = document.getElementById("cMessage").value;
    var postLink = window.location.href; */
    
    /* validation */
    /* var error_name = document.getElementById("error_name"),
        error_email = document.getElementById("error_email"),
          error_message = document.getElementById("error_message"); */
    
    /* var text;
    if (name == "") {
      text = 'Please enter your name';
      error_name.setAttribute('data-text', text);
      return false;
    }  */
  
   /*  if (email.indexOf("@") == -1 || email.length < 6) {
      text = 'Please enter valid email';
      error_email.setAttribute('data-text', text);
      return false;
    }
  
    if (cMessage == "") {
      text = 'Please enter your Massage';
      error_message.setAttribute('data-text', text);
      return false;
    } */
  /* Pengaturan Pesan */
    /* var message = "New message from " + name + "\n\n"; // Pesan Pembuka
    message += "*Name:* " + name + "\n";
    message += "*Número:* " + number + "\n";
    /* message += "*Subject:* " + subject + "\n"; 
    message += "*Message:* " + cMessage + "\n\n";
    message += "=============================" + "\n";
    message += "*Form:* " + postLink + "\n";
    message += "=============================";
    Pengaturan Whatsapp
    var walink = 'whatsapp://send',
        phoneNumber = '+5581989617916'; // No Whatsapp Kamu
    
    var encodedMessage = encodeURIComponent(message);
    var whatsappUrl = walink + "?phone=" + phoneNumber + "&text=" + encodedMessage;
    window.open(whatsappUrl, '_blank');
    return true;
  }
  
  var inputs = document.querySelectorAll('.Fcontrol input[type=text], .Fcontrol input[type=email], .Fcontrol textarea');
  for (var i = 0; i < inputs.length; i++) {
    var input = inputs[i];
    input.addEventListener('input', function() {
      var bg = this.value ? 'show' : 'none';
      this.setAttribute('class', bg);
    });*/
/*   } */

const setup = (function () {
    // console.log('setup');
    document.getElementById('sendMessage').onsubmit = function (e) {
      e.preventDefault();
      console.log('click');
      const country = '55';
      const number = (document.getElementById('number').value || '')
        .replace(/\D/g, '')
        .replace(new RegExp(`^${country}`), '');
      const text = document.getElementById('text').value;
      if (!number) {
        alert('Invalid number');
        return;
      }
      // const link = `https://wa.me/${country}${number}?text=${text}`;
      link = `https://web.whatsapp.com/send?phone=${country}${number}&text=${text}`;
      if ((new MobileDetect(window.navigator.userAgent)).mobile()) {
        link = `https://api.whatsapp.com/send?phone=${country}${number}&text=${text}`;
      }
      console.log(number, link);
      window.open(link);
    };
  })
  if (window.attachEvent) {
    window.attachEvent('onload', setup);
  } else {
    window.addEventListener('load', setup, false);
  }