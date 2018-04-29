import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  @Input() id: string;
  @Input() position: string;
  @Input() imageUrl: string;
  @Input() type: string;
  @Input() subType: string;
  @Input() description: string;

  constructor() {
  }

  ngOnInit() {

  }

  get productUrl() {
    return `/#/product/${this.id}/${this.type}-${this.subType}`;
  }

}
