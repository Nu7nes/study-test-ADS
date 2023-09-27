function newTry() {
    location.reload();
}

function seeAnswers(questions) {
    let modalToRemove = document.getElementById('resultModalID');
    modalToRemove.remove()
    questions.changeAnswer();
}

export function renderizeResult(points, length, questions) {
    const body = document.getElementsByTagName('body')[0];

    const modal = document.createElement('div');
    modal.id = 'resultModalID'
    modal.className = 'resultModal';
    modal.innerHTML = `<p>Voce acertou:</p>
                        <h3>${points}/${length}</h3>`;

    const div = document.createElement('div')
    const newTryButton = document.createElement('button');
    newTryButton.innerText = 'REPETIR';
    newTryButton.onclick = newTry;

    const seeAnswersButton = document.createElement('button');
    seeAnswersButton.innerText = 'VER RESPOSTAS';
    seeAnswersButton.onclick = () => { seeAnswers(questions) };


    body.appendChild(modal);
    modal.appendChild(div);
    div.appendChild(newTryButton);
    div.appendChild(seeAnswersButton);

}

