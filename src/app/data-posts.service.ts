import { Injectable } from '@angular/core';
import {Post} from './Post';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/retry';
@Injectable()
export class DataPostsService {


  constructor(private http:HttpClient) { }
  
   
    create(post :Post) :void {
      this.http.post<Post>('api/posts/',post).subscribe();
    }
   
  
    getAll():Observable<Post[]>{
  
      return this.http.get<Post[]> ('api/posts').retry(3);
    }
  
    get(id : number):Observable<Post>{
      
      return this.http.get<Post> (`api/posts/`+id).retry(3);
    }
}
