import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Article } from '../common/article';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-articles-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './articles-list.component.html',
  styleUrl: './articles-list.component.css',
})
export class ArticlesListComponent {
  articleService = inject(ArticleService);

  // Initialise la propriété local avec la liste des articles disponibles du services
  articles: Article[] = this.articleService.articles;

  article: Article = {
    id: '',
    name: '',
    price: '',
    contact: '',
    stock: '',
    isDeletted: false,
  };

  resetFormField() {
    // Réinitialisation du modèle
    this.article = {
      id: '',
      name: '',
      price: '',
      contact: '',
      stock: '',
      isDeletted: false,
    };
  }

  createArticle(article: Article): void {
    this.articleService.createArticle({ ...article }); //
    this.resetFormField();
  }

  handleArticleStatus(article: Article): void {
    this.articleService.handleArticleStatus(article.id);
  }
}
