var isSquare = function(n){
    if(n > 0){
      //n > 0
      var teste = Math. sqrt(n)
      if(Number.isInteger(teste)){
            return true;
        }
      return false;
    } 
    if(n == 0){
      return true;
    }
    return false; // fix me
}