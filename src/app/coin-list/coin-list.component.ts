import { Component, OnDestroy, OnInit } from '@angular/core';
import { ICoin } from '../contracts/coin';
import { ColDef } from 'ag-grid-community';
import { Observable } from 'rxjs';
import { CoinService } from './coin.service';
import { formatCurrency } from '@angular/common';

@Component({
  selector: 'app-coin-list',
  templateUrl: './coin-list.component.html',
  styleUrls: ['./coin-list.component.css']
})

export class CoinListComponent implements OnInit, OnDestroy {

  defaultColDef = {
    editable: false,
    sortable: true,
    type: 'nonEditableColumn'
  };

  columnDefs: ColDef[] = [
    { field: 'rank', type: 'numericColumn' },
    { field: 'name' },
    { field: 'price' ,type: 'numericColumn' },
    { field: 'dayChange', type: 'numericColumn' },
    { field: 'weekChange', type: 'numericColumn' },
    { field: 'marketCap', type: 'numericColumn' },
    { field: 'dayVolume', type: 'numericColumn' }
  ];

  rowData: Observable<any[]>;

  constructor(private coinService: CoinService) 
  { 
    this.rowData = this.coinService.getCoins();
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }
}
