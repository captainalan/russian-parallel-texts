const filenames = [
    "text-001.json",
]

// Element where dynamic content will be inserted
const textContainer = document.getElementById("multilingual-text")

fetch(window.location + '/texts/' + filenames[0])
    .then(response => response.json())
    .then(data => {
        // console.log(data)
        displayParallelText(data, textContainer);
    });

function displayParallelText(text, elem) {
    // elem is the HTML element we insert dynamic text into
    // text is the JSON with the actual (multilingual) lines to write

    text.map(line => {
        // Container to hold all language lines
        const box = document.createElement("div");
        box.className = "verse";

        // Node for Russian
        const russian = document.createElement("div");
        russian.lang = "ru";
        const russianContent = document.createTextNode(line.ru);
        russian.appendChild(russianContent);
        box.appendChild(russian);

        // Node for English
        const english = document.createElement("div");
        english.lang = "en";
        const englishContent = document.createTextNode(line.en);
        english.appendChild(englishContent);
        box.appendChild(english);

        elem.appendChild(box);
    });
}