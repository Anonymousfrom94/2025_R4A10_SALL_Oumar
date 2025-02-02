const email = "test.test@email.com";

module.exports = {
  // 1) Séparer l'email en deux parties au niveau du caractère '@', renvoyer le tableau correspondant
  Q1() {
    // Implémentation ici
    monEmail = email;
    tab = monEmail.split('@');
    return tab;
  },

  // 2) Vérifier qu'il n'y a qu'un seul caractère '@' dans email. Renvoyer un booléen
  Q2() {
    // Implémentation ici
    monEmail = email;
    return monEmail.includes("@");
  },

  // 3) Renvoyer l'index du caractère '@'
  Q3() {
    // Implémentation ici
    monEmail = email;
    index = monEmail.indexOf("@");
    return index;
  },

  // 4) Renvoyer la sous-chaîne se situant après le caractère '@'
  Q4() {
    // Implémentation ici
    monEmail = email;
    tab = monEmail.split('@');
    return tab.at(1);
  },

  // 5) Renvoyer la variable en majuscule
  Q5() {
    // Implémentation ici
    monEmail = email;
    monEmail = monEmail.toUpperCase();
    return monEmail;
  },

  // 6) Renvoyer le type de la variable email
  Q6() {
    // Implémentation ici
    monEmail = email;
    return typeof(monEmail);
  },

  // 7) Changez email.com par gmail.com, renvoyez la chaine modifiée
  Q7() {
    // Implémentation ici
    monEmail = email;
    monEmail = monEmail.replace("email", "gmail");
    return monEmail;
  }
};