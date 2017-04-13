import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray,FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-owner-details',
  templateUrl: './owner-details.component.html',
  styleUrls: ['./owner-details.component.css']
})
export class OwnerDetailsComponent implements OnInit {
orderForm: FormGroup;
  constructor (private formBuilder: FormBuilder) {
    this.orderForm = formBuilder.group({
      customerName: formBuilder.control(null),
      syrups: formBuilder.group({
        vanilla: formBuilder.control(null),
        caramel: formBuilder.control(null),
        hazelnut: formBuilder.control(null)
      }),
      specialRequests: formBuilder.array([
        formBuilder.control(null)
      ])
    });
  }
onsubmit(){
  console.log(this.orderForm.value)
}
  onAddSpecialRequest () {
    //this.orderForm.controls['specialRequests'].push(this.formBuilder.control(null));
  }
  ngOnInit() {
  }

}
