import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  itemArray: any = [
    {
      "id": 1,
      "name": "Article 1",
      "label": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "price": 25
    },
    {
      "id": 2,
      "name": "Article 2",
      "label": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "price": 35
    },
    {
      "id": 3,
      "name": "Article 3",
      "label": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "price": 45
    },
    {
      "id": 4,
      "name": "Article 4",
      "label": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "price": 55
    },
    {
      "id": 5,
      "name": "Article 5",
      "label": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "price": 65
    },
    {
      "id": 6,
      "name": "Article 6",
      "label": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "price": 75
    }
  ];

  addedItems = [];

  constructor() { }

  addItem(i) {
    this.addedItems.push(this.itemArray[i]);
  }

  getItems() {
    localStorage.setItem("array", JSON.stringify(this.addedItems));
  }

  ngOnInit() {
    if (localStorage.getItem('array')) {
      this.addedItems = JSON.parse(localStorage.getItem("array"));
    }
  }

}
