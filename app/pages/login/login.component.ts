import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = {
    email: '',
    password: '',
    rememberMe: false
  };

  // CREDENCIALES

  users = [
    { email: 'admin@example.com', password: '12345', role: 'admin' },
    { email: 'especialista@example.com', password: '123456', role: 'especialista' }
  ];

  constructor(
    private router: Router,
  ) {
  }

  ngOnInit(): void {
  }

  login() {
    if (!this.user.email || !this.user.password) {

      Swal.fire({
        title: 'Error',
        text: 'Ambos campos son obligatorios',
        icon: 'error',
        position: 'top-end',
        toast: true,
        showConfirmButton: false,
        timer: 3000,
      });
      return;
    }

    const foundUser = this.users.find(
      (u) => u.email === this.user.email && u.password === this.user.password
    );

    if (foundUser) {

      localStorage.setItem('currentUser', JSON.stringify(foundUser));

      if (foundUser.role === 'admin') {
        Swal.fire({
          title: 'Éxito',
          text: 'Tus credenciales son correctas, Administrador',
          icon: 'success',
          position: 'top-end',
          toast: true,
          showConfirmButton: false,
          timer: 3000,
        })
        this.router.navigate(['/home'])
      } else if (foundUser.role === 'especialista') {

        Swal.fire({
          title: 'Éxito',
          text: 'Tus credenciales son correctas, Especialista',
          icon: 'success',
          position: 'top-end',
          toast: true,
          showConfirmButton: false,
          timer: 3000,
        })
        this.router.navigate(['/home'])
      }
    } else {

      Swal.fire({
        title: 'Error',
        text: 'Tus credenciales son incorrectas',
        icon: 'error',
        position: 'top-end',
        toast: true,
        showConfirmButton: false,
        timer: 3000,
      });
    }

  }
}
