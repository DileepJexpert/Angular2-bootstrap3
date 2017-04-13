
import { Component, OnInit } from '@angular/core';
import { HeroSearchService } from './hero.service';
import { Hero } from './hero';
@Component({
 templateUrl: './hero-dashboard.component.html',
  styleUrls: ['./hero-dashboard.component.css']
  })
export class HeroDashboardComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private heroService: HeroSearchService) { }

  ngOnInit(): void {
    this.heroService.getHeroes()
      .then(heroes => this.heroes = heroes.slice(1, 5));
  }
}

