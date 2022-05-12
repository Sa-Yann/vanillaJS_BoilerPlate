// console.log('    ')

// client rentre un chiffre en 1 et 100
// on doit lui rendre la ce chiffre en piece 2 billets de 5 et billets de 10
// en utiisant toujours les montants les plus hauts possible()le moins de billets et pieces possible)

//les cas qui ne foonctionnent pas :
    // - 1 et 3 
    // - et tous les cas ou apres avoir rendu les billets de 10 et/ou 5 
    // il ne reste que 1€ a rendre


// dans l odre de priorité  


// si le nombre est 1 ou 3 renvoyé une erreur
// faut q j sache is le nombre rentre est divisble par 10 si oui
// faut q j sache is le nombre rentre est divisble par 5 
// faut q j sache is le nombre rentre est divisble par 2

// console.log(  38 %  6 )

function money(montant) {
    
    // on elimine ts les cas qui ne peuvent pas etre traiter dans la condition if(montant > 4){}
    if (montant === 1 || montant === 3 || montant%10 === 1) {
        console.log(`le montant inséré ne peut pas etre rendu avec les valeurs billets et pieces que nous possedons et le schéma de priorité de rendu de billets et de pièces établi`); 
    }
    else if (montant === 2) {
        console.log('nbDeBillet10: ', 0)
        console.log('nbDeBillet5: ', 0)
        console.log('nbDeBillet_2: ', 1)
    }
    else if (montant === 4) {
        console.log('nbDeBillet10: ', 0)
        console.log('nbDeBillet5: ', 0)
        console.log('nbDeBillet_2: ', 2)
    }
    else if(montant > 4) {
        // nombre compris en 5 et 90
        // quel montant reste t il une fois que j ai retire le plus de fois possible 10 du montant
       const modulo10 = montant % 10;
        // quel est le montant divisible par 10
       const montantDivisiblePar10 = montant - modulo10;
        // combien de billets me faut il pour generer le montant divisible par 10  
       const nbDeBillet10 = montantDivisiblePar10 / 10
        //  log le nombre de billet de 10
       console.log('nbDeBillet10: ', nbDeBillet10)
        //  a ce point j ai modulo10  un chiffre en 9 et 0
        // si le nombre est superieur ou egal a 5 je dois le modulo 5 pour log le nombre de billet necessaire a donner 
        // sachant que ce numero cera obligatoirement 1
        if (modulo10>=2 && modulo10 !==3) {
            // console.log('nbDeBillet5: ', 1)
            // on veut connnaitre le nombre de pieces de 2 qu on peut diviser du reste 
            const modulo5 = modulo10 % 5;
            const montantDivisiblePar5 = modulo10 - modulo5;
            const nbDeBillet5 = montantDivisiblePar5 / 5
            console.log('nbDeBillet5: ', nbDeBillet5)
        //  log le nombre de billet de 10
            // modulo5 est obligatoirement compris entre 4 et 0
            // si modulo5 est paire et alors on calcul le nombre de piece de 2 a rendre 
            const rest_a_ModulerPar2__ouPas = montant-(montantDivisiblePar10 + montantDivisiblePar5);
            // si rest_a_ModulerPar2__ouPas est egale a 1 : impossible de rendre la monnaie 
            // sachant qu on donne obligatoirement le max de billets de 10 
            // puis le max de billets de 5 qui ne peut etre que 1 
            // et du coup tout montant restant egal a 1 pause un cas non resovable 
            console.log("rest_a_ModulerPar2__ouPas: ", rest_a_ModulerPar2__ouPas)
            if(modulo5%2==0 && rest_a_ModulerPar2__ouPas > 1) {
                const montantDivisiblePar2 = modulo5 / 2
                console.log('nbDePiecesDe2: ', montantDivisiblePar2)
            } else if(rest_a_ModulerPar2__ouPas === 1 || modulo5 === 3) {
               console.log(`le montant inséré ne peut pas etre rendu avec les valeurs billets et pieces que nous possedons et le schéma de priorité de rendu de billets et de pièces établi`); 
            }
        }

    }
    return console.log(`le résultat ci dessus à été calculé par rapport à un montant de ${montant}€`)
}
// money(7);
// On loupe de 1 à 100 pour afficher tous les résultats en fonction 
// de montant inserés allant de 1€ à 100€
for(i=1; i <= 100; i++) {
        money(i);
        console.log('    ')
}

// nlapointe@swood.fr
