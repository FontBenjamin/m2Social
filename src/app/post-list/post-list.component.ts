import { Component, OnInit } from '@angular/core';
import {DataPostsService} from '../data-posts.service';
import { Post } from '../Post';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  posts: Post[];

  constructor(private service: DataPostsService) { }

  ngOnInit() {
    this.service.getAll().subscribe(posts => this.posts = posts);
  }

}
