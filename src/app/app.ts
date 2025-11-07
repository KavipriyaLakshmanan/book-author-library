import { Component, signal } from '@angular/core';
import { Author, Book } from './services/data';
import { CommonModule } from '@angular/common';
import { BookList } from './components/book-list/book-list';
import { AuthorList } from './components/author-list/author-list';
import { BookMap } from './components/book-map/book-map';

@Component({
  selector: 'app-root',
  imports: [CommonModule,BookList,AuthorList,BookMap],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('book-library-app');
  // title = 'Book Library Explorer';
  currentView: 'authors' | 'books' | 'map' = 'authors';
  selectedAuthor: Author | null = null;
  selectedBook: Book | null = null;

  onAuthorSelected(author: Author): void {
    this.selectedAuthor = author;
    this.currentView = 'books';
    this.selectedBook = null;
  }

  onBookSelected(book: Book): void {
    this.selectedBook = book;
    this.currentView = 'map';
  }

  onBackToAuthors(): void {
    this.currentView = 'authors';
    this.selectedAuthor = null;
    this.selectedBook = null;
  }

  onBackToBooks(): void {
    this.currentView = 'books';
    this.selectedBook = null;
  }
  getProgressWidth(): string {
  switch(this.currentView) {
    case 'authors': return '33%';
    case 'books': return '66%';
    case 'map': return '100%';
    default: return '0%';
  }
}

getProgressText(): string {
  switch(this.currentView) {
    case 'authors': return 'Step 1 of 3: Choose an Author';
    case 'books': return 'Step 2 of 3: Select a Book';
    case 'map': return 'Step 3 of 3: Explore Locations';
    default: return 'Start Your Journey';
  }
}
}
