import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-product-header',
  templateUrl: './product-header.component.html',
})
export class ProductHeaderComponent {
  @Output() columnsCountChange = new EventEmitter<number>();
  @Output() itemsCountChange = new EventEmitter<number>();
  @Output() sortChange = new EventEmitter<string>();

  sort = 'desc';
  itemsShowCount = 12;
  constructor() {}

  onSort(sort: string): void {
    this.sortChange.emit(sort);
    this.sort = sort;
  }

  onItems(count: number): void {
    this.itemsCountChange.emit(count);
    this.itemsShowCount = count;
  }

  onColumnsView(colsNum: number): void {
    this.columnsCountChange.emit(colsNum);
  }
}
