import { Component,OnInit } from '@angular/core';
import { Http} from '@angular/http';
import { User } from './shared/models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  users: User[];
  title = 'app works!';
  constructor(private http:Http){}
  ngOnInit(){
    // grab user details
    this.http.get('https://reqres.in/api/users')
    .subscribe( data => {
      console.log(data.json());
      this.users=data.json().data;
      console.log(this.users);
    }
    );
  }
}
