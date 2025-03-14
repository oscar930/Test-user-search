import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UsersService } from '../services/users.service';

@Injectable({
  providedIn: 'root'
})
export class UserScoreGuard implements CanActivate {
  constructor(private userService: UsersService) {}

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
    const username = route.paramMap.get('login')!;
    return this.userService.getUserDetails(username).pipe(
      map(user => user.score >= 30)
    );
  }
}