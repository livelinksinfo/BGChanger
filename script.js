const hexNumber = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E']

const hexBtn = document.querySelector('.hexBtn');
const bodColor = document.body;
const hex = document.querySelector('.hex');

hexBtn.addEventListener('click', getHex);

function getHex() {
    let hexCol = '#'
    for (i = 0; i < 6; i++) {
        let random = Math.floor(Math.random() * hexNumber.length);
        hexCol += hexNumber[random]
            // console.log(hexCol);
        hex.textContent = hexCol
        bodColor.style.backgroundColor = hexCol;

    }
}