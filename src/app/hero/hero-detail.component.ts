import { Component, Input ,OnInit  } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import { HeroSearchService } from './hero.service';
import { Hero } from './hero';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'hero-detail',
  templateUrl: './hero-detail.component.html',
   styleUrls: ['./hero.component.css']
})
export class HeroDetailComponent implements OnInit{
  hero: Hero;
// @Input() heroInput: Hero;

  ngOnInit(): void {
  this.route.params
    .switchMap((params: Params) => this.heroService.getHero(+params['id']))
    .subscribe(hero => this.hero = hero);
}

  


  constructor(
  private heroService: HeroSearchService,
  private route: ActivatedRoute,
  private location: Location
) {}
}



/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/