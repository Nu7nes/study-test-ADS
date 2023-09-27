import { renderizeResult } from "./renderizeResult.js";

export function validateLenght(listSelections, answers) {
    if (listSelections.length !== answers.length) {
        throw new Error('Preencha todas as respostas.');
    };
};

export async function getResultTest(listSelections, questions) {
    let points = 0;
    const answers = await questions.getAnswers()

    listSelections.forEach(item => {
        const currentAnswerToCheck = item.parentElement.innerText.trim();

        answers.forEach(answer => {
            if (item.name === answer.code) {
                if (currentAnswerToCheck === answer.response) {
                    points += 1;
                };
            };
        });
    });
    renderizeResult(points, answers.length, questions)
};