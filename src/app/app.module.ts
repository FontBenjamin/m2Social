import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { PostListComponent } from './post-list/post-list.component';
import {DataPostsService} from './data-posts.service';
import { BienvenueComponent } from './bienvenue/bienvenue.component';
import { FooterComponent } from './footer/footer.component';
import { AjoutPostComponent } from './ajout-post/ajout-post.component';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    BienvenueComponent,
    FooterComponent,
    AjoutPostComponent,
    
  ],
  imports: [
    BrowserModule,HttpClientModule,CommonModule,FormsModule,                               // <========== Add this line!
    ReactiveFormsModule
  ],
  providers: [DataPostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
