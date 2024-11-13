function capitalizeWords(sentence) {
    return sentence
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }
let x = capitalizeWords ("bonjour roua zeiri")
console.log(x);
 
