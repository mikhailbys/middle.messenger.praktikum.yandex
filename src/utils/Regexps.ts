// more secure regex password must be :
// more than 8 chars
// at least one number
// at least one special character
export const PASSWORD_REGEXP=  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;