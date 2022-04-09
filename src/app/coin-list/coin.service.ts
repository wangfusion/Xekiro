import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError, tap } from "rxjs/operators";
import { ICoin } from "../contracts/coin";

@Injectable({
  providedIn: 'root'
})

export class CoinService {

  private coinUrl = 'assets/coins.json';

  constructor(private http: HttpClient) {}

  getCoins(): Observable<any[]> {
    return this.http.get<any[]>(this.coinUrl).pipe(
      tap(data => console.log('All ', JSON.stringify(data)))
    );
  }
}