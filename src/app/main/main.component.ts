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
      "price": 25,
      "count": 1
    },
    {
      "id": 2,
      "name": "Article 2",
      "label": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "price": 35,
      "count": 1
    },
    {
      "id": 3,
      "name": "Article 3",
      "label": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "price": 45,
      "count": 1
    },
    {
      "id": 4,
      "name": "Article 4",
      "label": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "price": 55,
      "count": 1
    },
    {
      "id": 5,
      "name": "Article 5",
      "label": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "price": 65,
      "count": 1
    },
    {
      "id": 6,
      "name": "Article 6",
      "label": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "price": 75,
      "count": 1
    }
  ];

  addedItems = [];
  countItems: number = 0;

  constructor() { }

  addItem(i) {
    this.addedItems.push(this.itemArray[i]);
    this.countItems += 1;
  }

  getItems() {
    localStorage.setItem("array", JSON.stringify(this.addedItems));
  }

  ngOnInit() {
    if (localStorage.getItem('array')) {
      this.addedItems = JSON.parse(localStorage.getItem("array"));
      this.addedItems.forEach(element => {
        this.countItems += element.count;
      });
    }
  }

}
