page = {
    elements: {
        userInput: document.querySelector('.user-input'),
        inputs: document.querySelectorAll('.to-read'),
        inputAlert: document.querySelectorAll('.input-alert'),
        measurer: document.getElementById('measure'),

        sendButton: document.querySelector('.send-button'),

        fallArea: document.querySelector('.fall-word-area'),

        popup: {
            content: document.querySelector('.popup-content'),
            close: document.querySelector('.popup-close')
        }
    }
}




page.elements.userInput.addEventListener('input', () =>{
    page.elements.userInput.value = page.elements.userInput.value.replace(/ /g, '');

    if(checkWidth(
        page.elements.measurer,
        page.elements.userInput
    )){

        let lastWord = page.elements.userInput.value[page.elements.userInput.value.length - 1];

        page.elements.userInput.value = page.elements.userInput.value.slice(0, -1);

        wordSpan = document.createElement('span');
        wordSpan.className = 'fallen-word';
        wordSpan.textContent = lastWord;

        page.elements.fallArea.appendChild(wordSpan)

        wordSpan.animate([
            {bottom: '2.5em'},
            {bottom: '-1.5em'}

        ], {duration: 250, fill: 'forwards'})

    }
})

let canSend = false
page.elements.sendButton.addEventListener('click', () =>{
    for(input of page.elements.inputs){
        index = Array.from(page.elements.inputs).findIndex(item => item === input)

        if(input.value == ''){
            page.elements.inputAlert[index].innerHTML = 'Este campo não pode ficar vazio!'
            canSend = false

        }else{
            page.elements.inputAlert[index].innerHTML = ''
            canSend = true
        }
    }

    if(canSend){
        openPopup(
            page.elements.popup.content
        )
    }
})

page.elements.popup.close.addEventListener('click', () =>{
    closePopup(
        page.elements.popup.content
    )
})

function checkWidth(measure, input){

    measure.style.font = input.style.font;
    measure.style.padding = input.style.padding;
    measure.style.border = input.style.border;

    measure.textContent = input.value;
    
    const textWidth = measure.offsetWidth - 24;
    const inputWidth = input.offsetWidth;

    transpassing = false;
    if(textWidth > inputWidth){
        transpassing = true
    }

    return transpassing;
}



function openPopup(popupContent){
    popupContent.style.display = 'flex'
}
function closePopup(popupContent){
    popupContent.style.display = 'none'
}


