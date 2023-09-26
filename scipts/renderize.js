function createNameToRadio(name) {
    return name.substring(0, 9).replace(/\s/g, "-");
}

function getAcronym(str) {
    const words = str.split(' ');
    const firstLetters = words.map(palavra => palavra.charAt(0));
    return firstLetters.join('');
}

export function renderizeQuestions(json, answer) {
    const questionsForm = document.getElementById('questionsForm');

    for (let theme in json) { // read questionary theme
        const currentTheme = json[theme];

        const themeArea = document.createElement('div');
        themeArea.innerHTML = `<h3>${theme}</h3>`;

        for (let question in currentTheme) { // read questions
            const currentQuestion = currentTheme[question];
            themeArea.innerHTML += `<p>${currentQuestion.pergunta}</p>`;

            for (let option in currentQuestion.opcoes) { // read question options
                themeArea.innerHTML += `<label>
                                            <input type="radio" name=${createNameToRadio(currentQuestion.pergunta) + getAcronym(theme)} id=${option}></input>
                                            <span>${currentQuestion.opcoes[option]}</span>
                                        </label>`;
            }

            answer ?
                themeArea.innerHTML += `<p class="answer">Resposta: ${currentQuestion.resposta}</p>`
                : ''
        }

        questionsForm.appendChild(themeArea);
    }

}