import { DOCUMENT } from '@angular/common';
import { Component, EventEmitter, HostListener, Inject, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service'; 

@Component({
  selector: 'app-jobForm',
  templateUrl: './jobForm.component.html',
  styleUrls: ['./jobForm.component.scss']
})
export class JobFormComponent implements OnInit {
  newItem:any;
  messages: any
  @Input() itemEvent = new EventEmitter<string>();

  
  store:any
  date1: any
  treatment: any
  form: FormGroup;
  constructor(private fb: FormBuilder, private authService: AuthService ) {
    this.form = this.fb.group({
      formlist: this.fb.array([]),
    })

   }
   jobForm = new FormGroup({

    // jobTitle: new FormControl('', [Validators.required]),
    // expiry: new FormControl('', [Validators.required]),
    jobTitle: new FormControl(),
    expiry: new FormControl(),
    jobDuration: new FormControl(),
    jobDescription: this.fb.array([])

  });




  gridData: []
  ngOnInit(): void {
 
    this.authService.getJobForm().subscribe({
      next: (res: any) => {
        this.gridData = res;
        console.log(this.gridData)
        //alert("Data submitted Successfully!")
      },
      error: () => {
        //alert("error")
      }
    })
  }
  formData(): FormArray {
    return this.form.get('formlist') as FormArray;
  }

addNewItem(value : string)
{
  this.itemEvent.emit(this.newItem);
}




onSubmit(): void {
  debugger
  if (this.jobForm.valid) {
    const formData = this.jobForm.value;

    // Create a list with name and email
    const nameAndEmailList = [formData.name, formData.email];

    this.authService.postJobForm({
      jobTitle: formData.jobTitle,
      expiry: formData.expiry,
      jobDuration: formData.jobDuration,
      jobDescription: nameAndEmailList
    }).subscribe({
      next: (res) => {
        console.log("Success");
      },
      error: () => {
       // window.location.reload();
      }
    });
  }
}

  field(): FormGroup {
    return this.fb.group({
      name: '',
      email: '',
      subject: '',
      file: '',
      msg: '',
    });
  }
   /**
   * Add field in form
   */
   addField() {
    this.formData().push(this.field());
  }
 
}
