import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/common/category';
import { ProductServiceService } from 'src/app/services/product-service.service';

@Component({
  selector: 'app-category-form-component',
  templateUrl: './category-form-component.component.html',
  styleUrls: ['./category-form-component.component.css']
})
export class CategoryFormComponentComponent implements OnInit {
  category : Category = new Category(0,"");
  constructor(private service : ProductServiceService ,private route:Router) { }

  ngOnInit(): void {
  }
  onSubmit(){
    this.service.saveCategry(this.category).subscribe(()=>{
      this.route.navigateByUrl("/category")
    })
  }

}
