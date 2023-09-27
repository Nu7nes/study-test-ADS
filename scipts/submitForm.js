
import { getResultTest, validateLenght } from "./validations.js";


export async function handleSubmitForm(questions) {
    const listSelections = document.querySelectorAll('input[type="radio"]:checked')
    // console.log(listSelections);

    // console.log(answers);

    try {
        // validateLenght(listSelections, answers)
        getResultTest(listSelections, questions)
    } catch (error) {
        console.log(error)
    }

}
