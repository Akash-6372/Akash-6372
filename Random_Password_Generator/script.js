document.getElementById("generate").addEventListener("click", function() {
    const passwdLength = 12;
    const includeLowercase = true;
    const includeUppercase = true;
    const includeNumbers = true;
    const includeSpecialChar = true;

    const password = generatePassword(passwdLength, includeLowercase, includeUppercase, includeNumbers, includeSpecialChar);
    document.getElementById("result").innerText = password;
});

function generatePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSpecialChar) {
    const lowerCase = "abcdefghijklmnopqrstuvwxyz";
    const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const Numbers = "1234567890";
    const Symbols = "~!@#$%^&*()_+=";

    let allowedCharacter = "";
    let password = "";

    allowedCharacter += includeLowercase ? lowerCase : "";
    allowedCharacter += includeUppercase ? upperCase : "";
    allowedCharacter += includeNumbers ? Numbers : "";
    allowedCharacter += includeSpecialChar ? Symbols : "";

    if (length <= 0) {
        return "(Password length should be at least one)";
    }
    if (allowedCharacter.length === 0) {
        return "(At least one set of characters needs to be selected)";
    }
    for (let i = 0; i < length; i++) {
        const randomNum = Math.floor(Math.random() * allowedCharacter.length);
        password += allowedCharacter[randomNum];
    }
    return password;
}