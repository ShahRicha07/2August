import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/common/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartProducts : Product[]=[];
  constructor() { }

  ngOnInit(): void {
  }

}
