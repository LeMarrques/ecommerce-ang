import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Login } from './login.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{

  loginForm: FormGroup;

  constructor(private fb: FormBuilder,
            private router: Router
  ) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

}

ngOnInit(): void {}

onLogin() {
  if (this.loginForm.valid) {
    const { username, password } = this.loginForm.value;

    if (username === 'admin' && password === '1234') {
      const loginData = new Login(username, password);
      this.router.navigateByUrl('/products');
    } else {
      console.log('Login falhou: credenciais inválidas');
    }
  } else {
    console.log('Login falhou: formulário inválido');
  }
}

}
