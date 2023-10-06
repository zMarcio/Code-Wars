function findEvenIndex(arr) {
    const somaTotal = arr.reduce((soma, elemento) => soma + elemento, 0);
    var somaEsquerda = 0;
  
    for (var i = 0; i < arr.length; i++) {
      if (somaEsquerda === somaTotal - somaEsquerda - arr[i]) {
        return i;
      }
      somaEsquerda += arr[i];
    }
  
    return -1;
}