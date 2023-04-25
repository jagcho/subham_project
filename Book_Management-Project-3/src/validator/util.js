

// regular expression 
const nameRegex = /^[A-Za-z\s]{1,}[\.]{0,1}[A-Za-z\s]{0,}$/
const mailRegex = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/
const regexNumber = /^(\+91[\-\s]?)?[0]?(91)?[6789]\d{9}$/
const regexPin = /^[1-9]{1}[0-9]{2}[0-9]{3}$/
const passRegex = /^[a-zA-Z0-9]{8,15}$/
const regEx3 = /^\w[a-zA-Z.\s]*$/
const regEx1 = /^\w[a-zA-Z\.]+/
const titleregEx = /^\w[A-Za-z0-9\s\-_,\.;:()]+$/
const isbnregEx = /\x20*(?=.{17}$)97(?:8|9)([ -])\d{1,5}\1\d{1,7}\1\d{1,6}\1\d$/
const Dateregex = /^([0-9]{4}[-/]?((0[13-9]|1[012])[-/]?(0[1-9]|[12][0-9]|30)|(0[13578]|1[02])[-/]?31|02[-/]?(0[1-9]|1[0-9]|2[0-8]))|([0-9]{2}(([2468][048]|[02468][48])|[13579][26])|([13579][26]|[02468][048]|0[0-9]|1[0-6])00)[-/]?02[-/]?29)$/

// Validations
const isValid = function (value) {
    if (typeof value === undefined || value === null) return false;
    if (typeof value === "string" && value.trim().length === 0) return false;
    if (typeof value === "number") return false;
    return true;
};


module.exports = {nameRegex,mailRegex,regexNumber,regexPin,passRegex,regEx3,regEx1,titleregEx,isbnregEx,Dateregex,isValid}