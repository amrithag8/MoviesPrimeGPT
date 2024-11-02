export const ValidateForm=( email, password, )=>{
const IsemailValid=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
const IspasswordValid=/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(password);


if(!IsemailValid) return "Email ID is not valid";
if(!IspasswordValid) return "Password must be 8 characters. It must have an uppercase, a number and a special character";

return null;
}

export const ValidateName=(fullName)=>{
   

    const IsFullNameValid=/^[a-zA-Z]+(?:\s[a-zA-Z]+)+$/.test(fullName);
    if(!IsFullNameValid) return "Name is not valid";

    return null;
}