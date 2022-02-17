// Overall Summary: 
// converting Markov machine from back-end to front-end
// 1. tried to maintain the same separation of concerns but got 
// errors about not being able to use require
// 2. then tried using an import but you can't use import without a module 
// type in your scripts tags
// 3. Tried the module type to reference the individual script tags and got a CORS error
// 4. Webpack can be used to bundle js files 


//FIXME: COuld use webpack to bundle things together or could just have everything in one js file.

//Psuedocode
//  1. get button
// 2. attach onClick event to it
// 3. take form response for seed text into the handle click function
// 4. in that function pass into markov function
// 5. set set markov function equal to response

// 6. paste response to DOM
// import require from requirejs;

const $seedForm = $("#seed-form");
const $seedTitle = $("#seed-title");
const $seedText = $("#seed-text");
const markovOutput = $("#markov-output");

class MarkovMachine {

    /** build markov machine; read in text.*/

    constructor(text) {
        this.words = text.split(/[ \r\n]+/);
        this.chains = new Map();
        // MORE CODE HERE
        // this.words = this.words.bind(this)
    }

    /** set markov chains:
     *
     *  for text of "the cat in the hat", chains will be
     *  {"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]} */

    makeChains() {

        for (let i = 0; i < this.words.length; i++) {

            if (!this.chains.has(this.words[i])) {
                this.chains.set(this.words[i], []);
            }

            let nextWord = this.words[i + 1] || null;
            let currWord = this.chains.get(this.words[i]);
            currWord.push(nextWord);
        }
        // console.log("this.chains:", this.chains);
        return this.chains;
    }

    /** return random text from chains */

    getText(numWords = 100) {
        // generate random index
        // use that to select a random word

        //while randomWord 
        // follow the chains based on that random start
        // stop after the numWords has been reached
        let finalSentence = [];
        let randomWord = MarkovMachine.findRandomWord(this.words);

        while (randomWord !== null && finalSentence.length <= numWords) {
            //add random word to the final string
            finalSentence.push(randomWord);
            //reset random word
            randomWord = MarkovMachine.findRandomWord(this.chains.get(randomWord));
        }

        let finalString = finalSentence.join(" ") + ".";
        console.log("final string: ", finalString);
        return finalString;
    }

    static findRandomWord(words) {
        let randomIndex = Math.floor(Math.random() * words.length);
        return words[randomIndex];
    }
}
let firstOutput = true;

function handleSeedSubmit(evt) {
    evt.preventDefault();

    const seedText = $seedText.val();
    const seedTitle = $seedTitle.val();

    const markovMachine = new MarkovMachine(seedText);
    markovMachine.makeChains()
    const randomText = markovMachine.getText(50);
    console.log(randomText);
    
    if (firstOutput) {
        markovOutput.append(`<h3 m-3>${seedTitle} Random Text</h3>`);
        firstOutput = false;
    }
    markovOutput.append(`
        <div class="card m-3">
            <div class="card-body">
                <p>${randomText}</p>
            </div>
        </div>`
    );
};

$seedForm.on("submit", handleSeedSubmit);