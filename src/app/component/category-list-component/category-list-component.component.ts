import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/common/category';
import { ProductServiceService } from 'src/app/services/product-service.service';

@Component({
  selector: 'app-category-list-component',
  templateUrl: './category-list-component.component.html',
  styleUrls: ['./category-list-component.component.css']
})
export class CategoryListComponentComponent implements OnInit {

  categories : Category[]=[];
  constructor(private service : ProductServiceService) { }

  ngOnInit(): void {
    this.listOfCategory()
  }

  listOfCategory(){
    this.service.getAllCategory().subscribe(data =>{
      console.log(data);
      this.categories=data
      
    })
  }

}
