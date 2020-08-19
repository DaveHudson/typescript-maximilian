let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'Max'

// Needs extra type check
// Any would allow without this check
if (typeof userInput === 'string') {
  userName = userInput;
}

function generateError(message: string, code: number): never {
  throw {message: message, errorCode: code};
}

generateError('An error occured', 500)