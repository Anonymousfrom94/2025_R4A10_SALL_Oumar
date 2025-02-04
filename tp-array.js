
// Pour ce fichier, toutes les questions à partir de Q1 nécessitent d'appeler cette fonction pour récupérer sa valeur
function getArray() {
  return [12, 7, 6, 15, 41, 24, 13];
}

module.exports = {
  // Renvoyer la valeur true depuis la fonction
  Q0() {
    return true;
  },

  //1) Récupérer le tableau depuis getArray() et renvoyer un nouveau tableau ne contenant que les valeurs supérieures ou égales à 15 
  // en utilisant une méthode de tableau
  Q1() {
    // Implémentation ici
    tab = getArray();
    newTab = [];

    for(i = 0; i < tab.length; i++){
      if(tab[i] >= 15){
        newTab.push(tab[i]);
      }
    }
    return newTab;
  },

  //2) Renvoyer l'index de la première valeur strictement inférieure à 7
  Q2() {
    // Implémentation ici
    tab = getArray();
    for(i = 0; i < tab.length; i++){
      if(tab[i] < 7){
        return i;
      }
    }
    return -1;
  },

  //3) Inverser le tableau en utilisant une méthode spécifiquement prévue à cet effet. Renvoyez ce tableau inversé
  Q3() {
    // Implémentation ici
    tab = getArray();
    return tab.reverse();
  },

  //4) Trier le tableau dans l'ordre croissant, renvoyez le tableau trié
  Q4() {
    // Implémentation ici
    let tab = getArray();
    tab.sort((a, b) => a - b);
    return tab;
  },

  //5) Ajouter la valeur 0 en premier index du tableau, renvoyez le tableau modifié
  Q5() {
    // Implémentation ici
    tab = getArray();
    tab.unshift(0);
    return tab;
  },

  //6) Faire la somme des éléments du tableau avec une boucle for. Renvoyez la somme
  Q6() {
    // Implémentation ici
    tab = getArray();
    somme = 0;
    for(i = 0; i < tab.length; i++){
      somme += tab[i];
    }
    return somme;
  },

  //7) Faire la somme des éléments du tableau avec une méthode spécifique de tableau (reduce), renvoyez la somme
  Q7() {
    // Implémentation ici
    tab = getArray();
    somme = tab.reduce((acc, num) => acc + num, 0);
    return somme;
  },

  //8) Remplacer la troisième valeur du tableau par "ici", renvoyez le tableau
  Q8() {
    // Implémentation ici
    tab = getArray();
    tab[2] = "ici";
    return tab;
  },

  //9) Retirer le dernier index, renvoyez le tableau
  Q9() {
    // Implémentation ici
    tab = getArray();
    tab.pop();
    return tab;
  },

  //10) Renvoyez le type de la variable ARRAY
  Q10() {
    // Implémentation ici
    //TODO
    tab = getArray();
    return typeof(tab);
  },

  //11) En utilisant une méthode spécifique aux tableaux, renvoyer un booléen vérifiant que le résultat de getArray() est bien un tableau
  Q11() {
    // Implémentation ici
    tab = getArray();
    return Array.isArray(tab);
  },

  //12) Renvoyer le tableau sous forme de chaîne de caractère où les éléments sont séparés par un tiret (-)
  Q12() {
    // Implémentation ici
    tab = getArray();
    tab = tab.join('-');
    return tab;
  },

  //13) Renvoyer le tableau en gardant uniquement les 2 derniers éléments
  Q13() {
    // Implémentation ici
    tab = getArray();
    newTab = [];
    newTab.push(tab.at(tab.length - 2));
    newTab.push(tab.at(tab.length - 1));
    return newTab;
  }
};
