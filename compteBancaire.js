class compteBancaire {
    constructor(nom, solde) {
        this.nom = nom;
        this.solde = solde;
    }
    crediter(montant) {
        this.solde += montant;
    }
    decrire() {
        return `${this.nom} a un solde de ${this.solde} euros`;
    }
}