import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Padlock } from '../models/padlock';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PadlockService {

  constructor( private http: HttpClient) { }
  getPadlocks(){
    return this.http.get(environment.apiUrl+"padlock/all")

    //return this.http.get(environment.apiUrl+"padlock/all")
  
  }
  addPadlock(item):Observable<Padlock>{
    return this.http.post<Padlock>(environment.apiUrl+"padlock/add" , item)

  }
  getItem(id): Observable<Padlock> {
    return this.http
      .get<Padlock>(environment.apiUrl+"padlock/find" + '/' + id)
  }


  updatePadlock(id, item): Observable<Padlock> {
    return this.http
      .put<Padlock>(environment.apiUrl+"padlock/update"+ '/' + id, item)
  }

  // Delete item by id
  deletePadlock(id) {
    return this.http
      .delete<Padlock>(environment.apiUrl+"padlock/delete" + '/' + id)
      
      
  }
}