import { handleSubmitForm } from "./submitForm.js";
import { createNameToRadio, getAcronym } from "./formatation.js";

export function renderizeQuestions(json, questions, acronym) {
    console.log(json);
    const questionsForm = document.getElementById('questionsForm');
    questionsForm.innerHTML = ''

    for (let theme in json) { // read questionary theme
        const currentTheme = json[theme];

        const themeArea = document.createElement('div');
        themeArea.innerHTML = `<h3>${theme}</h3>`;

        for (let question in currentTheme) { // read questions
            console.log(currentTheme[question].pergunta);
            const currentQuestion = currentTheme[question];
            themeArea.innerHTML += `<p>${currentQuestion.pergunta}</p>`;

            for (let option in currentQuestion.opcoes) { // read question options
                themeArea.innerHTML += `<label>
                                            <input type="radio" name=${createNameToRadio(currentQuestion.pergunta) + '_' + getAcronym(theme)} id=${option}></input>
                                            <span>${currentQuestion.opcoes[option]}</span>
                                        </label>`;
            }
            questions.answer ?
                themeArea.innerHTML += `<p class="answer">Resposta: ${currentQuestion.resposta}</p>`
                : '';
        }
        questionsForm.appendChild(themeArea);
    }

    const submitBtn = document.createElement('button');
    submitBtn.id = acronym
    submitBtn.type = "button";
    submitBtn.innerText = 'Terminar'
    submitBtn.onclick = () => { handleSubmitForm( questions) };
    questionsForm.appendChild(submitBtn);
}