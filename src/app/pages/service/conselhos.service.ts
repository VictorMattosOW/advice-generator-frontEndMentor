import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConselhosService {

  private readonly url = 'https://api.adviceslip.com/advice';

  constructor(private http: HttpClient) { }

  getConselho(): Observable<any> {
    return this.http.get<any>(this.url);
  }
}
