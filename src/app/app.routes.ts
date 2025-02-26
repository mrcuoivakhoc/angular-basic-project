import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login.component';
import { BlogComponent } from './blog/blog.component';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'blog', component: BlogComponent },
];
