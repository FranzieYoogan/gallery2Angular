import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private http: HttpClient) { }

  url = "http://localhost:3000/gallery2"

  getData(): Observable<any[]> {

   return this.http.get<any[]>(this.url)

  }

  update(id:string,body:any):Observable<any> {

   return this.http.put(`http://localhost:3000/gallery2/${id}`,body)

  }

  id:any
  setid(id:any) {

    this.id = id

  }

  getid():any {

    return this.id

  }

}
