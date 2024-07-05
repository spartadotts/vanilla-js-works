document.addEventListener('DOMContentLoaded', () => {
    let counter = 0;

    const valueElement = document.getElementById('value');

    function updateValue(){
        valueElement.textContent = counter;
    }

    document.querySelector(".btn.decrease").addEventListener('click', () => {
        counter--;
        updateValue();
    })

    document.querySelector(".btn.reset").addEventListener('click', () => {
        counter=0;
        updateValue();
    })

    document.querySelector(".btn.increase").addEventListener('click',() => {
        counter++;
        updateValue();
    })
})