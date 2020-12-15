import { Component } from '@angular/core';

//declarer une classe pour Produit
class Produit {
  nom: string;
  couleur: string;
  description: string;
  marque?: string;
  photo?: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor() {
    console.log('test depuis constructor');
    console.log(this.produitsBoutique);
    console.log(this.produitsBoutique[2].nom);
  }

  title = 'Shop-App-Phone';

  //declaration d'une variable globale
  objetDetail: Produit = new Produit();
  //declaration newItem pour stocker l'input
  newItem = '';
  newItemDesc = '';
  newItemColor = '';
  disableButton = false;
  limitMessage = '';

  //creation d'un objet
  produit: Produit = {
    nom: 'Iphone',
    couleur: 'Jaune',
    description: 'Smartphone',
    // marque: 'Apple',
  };

  //creation d'un tableau
  produitsBoutique: Produit[] = [
    {
      nom: 'Iphone',
      couleur: 'Jaune',
      description: '12 Pro',
      photo: '../assets/img1.jpeg',
    },
    {
      nom: 'Samsung',
      couleur: 'Noir',
      description: 'Galaxy S20',
      photo: '../assets/img2.jpeg',
    },
    {
      nom: 'OnePlus',
      couleur: 'Vert',
      description: 'Nord N100',
      photo: '../assets/img3.jpg',
    },
  ];

  //fonction au clic recuperation des infos
  detailProduit(item: Produit) {
    console.log(item, 'test');
    //on affecte item à this.objetDetail
    this.objetDetail = item;
  }

  onAddItem() {
    console.log(this.newItem, 'test depuis onAddItem');
    //on cree un nouveau produit
    let newProduct = new Produit();
    //on attribue la valeur de newItem à la propriete nom de newProduct
    newProduct.nom = this.newItem;
    newProduct.description = this.newItemDesc;
    newProduct.couleur = this.newItemColor;

    //on ajoute le nouvel objet dans le tableau
    if (this.produitsBoutique.length >= 5) {
      this.disableButton == true;
      this.limitMessage = "Vous avez atteint le nombre d'articles";
    } else {
      this.produitsBoutique.push(newProduct);
    }
  }
} //ne rien mettre apres cette ligne
