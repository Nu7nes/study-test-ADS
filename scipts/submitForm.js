
import { getResultTest, validateLenght } from "./validations.js";


export async function handleSubmitForm(questions) {
    const listSelections = document.querySelectorAll('input[type="radio"]:checked')
    try {
        // validateLenght(listSelections, questions)
        getResultTest(listSelections, questions)
    } catch (error) {
        console.log(error)
    }

}
