import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroSearchService } from './hero.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
   
})
export class HeroComponent implements OnInit {
  heroesArray : Hero[];
  selectedHero: Hero;
  clickMessage = '';
  values = '';
 title = 'Tour of Heroes';
  heroes = ['JAICKY', 'MIA SAHAB', 'AMIR', 'DILEEP'];
  heroesss = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
   heroess = [
    new Hero(1, 'Windstorm'),
    new Hero(13, 'Bombasto'),
    new Hero(15, 'Magneta'),
    new Hero(20, 'Tornado')
  ];

  
  myHero = this.heroes[0];
  constructor(private heroSearchService: HeroSearchService) { }

   ngOnInit(): void {
    this.getHeroes();
  }

 onClickMe() {
    this.clickMessage = 'button clicked from component!';
  }

   onKey(event: any) { // without type info
    this.values += event.target.value + ' | ';
  }
   value = '';
  onEnter(value: string) { this.value = value; }

   update(value: string) { this.value = value; }

  addHero(newHero: string) {
    if (newHero) {
      console.log(newHero)
      this.heroesss.push(newHero);
    }
  }
onSelect(hero: Hero): void {
  this.selectedHero = hero;
  console.log(this.selectedHero.id);
}
 getHeroes(): void {
    this.heroSearchService.getHeroes().then(heroesArray => this.heroesArray = heroesArray);
  }

}


