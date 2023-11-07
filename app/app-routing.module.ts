import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { IndexSystemComponent } from './pages/index-system/index-system.component';
import { UserRegisterComponentComponent } from './pages/user-register-component/user-register-component.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    data: {
      title: 'Login',
    },
  },
  {
    path: 'home',
    component: IndexSystemComponent,
    data: {
      title: 'Inicio',
    },
  },
  {
    path: 'user-register',
    component: UserRegisterComponentComponent,
    data: {
      title: 'Registro de Usuario',
    },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
