import { Questions } from "./Questions.js"
import { renderizeQuestions } from "./renderizeQuestions.js"

const links = [
    {
        name: 'Modelagem e Gerenciamento Ágil de Sistemas',
        acronym: 'MGAS'
    },
    {
        name: 'Estratégia Digital e Web Analytics',
        acronym: 'EDWA'
    }
]

const listLinks = document.getElementById('listLinks')

async function handleQuestions(e) {
    const acronym = e.target.id
    const questions = new Questions(acronym)

    questions.loadQuestions().then(data => {
        let observer = questions.answer;
        renderizeQuestions(data, questions, acronym)
        setInterval(()=>{
            if(observer != questions.answer) renderizeQuestions(data, questions, acronym);
        }, 1000)
    })
}

function renderizeLinks(links) {
    links.forEach(link => {
        const newLink = document.createElement('button');
        newLink.id = link.acronym
        newLink.innerText = link.name
        newLink.onclick = handleQuestions
        listLinks.appendChild(newLink)
    })
}

renderizeLinks(links)
