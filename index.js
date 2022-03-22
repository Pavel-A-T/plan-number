const readLine = require('readline');
const game = readLine.createInterface(
    {
        input: process.stdin,
        output: process.stdout
    }
);

console.log("Загадано число в диапазоне от 0 до 100.");
const random = Math.floor(Math.random() * 100) + 1;
const start = () => {
    game.question( "Ваше число: ", (data)=> {
        if (random == data) {
            console.log("Отгадано число " + random);
            game.close();
        }
        else if (Number(data) < random) {
            console.log("Больше\n");
            start();
        }
        else {
            console.log("Меньше\n");
            start();
        }
    })
}
    
start();

