import { Component } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { AuthService } from '../../services/auth.service'; 
import Swal from 'sweetalert2';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  email: string =''
  password: string = ''
  constructor(private authService : AuthService, private router: Router){}

  onSubmit(event: Event){
    console.log(this.email, this.password)
    this.authService.register(this.email, this.password).subscribe(
      response => {
        if(response.ok){
          Swal.fire('User Register', response.msg, 'success')
          this.router.navigate(['/login'])
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
