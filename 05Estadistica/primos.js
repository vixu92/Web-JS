var c = 100;
var j = 2;
var primos = [];

for (j = 2; j < c; j++) {

  if (primo(j)) {
    primos.push(j);
  }
}

console.log(primos);

function primo(numero) {

  for (var i = 2; i < numero; i++) {

    if (numero % i === 0) {
      return false;
    }
  }
  return numero !== 1;
}
