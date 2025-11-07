import { Component, EventEmitter, Output } from '@angular/core';
import { Author, DataService } from '../../services/data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-author-list',
  imports: [CommonModule],
  templateUrl: './author-list.html',
  styleUrl: './author-list.css',
})
export class AuthorList {
  @Output() authorSelected = new EventEmitter<Author>();
  authors: Author[] = [];
  selectedAuthor: Author | null = null;

  constructor(private dataService: DataService) {
    this.authors = this.dataService.getAuthors();
  }

  selectAuthor(author: Author): void {
    this.selectedAuthor = author;
    this.authorSelected.emit(author);
  }

  getAuthorInitials(name: string): string {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  }
  getGenreColor(genre: string): string {
  const colors: { [key: string]: string } = {
    'Fiction': 'bg-gradient-primary',
    'Children\'s Literature': 'bg-gradient-warning',
    'Romance': 'bg-gradient-pink',
    'Short Stories': 'bg-gradient-info',
    'Mythology': 'bg-gradient-purple',
    'Non-Fiction': 'bg-gradient-success'
  };
  return colors[genre] || 'bg-gradient-secondary';
}
getBookColor(index: number): string {
  const colors = [
    'linear-gradient(135deg, #ff6b6b, #ee5a24)',
    'linear-gradient(135deg, #a29bfe, #6c5ce7)',
    'linear-gradient(135deg, #74b9ff, #0984e3)',
    'linear-gradient(135deg, #55efc4, #00b894)',
    'linear-gradient(135deg, #ffeaa7, #fdcb6e)',
    'linear-gradient(135deg, #fd79a8, #e84393)',
    'linear-gradient(135deg, #dfe6e9, #b2bec3)'
  ];
  return colors[index % colors.length];
}
}
