import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/common/product';
import { ProductServiceService } from 'src/app/services/product-service.service';

@Component({
  selector: 'app-product-list-component',
  templateUrl: './product-list-component.component.html',
  styleUrls: ['./product-list-component.component.css']
})
export class ProductListComponentComponent implements OnInit {
  products: Product[] = [];
  pname: string = '';
  constructor(private service : ProductServiceService,private route: Router) { }

  ngOnInit(): void {
    this.listOfProducts()
  }

  listOfProducts(){
    this.service.getAllProduct().subscribe(data =>{
      console.log(data);
      this.products=data
      
    })
  }

  updateProduct(pid : number){
    this.route.navigateByUrl("/update/"+pid)
  }

  deleteProduct(pid : number){
    if(confirm("Do you want to Delete?")){
      this.service.deleteProduct(pid).subscribe(data =>{
        console.log("deleted");
        this.listOfProducts();
        
      })
    }

  }

  getProductByName(pname : string){
    this.service.getProductByName(pname).subscribe(data =>{
  
      this.products =data
    })
  }




}
