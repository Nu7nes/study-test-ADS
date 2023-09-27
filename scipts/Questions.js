import { createNameToRadio, getAcronym } from "./formatation.js";

export class Questions {
    constructor(acronym) {
        this.acronym = acronym;
        this.path = `./data/${acronym}/questions.json`;
        this.answer = false
    }

    async loadQuestions() {
        console.log(this.path)
        try {
            const response = await fetch(this.path);
            const data = await response.json();
            return data;
        } catch (error) {
            console.error(error);
        }
    }

    changeAnswer() {
        this.answer = !this.answer;
    }

    async getAnswers() {
        const values = [];
        const object = await this.loadQuestions()

        for (const item in object) {
            const selected = object[item]
            for (const key in selected) {
                const newObject = {
                    code: createNameToRadio(selected[key].pergunta) + '_' + getAcronym(item),
                    response: selected[key].resposta
                }
                values.push(newObject);
            }
        }
        return values;
    }
}



