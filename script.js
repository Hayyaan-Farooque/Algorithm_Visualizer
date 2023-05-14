let array = [];
const arraySizeInput = document.getElementById('arraySizeInput');
const speedInput = document.getElementById('speedInput');
const arrayContainer = document.getElementById('arrayContainer');

function generateArray() {
    arrayContainer.innerHTML = '';
    array = [];
    for (let i = 0; i < arraySizeInput.value; i++) {
        array.push(Math.random() * 100);
        const bar = document.createElement('div');
        bar.className = 'bar';
        bar.style.height = `${array[i]}%`;
        arrayContainer.appendChild(bar);
    }
}

async function bubbleSort() {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - 1; j++) {
            arrayContainer.children[j].classList.add('comparing');
            arrayContainer.children[j + 1].classList.add('comparing');
            await new Promise(resolve => setTimeout(resolve, speedInput.value));
            if (array[j] > array[j + 1]) {
                [array[j], array[j + 1]] = [array[j + 1], array[j]];
                arrayContainer.children[j].style.height = `${array[j]}%`;
                arrayContainer.children[j + 1].style.height = `${array[j + 1]}%`;
            }
            arrayContainer.children[j].classList.remove('comparing');
            arrayContainer.children[j + 1].classList.remove('comparing');
        }
    }
}
