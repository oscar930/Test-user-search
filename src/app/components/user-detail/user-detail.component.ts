import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterModule  } from '@angular/router';
import { UsersService, User } from '../../services/users.service';
//import { NgIf } from '@angular/common';

@Component({
  selector: 'app-user-detail',
  imports: [ RouterModule],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.css'
})
export class UserDetailComponent {
  
  private usersService = inject(UsersService);
  private route = inject(ActivatedRoute);

  user = signal<User | null>(null);

  constructor() {
    const username = this.route.snapshot.paramMap.get('username');
    console.log(username);
    console.log(this.route.snapshot.paramMap);
    if (username) {
    this.usersService.getUserDetails(username).subscribe(response => {
      console.log(response);
      this.user.set(response);
    });
  }
}

}
