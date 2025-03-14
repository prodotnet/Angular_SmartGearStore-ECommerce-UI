import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-products',
  imports: [CommonModule,FormsModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  filterExpanded: boolean = true;
  selectedSort: string = '';
  isNewFilter: boolean = false;

  
  minPrice: number | null = null;
  maxPrice: number | null = null;
  selectedSize: string = '';
  isTypeA: boolean = false;
  isTypeB: boolean = false;
  isTypeC: boolean = false;
  products = [
    { name: 'iPhone 16', price: 99  , size: 'medium', type: 'B',  image: '../assets/smartphone.jpg', isNew: true },
    { name: 'Lenovo IdeaPad 3 Intel®', price: 5500,size:  'medium', type: 'B',  image: '../assets/laptop1.jpg', isNew: false },
    { name: 'Galaxy A72 Pro',   price: 12420 ,size:'medium', type: 'A',  image: '../assets/Samsung Galaxy A74 pro.jpg', isNew: true },
    { name: 'REX M AE-3 Smartwatch (Black Strap, L)', price: 1500 ,size:  'medium', type: 'C',  image: '../assets/w3.jpg', isNew: true },
    { name: 'OQ Trading L53 Pure Bass Wireless Earpods - Black Bluetooth Headset (In the Ear)', price: 299 ,size:  'medium', type: 'C',  image: '../assets/earpod.jpg', isNew: true },
    { name: 'Windows 11 Pro-ASUS', price: 8200 ,size:  'medium', type: 'A',  image: '../assets/aleksander-vlad-KcF7fUhKFeg-unsplash.jpg', isNew: true },
    { name: 'OQ Trading L53 Pure Bass Wireless Earpods - White Bluetooth Headset (In the Ear)', price: 199, size:  'medium', type: 'B', image: '../assets/ralph-si-cACbhCdH5wQ-unsplash.jpg', isNew: true },
    { name: 'Samsung 48 cm (19") HD Monitor', price: 1699, size:  'medium', type: 'A', image: '../assets/alienware-Hpaq-kBcYHk-unsplash.jpg', isNew: true },
    { name: 'Auto Track WiFi IP Camera Nanny Cam Mobile Baby Monitor ', price: 199, size:  'medium', type: 'C', image: '../assets/olena-bohovyk-PLMJD95IN_0-unsplash.jpg', isNew: true },
    { name: 'Apple iMac 27-Inch, Late 2013 i5 Quad Core with 16GB RAM (Refurbished)', price: 199, size:  'medium', type: 'A', image: '../assets/michael-aleo-jUrku7MmrNY-unsplash.jpg', isNew: true },
  ];

  filteredProducts = [...this.products];

  toggleFilters() {
    this.filterExpanded = !this.filterExpanded;
  }

  sortProducts() {
    if (this.selectedSort === 'price') {
      this.filteredProducts.sort((a, b) => a.price - b.price);
    } else if (this.selectedSort === 'popularity') {
      // Add popularity sort logic
    } else if (this.selectedSort === 'rating') {
      // Add rating sort logic
    }
  }

  filterProducts() {
    this.filteredProducts = this.products.filter(product => {
      let matches = true;

      // Filter by 'New'
      if (this.isNewFilter) {
        matches = matches && product.isNew;
      }

      // Filter by Price
      if (this.minPrice !== null) {
        matches = matches && product.price >= this.minPrice;
      }
      if (this.maxPrice !== null) {
        matches = matches && product.price <= this.maxPrice;
      }

      // Filter by Size
      if (this.selectedSize) {
        matches = matches && product.size === this.selectedSize;
      }

      // Filter by Type
      if (this.isTypeA) {
        matches = matches && product.type === 'A';
      }
      if (this.isTypeB) {
        matches = matches && product.type === 'B';
      }
      if (this.isTypeC) {
        matches = matches && product.type === 'C';
      }
    }


  )}

}
