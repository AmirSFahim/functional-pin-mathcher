
function getPin(){
    const pin = generatePin();
    const pinString =pin + '';
    if(pinString.length ===4){
        return pin;
    }
    else{
        return getPin()
    }
}
function generatePin(){
    const random = Math.round(Math.random()*10000);
    return random;
}
document.getElementById('generate-pin').addEventListener('click',function(){
    const showPin = getPin();
    const DisplayPinField = document.getElementById('display-pin');
    DisplayPinField.value = showPin;
})
document.getElementById('calculator').addEventListener('click',function(event){
    const number = event.target.innerText;
     const typeNUmberfield =document.getElementById('typed-number');
     const previousTypedNumber = typeNUmberfield.value;
     if(isNaN(number)){
        if(number ==='C'){
            typeNUmberfield.value =''
        }
        else if (number === '<'){
            const digit = previousTypedNumber.split('')
            digit.pop();
            const raminingDgit = digit.join('')
            typeNUmberfield.value = raminingDgit;
        }}
    else{
        const newTypeNumber = previousTypedNumber + number;
        typeNUmberfield.value = newTypeNumber;
    }
})
document.getElementById('varify').addEventListener('click',function(){
    const DisplayPinField = document.getElementById('display-pin');
    const currentPin = DisplayPinField.value;

    const typeNUmberfield =document.getElementById('typed-number');
    const currentNumber = typeNUmberfield.value;
    const pinSuccess = document.getElementById('success');
    const pinFail = document.getElementById('fail');
    if(currentPin === currentNumber){
        pinSuccess.style.display='block';
        pinFail.style.display = 'none';
    }else{
        pinFail.style.display = 'block';
        pinSuccess.style.display='none';
    }
})