function totalLicks(env) {
    let slickTeste = 252
    if(Object.keys(env).length === 0){
        return `It took ${slickTeste} licks to get to the tootsie roll center of a tootsie pop.`;
    }
        
    for(chave in env) {
        slickTeste += env[chave]
        // console.log(`AQUI IMPRIMI ENV: `, Object.keys(env))
    }
        
    let teste = Object.keys(env)
    
    for(eys in teste){
        // console.log(teste[eys])
        if(teste.includes("Something Bad" || "somethins bad")){
            return `It took ${slickTeste} licks to get to the tootsie roll center of a tootsie pop. The toughest challenge was Something Bad.`;
        }
        if(teste.includes("evil wizards" || "Evil Wizards")){
            return `It took ${slickTeste} licks to get to the tootsie roll center of a tootsie pop. The toughest challenge was evil wizards.`
        }
        if(teste.includes("freezing temps" || "Freezing Temps")){
            return `It took ${slickTeste} licks to get to the tootsie roll center of a tootsie pop. The toughest challenge was freezing temps.`
        }
        if(slickTeste > 252){
            return `It took ${slickTeste} licks to get to the tootsie roll center of a tootsie pop.`;
        }
        if(slickTeste < 252){
            return `It took ${slickTeste} licks to get to the tootsie roll center of a tootsie pop.`;
        }
        if(slickTeste == 252){
            return `It took ${slickTeste} licks to get to the tootsie roll center of a tootsie pop.`;
        }
    }

}


console.log(totalLicks({"white magic": -250}))