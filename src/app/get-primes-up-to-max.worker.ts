/// <reference lib="webworker" />

onmessage = function(event) {
  let max = parseInt(event.data);
  let primesList = [];

  for (let i = 2; i < max; i++) {
    if (_isPrime(i)) {
      primesList.push(i);
    }
  }
  
  postMessage(primesList);
}

function _isPrime(number: number): boolean {
  if ((number === 2 || number === 3)) {
    return true;
  }

  let i = 2;

  while (i <= (Math.sqrt(number))) {
    if (number % i === 0) {
      return false;
    }

    i++;
  }

  return true;
}