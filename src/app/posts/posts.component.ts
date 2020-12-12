import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../app.service';
import { User } from '../model/User';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {

  users:User[] = [];

  constructor(private appService: AppService, private router:Router) {}

  ngOnInit(): void {
    this.appService.getPosts().subscribe(response => {
      this.users = response;
    });
  }

  navigate(id:string) {
    this.router.navigate(['user', id]);
  }
}
