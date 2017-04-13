import { Injectable } from '@angular/core';
 import { HEROES } from './mock-heroes';
 import { Hero } from './hero';
@Injectable()
export class HeroSearchService {
  getHeroes(): Promise<Hero[]> {
    return Promise.resolve(HEROES);
  }

  // See the "Take it slow" appendix
  getHeroesSlowly(): Promise<Hero[]> {
    return new Promise(resolve => {
      // Simulate server latency with 2 second delay
      setTimeout(() => resolve(this.getHeroes()), 2000);
    });
  }

   getHero(id: number): Promise<Hero> {
    return this.getHeroes()
               .then(heroes => heroes.find(hero => hero.id === id));
  }
}

/*
Copyright 2016 thoughtram GmbH. All Rights Reserved.
Use of this source code is governed by an TTML-style license that
can be found in the license.txt file at http://thoughtram.io/license.txt
*/
