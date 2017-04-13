import { Component, OnInit } from '@angular/core';
import { Http} from '@angular/http';
import { User } from '../shared/models/user';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
users:User[];
  constructor(private http:Http){}

   ngOnInit(){
    // grab user details
    this.http.get('https://reqres.in/api/users')
    .subscribe( data => {
     // console.log(data.json());
      this.users=data.json().data;
    //  console.log(this.users);
    }
    );
  }

}
