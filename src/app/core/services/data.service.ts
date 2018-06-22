import { Injectable, OnInit, EventEmitter } from '@angular/core';
import { CountriesUrl, baseApiUrl } from '../../core/core-data.service';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class DataService implements OnInit {

  constructor(private httpClient: HttpClient){

  }

  ngOnInit(){

  }

  // Emittng single post data
  getSinglePost = new EventEmitter<{ id, title, body }>();

  //Getting countries list from API
  getCountries(){
    return this.httpClient.get(CountriesUrl);
  }

  // Getting all posts
  getPosts(){
    return this.httpClient.get(baseApiUrl);
  }
 
  //Creating post
  createPost(model){
    return this.httpClient.post(baseApiUrl, model, { observe: 'response' });
  }

  // Updating post
  updatePost(id, model){
    return this.httpClient.patch(baseApiUrl + '/' + id, model, { observe: 'response' });
  }

  //Deleting post
  deletePost(id: number){
    return this.httpClient.delete(baseApiUrl + '/' + id, { observe: 'response' });
  }

  
  
}