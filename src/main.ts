import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter, Routes } from '@angular/router';
import { appConfig } from './app/app.config';
import { provideHttpClient } from '@angular/common/http';
//import { UserListComponent } from './app/components/user-list/user-list.component';
import { UserDetailComponent } from './app/components/user-detail/user-detail.component';
import { importProvidersFrom } from '@angular/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';

const routes: Routes = [
  //{ path: '', component: UserListComponent },
  { path: 'user/:username', component: UserDetailComponent }
];


bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
     provideHttpClient(),
     importProvidersFrom(MatSnackBarModule)
    ]
}).catch(err => console.error(err));
