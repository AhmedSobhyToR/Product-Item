import { CurrencyPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { SpecValComponent } from "./spec-val/spec-val.component";

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CurrencyPipe, SpecValComponent],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css'
})
export class ProductItemComponent implements OnInit{
  images!: string[];
  selectedImg!: string;

  sizes!: string[];
  selectedSize!: string;

  ngOnInit(){
    this.images = ['assets/Images/1.jpg', 'assets/Images/2.jpg', 'assets/Images/3.jpg', 'assets/Images/4.jpg']
    this.selectedImg = 'assets/Images/1.jpg';

    this.sizes = ['S', 'M', 'L', 'XL'];
    this.selectedSize = 'S';
  
  }

  onSelectImg(imgSrc: string){
    this.selectedImg = imgSrc;
  }

  onSelectSize(size: string){
    this.selectedSize = size
  }
}
