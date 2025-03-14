import { Component, inject, signal } from '@angular/core';
import { UsersService, User } from '../../services/users.service';
import { NgFor } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UserSearchComponent } from '../user-search/user-search.component';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-user-list',
  imports: [NgFor, RouterModule, UserSearchComponent, MatTableModule, MatToolbarModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent {
  private userService = inject(UsersService);
  users = signal<User[]>([]);
  displayedColumns = ['avatar', 'username', 'id'];


  searchUsers(query: string) {
    this.userService.searchUsers(query).subscribe(response => {

      this.users.set(response.items.slice(0,10));
    });
  }

}
