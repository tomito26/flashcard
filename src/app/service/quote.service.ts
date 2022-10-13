import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {
  url = "http://quotes.stormconsultancy.co.uk/random.json"

  constructor(private http: HttpClient) {
    
  }



  getQuotes(){
    interface ApiResponse{
      author: string;
      quote: string;
    }
    
    return this.http.get<ApiResponse>(this.url)
    
  }
}
