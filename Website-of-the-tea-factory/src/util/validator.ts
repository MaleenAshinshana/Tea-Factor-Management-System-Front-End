const usernameReg=/^([A-Z])|([a-z])/;
//const tel=/^(076|077|072|074|075|078)\d{7}$/
const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const sriLankanMobileRegex = /^7|0|(?:\ +94)[0-9]{9,10}$/;

export function validUsername(username:string):boolean{
    return usernameReg.test(username);
}
export function validatePassword(password:string):boolean{
    return password.length>=4;
}
export function validTel(teli:string):boolean{
    return sriLankanMobileRegex.test(teli);
}
export function validEmail(email:string):boolean{
    return emailRegex.test(email);
}
