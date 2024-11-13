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
  articles: Article[] = this.articleService.articles;

  /**
   * Restaure un article supprimé
   */
  handleArticleStatus(article: Article): void {
    this.articleService.handleArticleStatus(article.id);
  }
}
