import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Article } from '../common/article';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-articles-list-deleted',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './articles-list-deleted.component.html',
  styleUrl: './articles-list-deleted.component.css',
})
export class ArticlesListDeletedComponent {
  articleService = inject(ArticleService);

  // Liste des articles non disponnible
  articlesDeleted!: Article[];

  ngOnInit() {
    this.articleService.getFromLocalStorage();
    // TODO récupération des articles non disponible à partir d'un service
  }

  /**
   * Restaure un article supprimé
   */
  restore() {
    // TODO restauration de l'article à partir d'un service
  }
}
