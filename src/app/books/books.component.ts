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
  description: 'Tomik poezji łączący doświadczenia współczesności z poetycką materią.',
  photo: 'Modlitwy_dla_opornych.jpg'
  };

  book1: Book = {
    id: 2,
    title: 'Stary człowiek i morze',
    author: 'Ernest Hemingway',
    description: 'Historia człowieka, który wypłynął w morze i połknął go wieloryb.',
    photo: 'staryimorze.jpg'
  }

  constructor() { }

  ngOnInit(): void {
  }

}

