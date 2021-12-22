function capitalize(string){
    if (string === null)
    {
        return null;
    }
    if (string === "")
    {
        return "";
    }
    if (string.length === 1)
    {
        return string.charAt(0).toUpperCase();
    }
    let firstLetter = string.charAt(0).toUpperCase();
    let newString = firstLetter + string.slice(1);
    return newString;
}
function reverseString(string){
    if (string === null)
    {
        return null;
    }
    if (string.length === 1)
    {
        return string;
    }
    if (string === "")
    {
        return "";
    }
    let answer = "";
    for(let i = string.length - 1; i >= 0; i--)
    {
        answer += string.charAt(i);
    }
    return answer;
}
function calculator(a, b){
    let object = {
        add: a + b,
        subtract: a - b,
        multiply: a * b,
        divide: (b === 0 ?  null : a / b)
            
        
    }
    return object;
}
function caesarCipher(){}

module.exports = {capitalize, reverseString, calculator, caesarCipher};