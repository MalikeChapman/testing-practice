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
function reverseString(string){}
function calculator(){}
function caesarCipher(){}

module.exports = {capitalize, reverseString, calculator, caesarCipher};