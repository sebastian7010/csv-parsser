import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {
  email: string =''
  password: string = ''

  constructor(private authservice : AuthService, 
              private router: Router) {}
  

  Login():void{
    this.authservice.login(this.email, this.password).subscribe(
      response => {
        if(response.ok){
          Swal.fire('user login',response.mg,)
          sessionStorage.setItem('token', response.token)
          this.router.navigate(['/csv-home'])
        } else{
          Swal.fire('error',response.error.msg,'error')
        }
        console.log(`ejecutado desde respuesta`)
        console.log(response)
      },
      error => {
        Swal.fire('error',error.error.msg,'error')
      }
    )
  }
}
