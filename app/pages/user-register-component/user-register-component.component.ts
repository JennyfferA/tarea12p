import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-register-component',
  templateUrl: './user-register-component.component.html',
  styleUrls: ['./user-register-component.component.css']
})
export class UserRegisterComponentComponent implements OnInit {

  registerForm: any;

  constructor(private fb: FormBuilder, private router: Router,) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      nombre: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mobile: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      password: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(10)]],
      role: ['', Validators.required],
    });
  }

  registerUser() {
    if (this.registerForm.valid) {
      Swal.fire({
        title: 'Éxito',
        text: 'Registro correcto del nuevo especialista.',
        icon: 'success',
        position: 'top-end',
        toast: true,
        showConfirmButton: false,
        timer: 3000,
      })
      this.router.navigate(['/home'])
    } else {
      Swal.fire({
        title: 'Error',
        text: 'Por favor, completa correctamente el formulario.',
        icon: 'error',
        position: 'top-end',
        toast: true,
        showConfirmButton: false,
        timer: 3000,
      });
    }
  }

}
