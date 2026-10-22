
// const { Command } = require('commander');

// const program = new Command();

// program
//   .version('0.1.0')
//   .description('Username and password login')
//   .argument('<username>', 'username to login')
//   .argument('[password]', 'password for the user')
//   .action((username, password) => {
//     const correctUsername = 'alice';
//     const correctPassword = 'secret123';

//     if (
//       username === correctUsername &&
//       password === correctPassword
//     ) {
//       console.log('Login successful!');
//     } else {
//       console.log('Invalid username or password');
//     }
//   });

// program.parse(process.argv);



const { Command } = require('commander');
const readline = require('readline');

const program = new Command();

program
  .version('0.1.0')
  .description('Dynamic Username and Password Login')
  .action(async () => {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });

    const ask = (question) =>
      new Promise((resolve) => {
        rl.question(question, resolve);
      });

    const username = await ask('Enter username: ');
    const password = await ask('Enter password: ');

    const correctUsername = 'alice';
    const correctPassword = 'secret123';

    if (
      username === correctUsername &&
      password === correctPassword
    ) {
      console.log('Login successful!');
    } else {
      console.log('Invalid username or password');
    }

    rl.close();
  });

program.parse(process.argv);
