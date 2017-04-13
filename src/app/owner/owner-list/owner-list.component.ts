import { Component, OnInit } from '@angular/core';
import { Owner } from '../owner';
import { OwnerService } from '../owner.service';
import { Http} from '@angular/http';

@Component({
  selector: 'app-owner-list',
  templateUrl: './owner-list.component.html',
  styleUrls: ['./owner-list.component.css']
})
export class OwnerListComponent implements OnInit {
 owners:Owner[];
  constructor(private service:OwnerService,private http:Http) { }

  ngOnInit() {
      this.service.getOwners()
      .subscribe(owners => this.owners =owners);   

       this.http.get('http://reqres.in/api/users')
    .subscribe( data => {
     // console.log(data.json());
    
  });
  }
}
