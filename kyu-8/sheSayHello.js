function validateHello(greetings) {
    const cumprimentos = {
      english: ['hello', 'hi'],
      italian: ['ciao', 'salve'],
      french: ['salut', 'bonjour'],
      german: ['hallo', 'guten tag'],
      spanish: ['hola'],
      'czech republic': ['ahoj'],
      polish: ['czesc']
    };
  
    const sentencaLowercase = greetings.toLowerCase();
  
    for (let idioma in cumprimentos) {
      const palavrasEquivalentes = cumprimentos[idioma];
      const encontrada = palavrasEquivalentes.some(palavra =>
        sentencaLowercase.includes(palavra)
      );
      
      if (encontrada) {
        return true;
      }
    }
  
    return false;
}