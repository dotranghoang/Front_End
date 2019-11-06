import { Component, OnInit } from '@angular/core';
import {Book} from '../book';
import {BookService} from '../book.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {

  public bookList: Book[] = [];

  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.bookService.getBookList().subscribe(
      result => {
        this.bookList = result;
      }
    );
  }

}
