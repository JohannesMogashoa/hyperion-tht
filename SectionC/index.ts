const isbn13Validator = '1313131313131';
const isbn10Validator = '987654321';
const regEx = /^[\d]{9}[\dX]$/i;

const isValidIsbn10 = (isbn: string) => {
    if (!regEx.test(isbn)) {
        return false;
    }
    let chars = isbn.split("");
    if (chars[9].toUpperCase() === "X") {
        chars[9] = "10";
    }
    let sum = 0;
    for (let i = 0; i < chars.length; i++) {
        sum += (10 - i) * parseInt(chars[i]);
    }
    return sum % 11 === 0;
}

const convertToISBN13 = (isbn: string) => {
    if (!regEx.test(isbn)) return 'Invalid';

    isbn = '978' + isbn.substring(0, isbn.length - 1);
    let chars = isbn.split('').map((val) => parseInt(val));
    let sum = 0;

    for (let i = 0; i < 12; i++) {
        sum += chars[i] * (i % 2 ? 3 : 1);
    }

    return isbn + ((10 - (sum % 10)) % 10).toString();
};

const isbn13 = (isbn: string) => {
    let validatorArray: number[];
    let sum = 0;
    let isbnArr = isbn.split('').map((val) => parseInt(val));

    if (isbn.endsWith('X')) {
        if (!isValidIsbn10(isbn)) {
            return "Invalid"
        }
        return convertToISBN13(isbn);
    } else if (isbn.length == 10) {
        validatorArray = isbn10Validator.split('').map((val) => parseInt(val));
        validatorArray.unshift(10);
    } else {
        validatorArray = isbn13Validator.split('').map((val) => parseInt(val));
    }

    for (let i = 0; i < isbnArr.length; i++) {
        sum = sum + isbnArr[i] * validatorArray[i];
    }

    if (sum % 11 != 0 && sum % 10 != 0) return 'Invalid';
    else if (sum % 10 == 0) return 'Valid';
    else if (sum % 11 == 0) return convertToISBN13(isbnArr.join(''));
};

module.exports = isbn13;