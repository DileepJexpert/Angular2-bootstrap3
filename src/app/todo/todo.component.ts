import { Component, OnInit ,OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
 
import { MessageService } from './message.service';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnDestroy  {
     message: any;
    subscription: Subscription;
 
    constructor(private messageService: MessageService) {
        // subscribe to home component messages
        this.subscription = this.messageService.getMessage().subscribe(message => { this.message = message; });
    }
 
    ngOnDestroy() {
        // unsubscribe to ensure no memory leaks
        this.subscription.unsubscribe();
    }
}
