function updatePhoneNumber(isCrease){
    const phoneNumberField = document.getElementById('phone-number-field');
    const phoneNumberString = phoneNumberField.value;
    const previousPhoneNumber = parseFloat(phoneNumberString);
 
    let newPhoneNumber;
    if(isCrease){
      newPhoneNumber = previousPhoneNumber + 1;
    }
    else{
        newPhoneNumber = previousPhoneNumber - 1;
    }
     phoneNumberField.value = newPhoneNumber;
     return newPhoneNumber;
}



function updatePhoneTotalPrice(newPhoneNumber){
    const phoneTotalprice = newPhoneNumber * 1219;
    const phonetotalElement = document.getElementById('phone-total');
    phonetotalElement.innerText = phoneTotalprice;
}




document.getElementById('btn-phone-plus').addEventListener('click',function(){
    const newPhoneNumber = updatePhoneNumber(true);

    updatePhoneTotalPrice(newPhoneNumber);
    calculateSubtTotal()

    // calculate total
    // const phonetotalElement = document.getElementById('phone-total');
    // const currentPhoneTotalString = phonetotalElement.innerText;
    // const currentPhoneTotal = parseInt(currentPhoneTotalString);
    
    // const currentPhoneTotal = getTextElementValueById('phone-total');
    // const currentCaseTotal = getTextElementValueById('case-total');
    // const currentSubTotal = currentPhoneTotal + currentCaseTotal;
    // const subTotalElement = document.getElementById('sub-total')
    // subTotalElement.innerText = currentSubTotal;
 });
// document.getElementById('btn-phone-plus').addEventListener('click',function(){
//     const newPhoneNumber = updatePhoneNumber(true);

//     const phoneTotalprice = newPhoneNumber * 1219;
//     const phonetotalElement = document.getElementById('phone-total');
//     phonetotalElement.innerText = phoneTotalprice;
 
//  });



 document.getElementById('btn-phone-minus').addEventListener('click',function(){
    const newPhoneNumber = updatePhoneNumber(false);

    updatePhoneTotalPrice(newPhoneNumber);
    calculateSubtTotal()

}) ;
//------------------------ optional-------------------

// document.getElementById('btn-phone-plus').addEventListener('click',function(){
//    const phoneNumberField = document.getElementById('phone-number-field');
//    const phoneNumberString = phoneNumberField.value;
//    const previousPhoneNumber = parseFloat(phoneNumberString);

//    const newPhoneNumber = previousPhoneNumber + 1;
//     phoneNumberField.value = newPhoneNumber;

// })

