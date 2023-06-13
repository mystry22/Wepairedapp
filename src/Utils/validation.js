const checkFirstName =(name)=>{
    let msg = '';
    const regex = /\d/;
       
    if(!name){
        msg = 'First Name cannot be less than 3 chars';
    }else if(regex.test(name)){
        msg = 'Please enter a valid name';
    }else if(name.length < 3){
        msg = 'First Name cannot be less than 3 chars';
    }
    return msg;
        
    
    
}

const checkString =(val)=>{
    let msg = '';
    
       
    if(!val){
        msg = 'Value cannot be empty';
    }else if(val.length < 6){
        msg = 'Value cannot be less than 6 Chars';
    }
    return msg;
        
    
    
}
const checkLastName =(name)=>{
    let msg = '';
    const regex = /\d/;
       
    if(!name){
        msg = 'Last Name cannot be less than 3 chars';
    }else if(regex.test(name)){
        msg = 'Please enter a valid name';
    }else if(name.length < 3){
        msg = 'Last Name cannot be less than 3 chars';
    }
    return msg;
        
    
    
}

const checkAddress =(address)=>{
    let msg = '';
    const regex = /\d/;
    if(regex.test(address)){
        if(address.length < 3){
            msg = 'Please enter a valid address';
        }
    }else{
        msg = 'Please enter a valid address';
    }
    return msg;
}
const checkCity =(city)=>{
    let msg = '';
    const regex = /\d/;
       
    if(city.length < 3){
        msg = 'Please enter a valid city';
    }else if(regex.test(city)){
        msg = 'Please enter a valid city';
    }
    return msg;
}

const checkProvince =(province)=>{
    let msg = '';
    const regex = /\d/;
       
    if(province.length < 3){
        msg = 'Please enter a valid province';
    }else if(regex.test(province)){
        msg = 'Please enter a valid province';
    }
    return msg;
}

const checkPhone =(phone)=>{
    let msg = '';
    let newphone = '';
    if(isNaN(phone)){
        msg = 'Please enter a valid number';
    }else{
        if(phone.length == 11) {
             newphone = phone.substr(0,1);
            if(newphone == 0){
    
            }else{
                msg = 'Please enter a valid number';
            } 
        }else if(phone.length == 13){
             newphone = phone.substr(0,1);
            if(newphone == 2){
    
            }else{
                msg = 'Please enter a valid number';
            } 
        }else{
                msg = 'Please enter a valid number';
        }
    }
    return msg;
}
const checkMail =(email)=>{
    let msg ='';
    const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(validRegex.test(email)){
        
    }else{
        msg = 'invalid email';
    }

    return msg;
}

const checkPass =(pass)=>{
    let msg = '';
    if(pass.length < 6){
        msg = 'Password must not be less than 6 chars'
    }

    return msg;
}

const checkSubject =(subject)=>{
    let msg = '';
    if(subject.length < 3){
        msg = 'Please enter a valid subject'
    }

    return msg;
}

const checkMessage =(message)=>{
    let msg = '';
    if(message.length < 1){
        msg = 'Please enter a valid text';
    }

    return msg;
}

const checkNuban=(nuban)=>{
    let msg = '';
    
        
    if(nuban.length != 10){
        msg = 'please enter a valid account number';
    }else if(isNaN(nuban)){
            msg = 'please enter a valid number';
    }else if(nuban == '0123456789'){
            msg = 'account cannot be empty';
    }
    

    return msg;
}

const checkBank=(bank)=>{
    let msg = '';

    if(bank == 'Bank'){
        msg = 'Please select a bank';
    }

    return msg;
}

const checkNumber =(num)=>{
    let msg = '';

    if(isNaN(num)){
        msg= 'Please enter a valid price'
    }

    return msg;
}

const checkDesc =(desc)=>{
    let msg = '';

    if(desc.length > 37){
        msg= 'Product desciption cannot be more than 37 char long'
    }

    return msg;
}

const selectedSize =(size)=>{
    let msg = '';

    if(size == null){
        msg= 'Please select product size'
    }

    return msg;
}



export {
    checkFirstName,
    checkLastName,
    checkAddress,
    checkCity,
    checkProvince,
    checkPhone,
    checkMail,
    checkPass,
    checkSubject,
    checkMessage,
    checkNuban,
    checkBank,
    checkNumber,
    checkDesc,
    selectedSize,
    checkString
}