import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../services/menu.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [NgIf, NgFor, RouterModule],
  providers: [MenuService],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent implements OnInit{
    
  title: string = '';
  category: any;

  constructor(private route: ActivatedRoute, private menuService: MenuService, private router: Router) {}

  ngOnInit(): void {
    this.title = this.route.snapshot.paramMap.get('title') || '';
    this.category = this.menuService.getAllMenu().find(cat => cat.title === this.title);
  }

  keys(obj: { [key: string]: number }): string[] {
    return this.menuService.getKeys(obj);
  }


  BackToMenu() {
    this.router.navigate(['/home']).then(() => {
      const menuSection = document.getElementById('menu');
      if (menuSection) {
        menuSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
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






}
