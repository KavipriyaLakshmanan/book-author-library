import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Book } from '../../services/data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-book-map',
  imports: [CommonModule],
  templateUrl: './book-map.html',
  styleUrl: './book-map.css',
})
export class BookMap {
  @Input() book: Book | null = null;
  @Output() backToBooks = new EventEmitter<void>();

  constructor(private sanitizer: DomSanitizer) {}

  // Method to get Google Maps embed URL without API key
  getGoogleMapsEmbedUrl(): SafeResourceUrl {
    if (!this.book) return '';

    const lat = this.book.libraryLocation.lat;
    const lng = this.book.libraryLocation.lng;
    const libraryName = encodeURIComponent(this.book.libraryLocation.name);

    // Google Maps embed URL - no API key required for basic embedding
    const embedUrl = `https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${lat},${lng}&zoom=15&maptype=roadmap`;

    return this.sanitizer.bypassSecurityTrustResourceUrl(embedUrl);
  }

  // Alternative: Direct Google Maps URL for full features
  getGoogleMapsDirectUrl(): string {
    if (!this.book) return '';

    const lat = this.book.libraryLocation.lat;
    const lng = this.book.libraryLocation.lng;
    const libraryName = encodeURIComponent(this.book.libraryLocation.name);

    return `https://www.google.com/maps/search/?api=1&query=${lat},${lng}&query_place_id=${libraryName}`;
  }

  // For directions
  getGoogleMapsDirectionsUrl(): string {
    if (!this.book) return '';

    const lat = this.book.libraryLocation.lat;
    const lng = this.book.libraryLocation.lng;

    return `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;
  }

  // For street view
  getGoogleStreetViewUrl(): SafeResourceUrl {
    if (!this.book) return '';

    const lat = this.book.libraryLocation.lat;
    const lng = this.book.libraryLocation.lng;

    const streetViewUrl = `https://www.google.com/maps/embed/v1/streetview?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&location=${lat},${lng}&heading=210&pitch=10&fov=100`;

    return this.sanitizer.bypassSecurityTrustResourceUrl(streetViewUrl);
  }

  openInGoogleMaps(): void {
    window.open(this.getGoogleMapsDirectUrl(), '_blank');
  }

  getDirections(): void {
    window.open(this.getGoogleMapsDirectionsUrl(), '_blank');
  }

  getAuthorName(authorId: number | undefined): string {
  if (!authorId) return 'Unknown Author';

  const authors: { [key: number]: string } = {
    1: 'Arundhati Roy',
    2: 'Ruskin Bond',
    3: 'Chetan Bhagat',
    4: 'Jhumpa Lahiri',
    5: 'Amish Tripathi',
    6: 'Sudha Murthy',
    7: 'Vikram Seth',
    8: 'Anita Desai'
  };
  return authors[authorId] || 'Unknown Author';
}

  getGenreColor(genre: string | undefined): string {
  if (!genre) return 'bg-gradient-secondary';

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

  getCoordinates(): string {
    if (!this.book) return '';
    return `${this.book.libraryLocation.lat.toFixed(6)}, ${this.book.libraryLocation.lng.toFixed(6)}`;
  }

  copyCoordinates(): void {
    const coordinates = this.getCoordinates();
    navigator.clipboard.writeText(coordinates).then(() => {
      alert('Coordinates copied to clipboard!');
    });
  }

  goBack(): void {
    this.backToBooks.emit();
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

getLibraryHours(): any[] {
  return [
    { day: 'Monday - Friday', hours: '9:00 AM - 8:00 PM', closed: false },
    { day: 'Saturday', hours: '10:00 AM - 6:00 PM', closed: false },
    { day: 'Sunday', hours: '12:00 PM - 5:00 PM', closed: false }
  ];
}

zoomIn(): void {
  console.log('Zoom in');
}

zoomOut(): void {
  console.log('Zoom out');
}

shareLocation(): void {
  if (navigator.share) {
    navigator.share({
      title: `${this.book?.libraryLocation.name}`,
      text: `Check out ${this.book?.title} at ${this.book?.libraryLocation.name}`,
      url: window.location.href
    });
  } else {
    this.copyCoordinates();
  }
}
}
