import { Book } from './../book';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {
  book: Book = {
  id: 1,
  title: 'Modlitwy dla opornych',
  author: 'Jaś Kapela',
  price: 45,
  description: 'Tomik poezji łączący doświadczenia współczesności z poetycką materią.',
  photo: 'Modlitwy_dla_opornych.jpg'
  };

  constructor() { }

  ngOnInit(): void {
  }

}

