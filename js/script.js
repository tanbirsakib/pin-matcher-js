//generating random 4 digit numbers
function generatePin() {
  const pin = Math.round(Math.random() * 10000);
  const pinString = pin + "";
  if (pinString.length == 4) {
    document.getElementById("display-pin").value = pin;
  } else {
    generatePin();
  }
}

//add event listener to calculator

document.getElementById('pin-input').addEventListener('click', function(event){
   const pinInput = event.target.innerText;
   const pinDisplay = document.getElementById('display-input');
   if(isNaN(pinInput)){
       if(pinInput == 'C'){
           pinDisplay.value = '';
       }
   } else{
    const prevPin = pinDisplay.value;
    const updatedPin = prevPin + pinInput;
    pinDisplay.value = updatedPin;
   }
})

//matching generated pin with update pin

function pinMatcher(){
    const generatedPin = document.getElementById('display-pin').value;
    const inPutPin = document.getElementById('display-input').value;
    const errorNoti = document.getElementById('error-noti');
    const successNoti = document.getElementById('success-noti');

    if(generatedPin == inPutPin){
        successNoti.style.display = 'block';
        errorNoti.style.display = 'none';
    } else {
        errorNoti.style.display = 'block';
        successNoti.style.display = 'none';
    }
}