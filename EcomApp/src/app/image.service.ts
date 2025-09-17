import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Image {
  id: number;
  url: string;
  price: number;
  
}

@Injectable({
  providedIn: 'root'
})
export class ImageService {
//private apiurl="http://localhost:3000/images";
// private apiurl="https://localhost:44316/api/Images";
  constructor(private http:HttpClient) { }

 // Fetch data from dbs.json this is for assets/dbs.json 
  getImages(): Observable<{ images: Image[] }> {
  return this.http.get<{ images: Image[] }>('assets/dbs.json');
}

/*
  // this is for apiurl 
  getImages():Observable<Image[]>{
    return this.http.get<Image[]>(this.apiurl);
  }
  deleteImage(id:number):Observable<void>{
    return this.http.delete<void>(`${this.apiurl}/${id}`);
  }
 */   
}
