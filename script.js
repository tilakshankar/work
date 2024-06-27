document.getElementById('crypto-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const address = document.getElementById('address').value;
    const cryptoType = document.getElementById('crypto-type').value;
    const result = document.getElementById('result');

    if (validateAddress(address, cryptoType)) {
        result.textContent = 'Valid ' + cryptoType + ' address.';
        result.style.color = 'green';
    } else {
        result.textContent = 'Invalid ' + cryptoType + ' address.';
        result.style.color = 'red';
    }
});

function validateAddress(address, cryptoType) {
    let regex;

    switch(cryptoType) {
        case 'bitcoin':
            regex = /^[13][a-km-zA-HJ-NP-Z1-9]{25,34}$/;
            break;
        case 'ethereum':
            regex = /^0x[a-fA-F0-9]{40}$/;
            break;
        case 'litecoin':
            regex = /^[LM3][a-km-zA-HJ-NP-Z1-9]{26,33}$/;
            break;
        case 'ripple':
            regex = /^r[1-9A-HJ-NP-Za-km-z]{25,34}$/;
            break;
        case 'bitcoin-cash':
            regex = /^[qQpP][a-zA-Z0-9]{41}$/;
            break;
        default:
            return false;
    }

    return regex.test(address);
}
