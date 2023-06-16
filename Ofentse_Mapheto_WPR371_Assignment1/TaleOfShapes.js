const readline = require('readline');

function drawTriangle(size, character) {
  for (let i = 1; i <= size; i++) {
    console.log(character.repeat(i));
  }
}
function drawSquare(size, character) {
  for (let i = 1; i <= size; i++) {
    console.log(character.repeat(size));
  }
}
function drawDiamond(size, character) {
  const middleIndex = Math.ceil(size / 2);

  for (let i = 1; i <= size; i++) {
    const spaces = Math.abs(middleIndex - i);
    const stars = size - 2 * spaces;
    console.log(' '.repeat(spaces) + character.repeat(stars));
  }
}


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.question('Select a shape: \n1. Triangle\n2. Square\n3. Diamond\n', shape => {

  rl.question('Enter the size of the shape: ', size => {
    size = parseInt(size);

    
    rl.question('Enter the character to draw the shape: ', character => {
      switch (shape) {
        case '1':
          drawTriangle(size, character);
          break;
        case '2':
          drawSquare(size, character);
          break;
        case '3':
          drawDiamond(size, character);
          break;
        default:
          console.log('Invalid shape selection.');
      }

    
      rl.close();
    });
  });
});