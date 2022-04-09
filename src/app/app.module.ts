import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AgGridModule } from 'ag-grid-angular';
import { CoinListComponent } from './coin-list/coin-list.component';
import { AppHeaderComponent } from 'src/common/app-header/app-header.component';
import { CoinService } from './coin-list/coin.service';
import { HttpClientModule } from '@angular/common/http';
import { CoinDetailComponent } from './coin-detail/coin-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    CoinListComponent,
    AppHeaderComponent,
    CoinDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    AgGridModule,
    HttpClientModule
  ],
  providers: [CoinService],
  bootstrap: [AppComponent]
})
export class AppModule { }
