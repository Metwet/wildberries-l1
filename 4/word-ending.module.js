class WordEnding {

  setWordEnding(count, words) {
    let wordEnding = '';
    if (count === 1 || (count % 10 === 1 && count % 100 !== 11)) {
      wordEnding = words[0];
    } 
    else if ((count >= 2 && count <= 4) || (count % 10 >= 2 && count % 10 <= 4 && count % 100 !== 12 && count % 100 !== 13 && count % 100 !== 14)) {
      wordEnding = words[1];
    }
    else {
      wordEnding = words[2];
    }

    return `${count} ${wordEnding}`;
  }
}
