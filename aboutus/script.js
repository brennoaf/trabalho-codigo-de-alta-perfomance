page = {
    elements: {
        cards: document.querySelectorAll('.card'),
        previousCard: document.getElementById('previous-button'),
        nextCard: document.getElementById('next-button'),

        presentationImage: document.getElementById('presentation-img'),
        presentationDescription: document.getElementById('presentation-txt'),

        presentationGithub: document.querySelector('.presentation-github'),
        presentationLinkedin: document.querySelector('.presentation-linkedin'),

        leftCard: document.querySelector('.left'),
        rightCard: document.querySelector('.right'),

        song: {
            audio: document.getElementById("audio"),
            playPauseBtn: document.getElementById("playpause-btn"),
            seekBar: document.getElementById("seek-bar"),
            currentTime: document.getElementById("current-time"),
            duration: document.getElementById("duration")

        },

        link:{
            songLink: document.querySelectorAll('.card-song'),
            githubLink: document.querySelectorAll('.card-github'),
            linkedinLink: document.querySelectorAll('.card-linkedin')

        }
    }
}


toggleCards = Array.from(page.elements.cards)
positions = ['left', 'main', 'right', 'none', 'none']

window.onload = () =>{
    changePresentation(
        page.elements.presentationImage, 
        page.elements.presentationDescription.childNodes[1], 
        page.elements.presentationDescription.childNodes[3],
        page.elements.song.audio,
        page.elements.presentationGithub,
        page.elements.presentationLinkedin
    )

}

page.elements.previousCard.addEventListener('click', () =>{
    toPreviousCard(toggleCards, positions);
    mainCardAnimation(toggleCards, 2);
    changePresentation(
        page.elements.presentationImage, 
        page.elements.presentationDescription.childNodes[1], 
        page.elements.presentationDescription.childNodes[3],
        page.elements.song.audio,
        page.elements.presentationGithub,
        page.elements.presentationLinkedin
    )
    
})

page.elements.nextCard.addEventListener('click', () =>{
    mainCardAnimation(toggleCards, 0);
    toNextCard(toggleCards, positions);
    changePresentation(
        page.elements.presentationImage, 
        page.elements.presentationDescription.childNodes[1], 
        page.elements.presentationDescription.childNodes[3],
        page.elements.song.audio,
        page.elements.presentationGithub,
        page.elements.presentationLinkedin
    )

})


///////////////////////////////////////  DE AUDIO  //////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////

page.elements.song.playPauseBtn.addEventListener("click", function() {
    if (page.elements.song.audio.paused) {
        page.elements.song.audio.play();
        page.elements.song.playPauseBtn.textContent = "❚❚";
    } else {
        page.elements.song.audio.pause();
        page.elements.song.playPauseBtn.textContent = "▶";
    }
});

page.elements.song.audio.addEventListener("timeupdate", function() {
    const value = (100 / page.elements.song.audio.duration) * page.elements.song.audio.currentTime;
    page.elements.song.seekBar.value = value;
    page.elements.song.currentTime.textContent = formatTime(page.elements.song.audio.currentTime);
});

page.elements.song.audio.addEventListener("loadedmetadata", function() {
    page.elements.song.duration.textContent = formatTime(page.elements.song.audio.duration);
});

page.elements.song.seekBar.addEventListener("input", function() {
    const time = (page.elements.song.seekBar.value / 100) * page.elements.song.audio.duration;
    page.elements.song.audio.currentTime = time;
});

//////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////// DE AUDIO  ///////////////////////////////////


function toPreviousCard(cardsArray, cardsPosition){
    for(let i=0;i<cardsArray.length;i++){
        if(i == (cardsArray.length-1)){
            cardsArray[i].classList.remove(cardsPosition[i])
            cardsArray[i].classList.add(cardsPosition[0])

        }else{
            cardsArray[i].classList.remove(cardsPosition[i])
            cardsArray[i].classList.add(cardsPosition[i+1])
        }
    
    }
    remover = cardsArray.pop()
    cardsArray.unshift(remover)
}

function toNextCard(cardsArray, cardsPosition){
    for(let i=0; i<cardsArray.length;i++){
        if(i==0){
            cardsArray[i].classList.remove(cardsPosition[i])
            cardsArray[i].classList.add(cardsPosition[4])
        }

        else{
            cardsArray[i].classList.remove(cardsPosition[i])
            cardsArray[i].classList.add(cardsPosition[i-1])
        }
    
    }
    let remover = cardsArray.shift()
    cardsArray.push(remover)
}

//Da pra melhorar essas funções, facilitando todas em 1 só


function changePresentation(img, title, description, audio, github, linkedin){
    mainCard = document.querySelectorAll('.main')[0]
    img.src = mainCard.childNodes[1].childNodes[1].src

    title.innerHTML = mainCard.childNodes[3].childNodes[1].textContent
    description.innerHTML = mainCard.childNodes[3].childNodes[11].textContent

    audio.src = mainCard.childNodes[3].childNodes[13].textContent
    github.href = mainCard.childNodes[3].childNodes[15].textContent
    linkedin.href = mainCard.childNodes[3].childNodes[17].textContent

}

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    seconds = Math.floor(seconds % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

}

function mainCardAnimation(cardsArray, n){
    cardsArray[1].style.transform = 'scale(0.8)'

    setTimeout(() => {
        cardsArray[1].style.transform = ''
    }, 300);

}



