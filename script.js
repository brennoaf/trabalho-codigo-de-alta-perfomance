page = {
    elements:{
        circle: {
            jsLogo: document.getElementById('circle-item1'), //js
            htmlLogo: document.getElementById('circle-item2'), //html
            cssLogo: document.getElementById('circle-item3'), //css
        },

        miner: {
            resetGame: document.querySelector('.reset-game'),
            gameChoice: document.querySelector('.game-choice')
        },

        pageContent: document.querySelector('.page-content'),
        followupImage: document.getElementById('follow-img'),
        textKnowledge: document.getElementById('text-knowledge'),
        titleKnowledge: document.getElementById('title-knowledge'),

        navigationBar: document.querySelector('header'),
        light: document.getElementById('move'),
        shadow: document.getElementById('shadow'),
        switchHitbox: document.querySelector('.switch-hitbox'),
        switchContent: document.querySelector('.switch-content'),
        galleryContent: document.querySelector('.gallery-content'),

        footer: document.querySelector('footer'),

    }

}

knowledge = {
    html: {
        logo: 'assets/logos/html f.png',
        title: 'HTML',
        text: `HTML, ou Linguagem de Marcação de Hipertexto, é a espinha dorsal de qualquer página da web. 
        Ele fornece a estrutura básica do conteúdo, permitindo que os desenvolvedores definam elementos como 
        títulos, parágrafos, listas, links, imagens e muito mais. HTML usa "tags" para cercar 
        diferentes partes do conteúdo para que os navegadores possam entender e exibir essas informações corretamente.`
    },

    css: {
        logo: 'assets/logos/css f.png',
        title: 'CSS',
        text: `CSS, ou Folhas de Estilo em Cascata, é a linguagem usada para descrever a apresentação de um documento 
        escrito em HTML ou XML. Enquanto o HTML fornece a estrutura da página, o CSS é responsável por como essa 
        página será visualmente apresentada. Com CSS, você pode controlar a cor do texto, o estilo das fontes, 
        o espaçamento entre elementos, o layout da página e muito mais. CSS torna as páginas da web mais atraentes e 
        facilita a adaptação do design para diferentes tipos de dispositivos, como desktops, tablets e smartphones.`
    },

    js: {
        logo: 'assets/logos/js.png',
        title: 'JavaScript',
        text: `JavaScript é uma linguagem de programação que permite a criação de conteúdo dinâmico e interativo em 
        páginas da web. Diferente do HTML e do CSS, que são usados para estrutura e estilo, respectivamente, 
        o JavaScript é usado para controlar o comportamento da página. Com JavaScript, você pode criar 
        funcionalidades complexas como formulários interativos, animações, jogos e até mesmo aplicações web completas.`
    }
}

circulo = document.getElementById('circulo')

var circleArray = Object.values(page.elements.circle)
const circlePositions = ['120% -50%', '270% 270%', '-50% 270%']


const autoRotate = setInterval(() => {
        let togglePosition = circleArray.shift()
        circleArray.push(togglePosition)
        for(let i=0; i< circleArray.length; i++){

            circleArray[i].style.translate = circlePositions[i]

            if(circleArray[0] == page.elements.circle.jsLogo){
                changeInfo(knowledge.js.logo, page.elements.followupImage, page.elements.titleKnowledge, knowledge.js.title, page.elements.textKnowledge, knowledge.js.text)
            }
    
            if(circleArray[0] == page.elements.circle.htmlLogo){
                changeInfo(knowledge.html.logo, page.elements.followupImage, page.elements.titleKnowledge, knowledge.html.title, page.elements.textKnowledge, knowledge.html.text)
            }
    
            if(circleArray[0] == page.elements.circle.cssLogo){
                changeInfo(knowledge.css.logo, page.elements.followupImage, page.elements.titleKnowledge, knowledge.css.title, page.elements.textKnowledge, knowledge.css.text)
            }
        }
    }, 5000)



for(let i=0; i<circleArray.length;i++){
    Object.values(page.elements.circle)[i].addEventListener('click', () =>{
        userSelectCircle(Object.values(page.elements.circle)[i], circleArray)

        if(circleArray[0] == page.elements.circle.jsLogo){
            changeInfo(knowledge.js.logo, page.elements.followupImage, page.elements.titleKnowledge, knowledge.js.title, page.elements.textKnowledge, knowledge.js.text)
        }

        if(circleArray[0] == page.elements.circle.htmlLogo){
            changeInfo(knowledge.html.logo, page.elements.followupImage, page.elements.titleKnowledge, knowledge.html.title, page.elements.textKnowledge, knowledge.html.text)
        }

        if(circleArray[0] == page.elements.circle.cssLogo){
            changeInfo(knowledge.css.logo, page.elements.followupImage, page.elements.titleKnowledge, knowledge.css.title, page.elements.textKnowledge, knowledge.css.text)
        }
    })

    Object.values(page.elements.circle)[i].addEventListener('click', () =>{

    })
}


function userSelectCircle(i, array){
    clearInterval(autoRotate)

    indice = array.indexOf(i)
    fixPosition = array.splice(indice, 1)
    circleArray.unshift(fixPosition[0]);

    for(let a=0;a<circleArray.length;a++){
        circleArray[a].style.translate = circlePositions[a]
    }
}

function changeInfo(changeLogo, followUp, title, newTitle, text, newText){
    followUp.src = changeLogo
    title.innerHTML = newTitle
    text.innerHTML = newText
}



let radius = 50;
document.body.onpointermove = event => {
    const { clientX, clientY } = event;

    shadowPresset = `
        radial-gradient(circle at ${clientX - 80}px ${clientY - 140}px, 
        transparent 0%, 
        transparent ${radius * 0.7}px, 
        rgba(0, 0, 0, 0.5) ${radius}px, 
        rgba(0, 0, 0, 1) ${radius * 1.5}px)
    `;

    page.elements.light.animate({
        left: `${clientX}px`,
        top: `${clientY}px`
    
    }, {fill: "forwards"})
    
    shadow.style.background = shadowPresset;

}

page.elements.navigationBar.addEventListener('mouseover', () => {
    page.elements.light.style.display = 'none'
    radius = 0;
})


page.elements.switchHitbox.addEventListener('mouseover', () => {
    page.elements.light.style.display = 'none'
    radius = 0;
})

page.elements.shadow.addEventListener('mouseover', () => {
    page.elements.light.style.display = 'initial'
    radius = 50;
})

page.elements.switchHitbox.addEventListener('click', () =>{
    page.elements.pageContent.style.display = 'initial';
    document.body.style.overflow = 'initial';
    page.elements.shadow.style.display = 'none';
    page.elements.switchContent.style.display = 'none';
    page.elements.light.style.display = 'none';
    page.elements.galleryContent.style.display = 'none';
    document.body.style.cursor = 'initial';
    page.elements.footer.style.display = 'initial';

})

page.elements.miner.resetGame.addEventListener('click', () =>{
    page.elements.miner.gameChoice.innerHTML = ''
    page.elements.miner.resetGame.innerHTML = '😎'
})

page.elements.miner.gameChoice.addEventListener('click', () =>{
    page.elements.miner.gameChoice.innerHTML = '💣'
    page.elements.miner.resetGame.innerHTML = '😵'
})
