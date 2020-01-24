import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bucket',
  templateUrl: './bucket.component.html',
  styleUrls: ['./bucket.component.scss']
})
export class BucketComponent implements OnInit {

  bucketArray = [];
  totalPrice: number = 0;
  countItemsTwo: number = 0;


  constructor() { }

  counter() {
    this.bucketArray.forEach(element => {
      this.countItemsTwo += element.count;
    });
  }

  deleteItem(i) {
    this.totalPrice -= this.bucketArray[i].price;
    this.bucketArray.splice(i, 1);
    localStorage.clear();
    localStorage.setItem("array", JSON.stringify(this.bucketArray));
    this.countItemsTwo -= 1;
  }

  ngOnInit() {
    this.bucketArray = JSON.parse(localStorage.getItem("array"));
    this.bucketArray.forEach(element => {
      this.totalPrice += element.price;
      this.countItemsTwo += element.count;
    });
  }
}
