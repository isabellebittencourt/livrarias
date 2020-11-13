
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { categoria } from 'src/app/models/categoria';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-list-category',
  templateUrl: './list-category.component.html',
  styleUrls: ['./list-category.component.css']
})
export class ListCategoryComponent implements OnInit {
  constructor(private router:Router, private categoryService : CategoryService) { }

  categories: categoria[];
  categoriesColumns: string[] = ['nome', 'deletar'];

  newCategoryName: string;

  ngOnInit(): void {
    this.categoryService.list().subscribe(categories =>{
      this.categories = categories;  
    });
  }

  addCategory() {
    this.categoryService.create({ nome: this.newCategoryName }).subscribe(() => {
      window.location.reload();
    });
  }

  deleteCategory(categoryId) {
    const confirmation = confirm('Deseja deletar esta categoria?');

    if(!confirmation) {
      return;
    }

    this.categoryService.delete(categoryId).subscribe();

    window.location.reload();
  }

}
