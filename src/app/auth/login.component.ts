import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [CommonModule, FormsModule, ReactiveFormsModule]
})
export class LoginComponent {
  loginForm: FormGroup;
  errorMessage: string = '';

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onLogin(): void {
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;
      
      // Chưa có backend, giả lập đăng nhập
      if (username === 'student' && password === '123') {
        localStorage.setItem('authToken', 'student-token');
        localStorage.setItem('role', 'STUDENT');
        this.router.navigate(['/student-dashboard']);
      } else if (username === 'tutor' && password === '123') {
        localStorage.setItem('authToken', 'tutor-token');
        localStorage.setItem('role', 'TUTOR');
        this.router.navigate(['/tutor-dashboard']);
      } else if (username === 'admin' && password === '123') {
        localStorage.setItem('authToken', 'admin-token');
        localStorage.setItem('role', 'ADMIN');
        this.router.navigate(['/admin-dashboard']);
      } else {
        this.errorMessage = 'Sai tài khoản hoặc mật khẩu!';
      }
    }
  }
}
