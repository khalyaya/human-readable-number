module.exports = function toReadable (number) {
        const singleDigits = ['', 'one', 'two', 'three', 'four','five', 'six','seven', 'eight', 'nine'];
        const doubleDigits = ['', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
        const tens = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
        const hundreds = ['', 'one hundred', 'two hundred', 'three hundred', 'four hundred', 'five hundred', 'six hundred', 'seven hundred', 'eight hundred', 'nine hundred'];
    
    let numberToWords = '';

    if ( number === 0){
        return 'zero';
    }

    if(number >= 100) {
        let onlyHundreds = hundreds[Math.floor(number / 100)];
        numberToWords = numberToWords + onlyHundreds + ' ';
        number = number % 100;
        
    }

    if(number >= 11 && number <= 19){
        numberToWords = numberToWords + doubleDigits[Math.floor(number - 10)]; 
        return numberToWords.trim(); 
    }
    
    
    if(number >= 10){
        let onlyTens = tens[Math.floor(number / 10)];
        numberToWords = numberToWords  + onlyTens + ' ';
        number = number % 10;
    }

    if (number >= 0 && number <= 9 && numberToWords.length > 0){
        numberToWords = numberToWords + singleDigits[number];
    }
    else {
        numberToWords = singleDigits[number];
    }

    return numberToWords.trim();
 }

