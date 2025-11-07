import { Component, EventEmitter, Input, Output, OnChanges } from '@angular/core';
import { Author, Book, DataService } from '../../services/data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-book-list',
  imports: [CommonModule],
  templateUrl: './book-list.html',
  styleUrl: './book-list.css',
})
export class BookList  implements OnChanges {
  @Input() author: Author | null = null;
  @Output() bookSelected = new EventEmitter<Book>();
  @Output() backToAuthors = new EventEmitter<void>();

  books: Book[] = [];

  constructor(private dataService: DataService) {}

  ngOnChanges(): void {
    if (this.author) {
      this.books = this.dataService.getBooksByAuthor(this.author.id);
    }
  }

  selectBook(book: Book): void {
    this.bookSelected.emit(book);
  }

  goBack(): void {
    this.backToAuthors.emit();
  }

  getGenreColor(genre: string): string {
    const colors: { [key: string]: string } = {
      'Fantasy': 'bg-gradient-primary',
      'Mystery': 'bg-gradient-warning',
      'Horror': 'bg-gradient-danger',
      'Romance': 'bg-gradient-pink',
      'Fiction': 'bg-gradient-info',
      'Science Fiction': 'bg-gradient-purple'
    };
    return colors[genre] || 'bg-gradient-secondary';
  }

getGenreGradient(genre: string): string {
  const genreColors: { [key: string]: string } = {
    'Fiction': 'linear-gradient(135deg, #667eea, #764ba2)',
    'Non-Fiction': 'linear-gradient(135deg, #f093fb, #f5576c)',
    'Science': 'linear-gradient(135deg, #4facfe, #00f2fe)',
    'Technology': 'linear-gradient(135deg, #43e97b, #38f9d7)',
    'Biography': 'linear-gradient(135deg, #fa709a, #fee140)',
    'History': 'linear-gradient(135deg, #ffecd2, #fcb69f)',
    'Fantasy': 'linear-gradient(135deg, #a8edea, #fed6e3)'
  };
  return genreColors[genre] || 'linear-gradient(135deg, #667eea, #764ba2)';
}

getReadingProgress(book: any): number {
  // Simulate reading progress - you can replace with actual data
  return Math.floor(Math.random() * 100);
}

getBookRating(book: any): string {
  // Simulate book rating
  return (3.5 + Math.random() * 1.5).toFixed(1);
}

getReadingTime(book: any): string {
  const pages = book.pages || 300;
  const readingTime = Math.ceil(pages / 2); // 2 pages per minute
  return `${readingTime} min read`;
}

getTotalPages(): number {
  return this.books.reduce((total, book) => total + (book.pages || 300), 0);
}
}
