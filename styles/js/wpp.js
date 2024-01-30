function sendwhatsapp(){
    var phonenumber = "+5581989617916";

    var name = document.querySelector("#contact-name").value;
    var number = document.querySelector("#contact-number").value;
    var country = document.querySelector("#contact-country").value;
    var message = document.querySelector("#contact-message").value;
    
    var url = "https://wa.me/" + phonenumber + "?text="
    +"*Nome :* "+name+"%0a"
    +"*Número :* "+number+"%0a"
    +"*País:* "+country+"%0a"
    +"*Mensagem :* "+message
    +"%0a%0a"

    window.open(url, '_blank');
  }