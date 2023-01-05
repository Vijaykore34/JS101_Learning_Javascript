// Print "Login successfull" if the entered email and password matches with the one that are registered

let reg_gmail="abc@gmail.com";
let reg_pass="123abc";

let email="abc@gmail.com";
let pass="123abc";

if(reg_gmail==email){
  if(reg_pass==pass){
    
    console.log("Login Successfull");
    
  }
}else{
  
  console.log("wrong Input");
  
}

reg_gmail==email && reg_pass==pass ? console.log("Login successfull") : console.log("Wrong Input");