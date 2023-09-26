export class Questions {
    constructor(acronym) {
        this.acronym = acronym;
        this.path = `../data/${acronym}/questions.json`;
        this.answer = true
    }

    async loadQuestions() {
        try {
            const response = await fetch(this.path);
            const data = await response.json();
            return data;
        } catch (error) {
            console.error(error);
        }
    }

    changeAnswer() {
        this.answer = !this.answer
        console.log(this.answer);
    }
}



