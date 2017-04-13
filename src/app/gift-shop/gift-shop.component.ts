import {
    NgModule,
    Component,
    Pipe,
    OnInit
} from '@angular/core';
import {
    ReactiveFormsModule,
    FormsModule,
    FormGroup,
    FormControl,
    Validators,
    FormBuilder
} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
@Component({
  selector: 'app-gift-shop',
  templateUrl: './gift-shop.component.html',
  styleUrls: ['./gift-shop.component.css']
})
export class GiftShopComponent implements OnInit {
 parent: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

form =this.formBuilder.group({
  userDetails: this.formBuilder.group({
    firstname: ['', [Validators.required, Validators.minLength(5)]],
  }),
});
  ngOnInit() {
  }

}
