import { NgClass, NgFor, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, NgClass, NgFor],
  providers: [MenuService],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
    
  menu: any[] = [];


  constructor(private menuService: MenuService) {}

  ngOnInit(): void {
    this.menu = this.menuService.getAllMenu();
  
  }
  
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  // animation css
  ngAfterViewInit(): void {
    const cards = document.querySelectorAll('.card-rtl, .card-up, .card-zoom-in'); 
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          (entry.target as HTMLElement).classList.add('visible');
          observer.unobserve(entry.target); 
        }
      });
    }, {
      threshold: 0.2
    });
  
    cards.forEach(card => observer.observe(card));
  }


  
  // scroll to section
  scrollToSection(sectionName: string) {
    const element = document.getElementById(sectionName);

    this.isMenuOpen = false;
    
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
  

}
