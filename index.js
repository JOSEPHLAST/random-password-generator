started = false;
document.getElementById("submit").onclick = function(){
    switch(!started){
        case document.getElementById('name').value == '':
            document.getElementById("password").textContent = `Please enter your name.`;
            break;
        default: started = false; 
    function generatePassword(length, includesUppercase, includesLowercase, includesNumbers, includesSymbols){
    letter =  String(document.getElementById("name").value);
    let letterIndex1 = letter.indexOf(' ');
    letter1 = letter.slice(0, letterIndex1);
    letter2 = letter.slice(letterIndex1 + 1);
    letter = letter1 + letter2;
    let upperCase = letter.toUpperCase();
    let lowerCase = letter.toLowerCase();
    let numbers = ("0123456789");
    let symbols = ("!@#$%^&*()_-+=/|");
    
    let chars = '';
    let password = '';

    chars += includesUppercase ? upperCase : '';
    chars += includesLowercase ? lowerCase : '';
    chars += includesNumbers ? numbers : '';
    chars += includesSymbols ? symbols : '';

    for(i = 0; i < length; i++){
        let randomIndex = Math.floor(Math.random() * chars.length);
        password += chars[randomIndex];
    }
    
    return password;

}

    const passwordLength = 10;
    const includesUppercase = true;
    const includesLowercase = true;
    const includesNumbers = true;
    const includesSymbols = true;

    const password = generatePassword(passwordLength, includesUppercase, includesLowercase, includesNumbers, includesSymbols);

    document.getElementById("password").textContent = `Your password is ${password}`;
}}
