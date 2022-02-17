/** Textual markov chain generator */


class MarkovMachine {

  /** build markov machine; read in text.*/

  constructor(text) {
    let words = text.split(/[ \r\n]+/);
    this.words = words.filter(c => c !== "");
    this.makeChains();
    //Question: whiy not initialize this.chains here?
  }

  /** set markov chains:
   *
   *  for text of "the cat in the hat", chains will be
   *  {"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]} */

  makeChains() {
    let chains = new Map();

    for (let i = 0; i < this.words.length; i += 1) {
      let word = this.words[i];
      let nextWord = this.words[i + 1] || null;

      if (chains.has(word)) chains.get(word).push(nextWord);
      else chains.set(word, [nextWord]);
    }

    this.chains = chains;
  }


  /** Pick random choice from array */

  static choice(ar) {
    return ar[Math.floor(Math.random() * ar.length)];
  }


  /** return random text from chains */

  getText(numWords = 100) {
    // pick a random key to begin
    let keys = Array.from(this.chains.keys());
    console.log("keys from getText: ", keys);
    console.log("this.words from getText: ", this.words);
    let key = MarkovMachine.choice(keys);
    let out = [];

    // produce markov chain until reaching termination word
    while (out.length < numWords && key !== null) {
      const { word, nextKey } = this._getOneLink(key);
      out.push(word);
      key = nextKey;
    }

    return out.join(" ");
  }

  /** Get a single link: the next word & next key. */

  _getOneLink(key) {
    return {
      word: key,
      nextKey: MarkovMachine.choice(this.chains.get(key)),
    };
  }
}


module.exports = {
  MarkovMachine,
};
