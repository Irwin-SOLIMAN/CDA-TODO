import { Injectable } from '@angular/core';
import { Article } from '../common/article';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  constructor() {}

  // Initialisation du modèle de donnée (via local Storage)
  articles: Article[] = this.getFromLocalStorage();

  //Création d'un nouvel article et ajout au tableau
  createArticle(article: Article): void {
    // Ajout de l'article à la liste des articles

    this.articles.push(article);
    localStorage.setItem('articles', JSON.stringify(this.articles));
  }

  // Suppression d'un article
  deleteArticle(articleID: string): void {
    // Récupération de l'index de l'article à supprimer

    const index = this.articles.findIndex((x) => x.id === articleID);
    // Suppression de l'article du tableau
    this.articles.splice(index, 1);
    localStorage.setItem('articles', JSON.stringify(this.articles));
  }

  /**
   * Récupération du tableau d'articles stocké dans le local storage
   */

  getFromLocalStorage(): Article[] {
    // Récupération des articles en format 'string'
    const stringData = localStorage.getItem('articles');

    if (stringData === null) {
      return [
        { id: '1', name: 'Poire', price: '5', contact: 'Irwin', stock: '5' },
      ];
    } else {
      // Conversion des données de type 'string' en objet Json
      const articles: Article[] = JSON.parse(stringData || '[]');
      return articles;
    }
  }
}
