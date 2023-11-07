import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index-system',
  templateUrl: './index-system.component.html',
  styleUrls: ['./index-system.component.css']
})
export class IndexSystemComponent implements OnInit {
  person: any; // Define un objeto para almacenar los datos de la persona
  currentUser: any;

  constructor(private router: Router) {
    // Inicializa los datos de la persona (puedes cambiar estos valores según tus necesidades)
    this.person = {
      nombre: 'Katherine Sánchez',
      edad: '17 años',
      telefono: '0981516113',
      nacionalidad: 'Ecuatoriana',
      gradoDiscapacidad: 'Bajo',
      imagenUrl: '../../assets/img/1.jpg'
    };

    const storedUser = localStorage.getItem('currentUser');
    if (storedUser) {
      this.currentUser = JSON.parse(storedUser);
    }
  }

  ngOnInit(): void {
  }

  logout() {
    // Elimina el usuario actual del localStorage
    localStorage.removeItem('currentUser');

    // Redirige al usuario a la página de inicio de sesión (por ejemplo, 'login')
    this.router.navigate(['']);
  }
}
