import { Injectable } from '@angular/core';

export interface Book {
  id: number;
  title: string;
  authorId: number;
  libraryLocation: {
    name: string;
    lat: number;
    lng: number;
    address: string;
    city: string;
    country: string;
  };
  isbn: string;
  publishedYear: number;
  genre: string;
  coverImage?: string;
  pages?: number;
}

export interface Author {
  id: number;
  name: string;
  bio: string;
  nationality: string;
  birthYear: number;
  profileImage: string;
  totalBooks: number;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private authors: Author[] = [
    {
      id: 1,
      name: 'Arundhati Roy',
      bio: 'Indian author best known for her novel "The God of Small Things", which won the Man Booker Prize for Fiction in 1997.',
      nationality: 'Indian',
      birthYear: 1961,
      profileImage: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=200&h=200&fit=crop&crop=face',
      totalBooks: 2
    },
    {
      id: 2,
      name: 'Ruskin Bond',
      bio: 'Indian author of British descent known for his contributions to children\'s literature. He was awarded the Padma Shri in 1999.',
      nationality: 'Indian',
      birthYear: 1934,
      profileImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face',
      totalBooks: 2
    },
    {
      id: 3,
      name: 'Chetan Bhagat',
      bio: 'Indian author, columnist, and YouTuber known for his Indian-English novels about young urban middle-class Indians.',
      nationality: 'Indian',
      birthYear: 1974,
      profileImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face',
      totalBooks: 2
    },
    {
      id: 4,
      name: 'Jhumpa Lahiri',
      bio: 'Indian-American author known for her short stories, novels and essays in English, and more recently, in Italian.',
      nationality: 'Indian-American',
      birthYear: 1967,
      profileImage: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&h=200&fit=crop&crop=face',
      totalBooks: 2
    },
    {
      id: 5,
      name: 'Amish Tripathi',
      bio: 'Indian author known for his book series "Shiva Trilogy" and "Ram Chandra Series" which are based on Hindu mythology.',
      nationality: 'Indian',
      birthYear: 1974,
      profileImage: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face',
      totalBooks: 2
    },
    {
      id: 6,
      name: 'Sudha Murthy',
      bio: 'Indian engineering teacher, author, and philanthropist who is chairperson of the Infosys Foundation. She is also a prolific writer in Kannada and English.',
      nationality: 'Indian',
      birthYear: 1950,
      profileImage: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face',
      totalBooks: 2
    },
    {
      id: 7,
      name: 'Vikram Seth',
      bio: 'Indian novelist and poet known for his epic novel "A Suitable Boy". He has received several awards including the Padma Shri.',
      nationality: 'Indian',
      birthYear: 1952,
      profileImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face',
      totalBooks: 2
    },
    {
      id: 8,
      name: 'Anita Desai',
      bio: 'Indian novelist and Emeritus John E. Burchard Professor of Humanities at the Massachusetts Institute of Technology.',
      nationality: 'Indian',
      birthYear: 1937,
      profileImage: 'https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=200&h=200&fit=crop&crop=face',
      totalBooks: 2
    }
  ];

