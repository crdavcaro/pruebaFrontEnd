import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(private http: HttpClient) { }

  public getPeople(userId: string) {
    return this.http.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
  }
}

