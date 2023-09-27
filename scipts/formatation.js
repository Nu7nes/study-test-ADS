export function createNameToRadio(name) {
    return name.substring(0, 9).replace(/\s/g, "-");
}

export function getAcronym(str) {
    const words = str.split(' ');
    const firstLetters = words.map(palavra => palavra.charAt(0));
    return firstLetters.join('');
}