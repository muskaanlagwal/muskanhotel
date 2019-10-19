import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { getLocaleDateFormat } from '@angular/common';


@Injectable({
  providedIn: 'root'
})
export class DogService {
  url='http://localhost:3000/user';
  constructor(private http: HttpClient) { }
  addData(name,email,phone){
    const obj ={name,email,phone};
    this
         .http
         .post(`${this.url}/add`,obj)
         .subscribe(res=> console.log(res));
  }
  getData() {
    return(
      this
          .http
          .get(`${this.url}`)
    );
  }
}
