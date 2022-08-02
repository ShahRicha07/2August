import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/common/category';
import { Product } from 'src/app/common/product';
import { ProductServiceService } from 'src/app/services/product-service.service';

@Component({
  selector: 'app-product-form-component',
  templateUrl: './product-form-component.component.html',
  styleUrls: ['./product-form-component.component.css']
})
export class ProductFormComponentComponent implements OnInit {
  categories : Category[]=[];
  product : Product = new Product(0,"","","",0,"",0,new Date(),new Date(),0)
  isEditable: Boolean = false;

  constructor(private service : ProductServiceService,private route :Router,private activeRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.listOfCategories()
    this.activeRoute.paramMap.subscribe(()=>{this.getProductById()})
  }
  getProductById() {
    const pid = +this.activeRoute.snapshot.paramMap.get("pid");
    console.log(pid)
    if (pid > 0) {
      this.isEditable = true
      this.service.getProductById(pid).subscribe(data => {
        this.product = data;
      })
    }
  }
  listOfCategories(){
    this.service.getAllCategory().subscribe(data =>{
      this.categories=data
    })
  }
  onSubmit(){
    if (this.isEditable) {
      this.service.updateProduct(this.product).subscribe(data=> {
       console.log(data);
       
        this.route.navigateByUrl("/product");
      });;
    }
    else {
      this.service.saveProduct(this.product).subscribe(() => {
        this.route.navigateByUrl("/product")
      })
    }
  }

  



}
