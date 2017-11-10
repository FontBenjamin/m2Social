import { Component, OnInit } from '@angular/core';
import { Post } from '../Post';
import { DataPostsService } from '../data-posts.service';

@Component({
  selector: 'app-ajout-post',
  templateUrl: './ajout-post.component.html',
  styleUrls: ['./ajout-post.component.css']
})
export class AjoutPostComponent implements OnInit {



  model:Post = new Post();
  

  constructor(private service :DataPostsService) {
    
   }
  
  onSubmit() { 
    this.model.id=undefined;
    this.service.create(this.model);
  }


  ngOnInit() {
    return this.service.get(1).subscribe(post => this.model = post);
  }
}
