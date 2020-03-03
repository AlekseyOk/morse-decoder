const MORSE_TABLE = {
	'sssss': ' ',
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
	const decodeMap = {
		'00': '',
		'10': '.',
		'11': '-',
		'**': 's'
	}

    let finalPhrase = [];
    let data = expr.split('');
    let numberOfSymbols = expr.length / 10;
	
	for (let i = 0; i < numberOfSymbols; i++) {

        let letter = [];
        
		for (let k = 0; k < 5; k++) {
            letter.push(decodeMap[data.splice(0, 2).join('')]);
        }

        let key = letter.join('');

		finalPhrase = finalPhrase + MORSE_TABLE[key];
	}
	return finalPhrase
}

module.exports = {
	decode
}