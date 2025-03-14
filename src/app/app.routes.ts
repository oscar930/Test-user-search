import { Routes } from '@angular/router';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { UserScoreGuard } from './guards/user-score.guard';

export const routes: Routes = [
  { path: '', component: UserListComponent },
  { path: 'user/:login', component: UserDetailComponent, canActivate: [UserScoreGuard] }
];