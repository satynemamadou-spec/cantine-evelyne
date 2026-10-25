// 2 - Déclaration des données de la commande
let client = "Awa";
let codeplat = 1;
let Quantité = "3";
let montantversé = 5000;

// conversion
Quantité = Number(Quantité);
console.log(`Client:${client}, codeplat:${codeplat}, Quantité:${Quantité}, montantversé:${montantversé}`);

// 3 - Le montant de la commande
function calculerTotal(prixUnitaire, quantité) {
    return prixUnitaire * quantité;
}

let prixunitaire = 0;

if (codeplat >= 1 && codeplat <= 3 && Quantité > 0) {
    switch (codeplat) {
        case 1:
            prixunitaire = 1500;
            console.log(`le prix est ${prixunitaire}`);
            break;
        case 2:
            prixunitaire = 2000;
            console.log(`le prix est ${prixunitaire}`);
            break;
        case 3:
            prixunitaire = 1000;
            console.log(`le prix unitaire est ${prixunitaire}`);
            break;
        default:
            console.log(`erreur, aucun plat ne correspond`);
            break;
    }

    let typeplat;
    if (codeplat === 1) {
        typeplat = `attieke poisson`;
    } else if (codeplat === 2) {
        typeplat = `riz-poulet`;
    } else {
        typeplat = `alloco-oeuf`;
    }

    let montantfinal = calculerTotal(prixunitaire, Quantité);
    for (let a = 1; a <= Quantité; a++) {
        console.log(`portion ${a} : ${typeplat} - ${prixunitaire} FCFA`);
    }

    console.log(`chère client, ${client} le montant total à payé est ${montantfinal} FCFA`);

    if (montantversé > montantfinal) {
        let reste = montantversé - montantfinal;
        console.log(`votre monnaie est ${reste}`);
    } else {
        let apayer = montantfinal - montantversé;
        console.log(`vous devez payer ${apayer}`);
    }
} else {
    console.log(`choississez un code plat valide entre 1 et 3 et une quantité strictement positive`);
}