// b.DNA String Filter: - Create a function to process a DNA string(e.g., 'CTAGGGTA'). - The function should remove any non - canonical DNA bases(anything other than 'C', 'T', 'A', 'G'). - The function should be case sensitive(keep 'C' but remove 'c'). - If the DNA string is empty, return an empty string.

const dnaFilter = (dna) => {
    const bases = ['C', 'T', 'A', 'G'];

    if (dna.length === 0) {
        return "";
    }

    dna = dna.replace(/c/g, 'C')
        .replace(/t/g, 'T')
        .replace(/a/g, 'A')
        .replace(/g/g, 'G');
    let dnaArray = dna.split('');
    dnaArray = dnaArray.filter(base => bases.includes(base));

    return dnaArray.join('');
}

module.exports = dnaFilter;