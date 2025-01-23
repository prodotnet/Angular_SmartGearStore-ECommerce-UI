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

  products = [
    { name: 'Sample Product 1', price: 99, image: '../assets/smartphone.jpg', isNew: true },
    { name: 'Sample Product 2', price: 149, image: '../assets/laptop1.jpg', isNew: false },
    { name: 'Sample Product 3', price: 199, image: '../assets/smartphone.jpg', isNew: true },
    { name: 'Sample Product 3', price: 199, image: '../assets/Samsung Galaxy A74 pro.jpg', isNew: true },
    { name: 'Sample Product 3', price: 199, image: '../assets/w3.jpg', isNew: true },
    { name: 'Sample Product 3', price: 199, image: '../assets/earpod.jpg', isNew: true },
    { name: 'Sample Product 3', price: 199, image: '../assets/aleksander-vlad-KcF7fUhKFeg-unsplash.jpg', isNew: true },

    { name: 'Sample Product 3', price: 199, image: '../assets/ralph-si-cACbhCdH5wQ-unsplash.jpg', isNew: true },
    { name: 'Sample Product 3', price: 199, image: '../assets/thomas-le-fB4Zo2jPA3E-unsplash.jpg', isNew: true },
    { name: 'Sample Product 3', price: 199, image: '../assets/alienware-Hpaq-kBcYHk-unsplash.jpg', isNew: true },
    { name: 'Sample Product 3', price: 199, image: '../assets/olena-bohovyk-PLMJD95IN_0-unsplash.jpg', isNew: true },
    { name: 'Sample Product 3', price: 199, image: '../assets/michael-aleo-jUrku7MmrNY-unsplash.jpg', isNew: true },
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
    this.filteredProducts = this.products.filter(
      (product) => !this.isNewFilter || product.isNew
    );
  }
}
