import { Component ,OnInit} from '@angular/core';
 import {FormBuilder,Validators ,FormGroup,FormArray} from '@angular/forms';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit  {
 constructor(private formBuilder: FormBuilder) { }
 userFormGroup:FormGroup;
       ngOnInit ()
  {
     this.userFormGroup = this.formBuilder.group({
      firstName:'',
       lastName:'',
     })
     this.userFormGroup.setValue({
       "firstName":"shivani",
       "lastName":"chaudhari"
     })
}

reset()
{
  this.userFormGroup.reset();
}
patchvalue()
{
  this.userFormGroup.controls.firstName.patchValue("hello");
}
submit()
{
  console.log(this.userFormGroup.value);
}
}