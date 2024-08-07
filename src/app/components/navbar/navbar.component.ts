import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  isMenuOpen: boolean = false;
  constructor(private authService: AuthService,
              private router: Router
  ){}

  toggleMenu(){
    this.isMenuOpen = !this.isMenuOpen
  }

  get isLoggedIn() :boolean{
    return this.authService.isLoggedIn()
  }
  logout(){
    this.authService.logout()
    this.router.navigate(['/login'])
  }
}
