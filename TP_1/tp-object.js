const email = "test.test@email.com";

// Toutes les questions nécessitent d'aller récupérer l'objet depuis cette fonction
function getObject() {
  return {
    name: "Mon objet",
    description: "Un très bel objet JS",
    value: 7,
    isBestObject: false,
    address: {
      city: "Paris",
      zipCode: 75000,
    },
  };
}

module.exports = {
  // 1) Renvoyer la propriété description
  Q1() {
    // Implémentation ici
    objet = getObject();
    desc = objet["description"];
    return desc;
  },

  // 2) Renvoyer la propriété city
  Q2() {
    // Implémentation ici
    objet = getObject();
    address = objet["address"];
    city = address["city"];
    return city;
  },

  // 3) Renvoyer les clés de l'objet sous forme de tableau
  Q3() {
    // Implémentation ici
    objet = getObject();
    keyTable = Object.keys(objet);
    return keyTable; 
  },

  // 4) --- Supprimée ---

  // 5) Ajouter la propriété email à myObject et renvoyer l'objet modifié
  Q5() {
    // Implémentation ici
    objet = getObject();
    Object.defineProperties(objet, 'email', {value: "test.test@email.com"});
    return objet;
  },

  // 6) Ajouter une propriété dynamique étant le résultat de la concaténation des chaines hello et world et dont la valeur est true
  // renvoyer l'objet modifié
  Q6() {
    // Implémentation ici
  },

  // 7) Supprimer la propriété isBestObject et renvoyer l'objet
  Q7() {
    // Implémentation ici
  },

  // 8) Vérifier que la propriété description existe dans l'objet, renvoyer un booléen
  Q8() {
    // Implémentation ici
  },
};