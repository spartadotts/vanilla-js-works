document.addEventListener('DOMContentLoaded', () => {
    let counter = 0;

    const valueElement = document.getElementById('value');

    function updateValue(){
        valueElement.textContent = counter;
        if(counter > 0){
            valueElement.style.color = 'green'
        }
        else if(counter<0){
            valueElement.style.color = 'red'
        }
        else if(counter == 0){
            valueElement.style.color = 'black'
        }
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