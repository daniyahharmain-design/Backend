
const { Command } = require('commander');

const program = new Command();

program
  .version('0.1.0')
  .description('Username and password login')
  .argument('<username>', 'username to login')
  .argument('[password]', 'password for the user')
  .action((username, password) => {
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
  });

program.parse(process.argv);
