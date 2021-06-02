const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let result = "";
rl.question('What\'s your name? Nicknames are also acceptable :)  ', (answer1) => {
  rl.question('What\'s an activity you like doing?  ', (answer2) => {
    rl.question('What do you listen to while doing that?  ', (answer3) => {
      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.)  ', (answer4) => {
        rl.question('What\'s your favourite thing to eat for that meal?  ', (answer5) => {
          rl.question('Which sport is your absolute favourite?  ', (answer6) => {
            rl.question('What is your superpower? In a few words, tell us what you are amazing at!  ', (answer7) => {
              console.log(`This is what you entered: 1) ${answer1}; 2) ${answer2};3) ${answer3};4) ${answer4};5) ${answer5};6) ${answer6}; 7)${answer7}`);
              rl.close();
            });
          });
        });
      });
    });
  });
});