import { Component, OnInit } from '@angular/core';
import { book } from 'src/app/models/book';
import { Router } from "@angular/router";
import { BookService } from 'src/app/services/book.service';
import { categoria } from 'src/app/models/categoria';
import { MatTableDataSource } from '@angular/material/table';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.css']
})
export class CreateBookComponent implements OnInit {
  book: book = new book();

  categories: categoria[] = [];

  constructor(private service: BookService, private router: Router, private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.categoryService.list().subscribe(categories => {
      this.categories = categories;
    });
  }

  createBook() : void {
      this.service.createBook(this.book).subscribe(() =>{
        this.router.navigate(['/']);
      }) 
  }

}