  private books: Book[] = [
    // Arundhati Roy Books
    {
      id: 1,
      title: 'The God of Small Things',
      authorId: 1,
      isbn: '9780679457312',
      publishedYear: 1997,
      genre: 'Fiction',
      coverImage: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=150&h=200&fit=crop',
      libraryLocation: {
        name: 'Delhi Public Library',
        lat: 28.644800,
        lng: 77.216721,
        address: 'S.P. Mukherjee Marg',
        city: 'Delhi',
        country: 'India'
      },
      pages: 340
    },
    {
      id: 2,
      title: 'The Ministry of Utmost Happiness',
      authorId: 1,
      isbn: '9780670089632',
      publishedYear: 2017,
      genre: 'Fiction',
      coverImage: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=150&h=200&fit=crop',
      libraryLocation: {
        name: 'Kolkata State Central Library',
        lat: 22.572645,
        lng: 88.363892,
        address: '1, Raja Ram Mohan Roy Sarani',
        city: 'Kolkata',
        country: 'India'
      },
            pages: 340

    },

    // Ruskin Bond Books
    {
      id: 3,
      title: 'The Blue Umbrella',
      authorId: 2,
      isbn: '9788172235539',
      publishedYear: 1980,
      genre: 'Children\'s Literature',
      coverImage: 'https://images.unsplash.com/photo-1592816817400-965ccdf11567?w=150&h=200&fit=crop',
      libraryLocation: {
        name: 'Mussoorie Library',
        lat: 30.459776,
        lng: 78.064411,
        address: 'The Mall Road',
        city: 'Mussoorie',
        country: 'India'
      },
            pages: 340

    },
    {
      id: 4,
      title: 'The Room on the Roof',
      authorId: 2,
      isbn: '9788172235538',
      publishedYear: 1956,
      genre: 'Fiction',
      coverImage: 'https://images.unsplash.com/photo-1541963463532-d68292c34b19?w=150&h=200&fit=crop',
      libraryLocation: {
        name: 'Dehradun Central Library',
        lat: 30.316496,
        lng: 78.032188,
        address: 'Haridwar Road',
        city: 'Dehradun',
        country: 'India'
        },
            pages: 340
    },

    // Chetan Bhagat Books
    {
      id: 5,
      title: 'Five Point Someone',
      authorId: 3,
      isbn: '9788129108177',
      publishedYear: 2004,
      genre: 'Fiction',
      coverImage: 'https://images.unsplash.com/photo-1589994965851-a8f479c573a9?w=150&h=200&fit=crop',
      libraryLocation: {
        name: 'IIT Delhi Library',
        lat: 28.544857,
        lng: 77.190533,
        address: 'IIT Campus',
        city: 'Delhi',
        country: 'India'
        },
            pages: 340
    },
    {
      id: 6,
      title: '2 States',
      authorId: 3,
      isbn: '9788129118305',
      publishedYear: 2009,
      genre: 'Romance',
      coverImage: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?w=150&h=200&fit=crop',
      libraryLocation: {
        name: 'Anna Centenary Library',
        lat: 13.041790,
        lng: 80.234146,
        address: 'Gandhi Mandapam Road',
        city: 'Chennai',
        country: 'India'
       },
            pages: 340
    },

    // Jhumpa Lahiri Books
    {
      id: 7,
      title: 'The Namesake',
      authorId: 4,
      isbn: '9780395927212',
      publishedYear: 2003,
      genre: 'Fiction',
      coverImage: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=150&h=200&fit=crop',
      libraryLocation: {
        name: 'Kolkata National Library',
        lat: 22.533439,
        lng: 88.331573,
        address: 'Belvedere Road',
        city: 'Kolkata',
        country: 'India'
        },
            pages: 340
    },
    {
      id: 8,
      title: 'Interpreter of Maladies',
      authorId: 4,
      isbn: '9780395927205',
      publishedYear: 1999,
      genre: 'Short Stories',
      coverImage: 'https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=150&h=200&fit=crop',
      libraryLocation: {
        name: 'American Library',
        lat: 28.632429,
        lng: 77.218788,
        address: 'Kasturba Gandhi Marg',
        city: 'Delhi',
        country: 'India'
        },
            pages: 340
    },

    // Amish Tripathi Books
    {
      id: 9,
      title: 'The Immortals of Meluha',
      authorId: 5,
      isbn: '9789381626689',
      publishedYear: 2010,
      genre: 'Mythology',
      coverImage: 'https://images.unsplash.com/photo-1531346680769-a1d79b57de2b?w=150&h=200&fit=crop',
      libraryLocation: {
        name: 'Mumbai Central Library',
        lat: 18.930428,
        lng: 72.831856,
        address: 'Mahatma Gandhi Road',
        city: 'Mumbai',
        country: 'India'
        },
            pages: 340
    },
    {
      id: 10,
      title: 'The Secret of the Nagas',
      authorId: 5,
      isbn: '9789381626696',
      publishedYear: 2011,
      genre: 'Mythology',
      coverImage: 'https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=150&h=200&fit=crop',
      libraryLocation: {
        name: 'Pune Central Library',
        lat: 18.520430,
        lng: 73.856743,
        address: 'Jangali Maharaj Road',
        city: 'Pune',
        country: 'India'
       },
            pages: 340
    },

    // Sudha Murthy Books
    {
      id: 11,
      title: 'Wise and Otherwise',
      authorId: 6,
      isbn: '9788185986099',
      publishedYear: 2002,
      genre: 'Non-Fiction',
      coverImage: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=150&h=200&fit=crop',
      libraryLocation: {
        name: 'Bangalore Central Library',
        lat: 12.971599,
        lng: 77.594566,
        address: 'Cubbon Park',
        city: 'Bangalore',
        country: 'India'
        },
            pages: 340
    },
    {
      id: 12,
      title: 'The Day I Stopped Drinking Milk',
      authorId: 6,
      isbn: '9788129118800',
      publishedYear: 2013,
      genre: 'Non-Fiction',
      coverImage: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=150&h=200&fit=crop',
      libraryLocation: {
        name: 'Mysore Palace Library',
        lat: 12.305147,
        lng: 76.655151,
        address: 'Sayyaji Rao Road',
        city: 'Mysore',
        country: 'India'
       },
            pages: 340
    },

    // Vikram Seth Books
    {
      id: 13,
      title: 'A Suitable Boy',
      authorId: 7,
      isbn: '9788172235537',
      publishedYear: 1993,
      genre: 'Fiction',
      coverImage: 'https://images.unsplash.com/photo-1592816817400-965ccdf11567?w=150&h=200&fit=crop',
      libraryLocation: {
        name: 'Allahabad Public Library',
        lat: 25.435801,
        lng: 81.846311,
        address: 'Sardar Patel Marg',
        city: 'Prayagraj',
        country: 'India'
        },
            pages: 340
    },
    {
      id: 14,
      title: 'The Golden Gate',
      authorId: 7,
      isbn: '9780571136395',
      publishedYear: 1986,
      genre: 'Fiction',
      coverImage: 'https://images.unsplash.com/photo-1541963463532-d68292c34b19?w=150&h=200&fit=crop',
      libraryLocation: {
        name: 'Hyderabad State Central Library',
        lat: 17.385044,
        lng: 78.486671,
        address: 'Afzal Gunj',
        city: 'Hyderabad',
        country: 'India'
        },
            pages: 340
    },

    // Anita Desai Books
    {
      id: 15,
      title: 'The Village by the Sea',
      authorId: 8,
      isbn: '9780141312710',
      publishedYear: 1982,
      genre: 'Fiction',
      coverImage: 'https://images.unsplash.com/photo-1589994965851-a8f479c573a9?w=150&h=200&fit=crop',
      libraryLocation: {
        name: 'Goa State Central Library',
        lat: 15.490930,
        lng: 73.827850,
        address: 'Patto Plaza',
        city: 'Panaji',
        country: 'India'
        },
            pages: 340
    },
    {
      id: 16,
      title: 'Clear Light of Day',
      authorId: 8,
      isbn: '9780141185',
      publishedYear: 1980,
      genre: 'Fiction',
      coverImage: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?w=150&h=200&fit=crop',
      libraryLocation: {
        name: 'Lucknow City Library',
        lat: 26.846694,
        lng: 80.946166,
        address: 'Hazratganj',
        city: 'Lucknow',
        country: 'India'
        },
            pages: 340
    }
  ];

  getAuthors(): Author[] {
    return this.authors;
  }

  getBooksByAuthor(authorId: number): Book[] {
    return this.books.filter(book => book.authorId === authorId);
  }

  getBookById(bookId: number): Book | undefined {
    return this.books.find(book => book.id === bookId);
  }

  getAllBooks(): Book[] {
    return this.books;
  }
}
