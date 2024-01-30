function sendwhatsapp(){
    var phonenumber = "+5581989617916";

    var name = document.querySelector("#contact-name").value;
    var number = document.querySelector("#contact-number").value;
    var country = document.querySelector("#contact-country").value;
    var message = document.querySelector("#contact-message").value;
    
    var url = "https://wa.me/" + phonenumber + "?text="
    +"*Name :* "+name+"%0a"
    +"*Email :* "+number+"%0a"
    +"*Country:* "+country+"%0a"
    +"*Message :* "+message
    +"%0a%0a"
    +"This is an example of send HTML form data to WhatsApp";

    window.open(url, '_blank');
  }