console.log('alguma coisa');

//. Escreva    um    programa    para    ler    3    valores    inteiros    e    escrever    o    maior    deles.
//Considere    que    o    usuário    não    informará    valores iguais.

x = 11;
y = 10;
z = 10;

if (x > y && x > z) {
  console.log('x é o maior');
} else if (y > x && y > z) {
  console.log('y é o maior');
} else if (z > x && z > y) {
  console.log('z é o maior');
} else {
  console.log('todos são iguais');
}
