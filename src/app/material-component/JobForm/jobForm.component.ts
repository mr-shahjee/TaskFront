import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, FormArray } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-jobForm',
  templateUrl: './jobForm.component.html',
  styleUrls: ['./jobForm.component.scss']
})
export class JobFormComponent implements OnInit {
  // newItem: any;
  // messages: any;
  //@Input() itemEvent = new EventEmitter<string>();
  //@Output() jobFormSubmitted = new EventEmitter<void>();

  // store: any;
  // date1: any;
  // treatment: any;

  form: FormGroup;

  jobForm = new FormGroup({
    jobTitle: new FormControl(),
    expiry: new FormControl(),
    jobDuration: new FormControl(),
    jobDescription: this.fb.array([]),
   // name: new FormControl(),
   // email: new FormControl(),
  });

  gridData: any[] = [];
// Define customFields array

  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.form = this.fb.group({
      formlist: this.fb.array([]),
    });
  }

//   customFields: { name: string, label: string, type: string }[] = [];
//  // Method to add custom fields
//  // Method to add custom fields
// addCustomField() {
//   const customFieldName = prompt('Enter custom field name:');
//   if (customFieldName !== null) {
//     const customFieldLabel = prompt('Enter custom field label:');
//     const customFieldType = prompt('Enter custom field type (text, email, etc.):');

//     if (customFieldLabel !== null && customFieldType !== null) {
//       this.customFields.push({
//         name: customFieldName,
//         label: customFieldLabel,
//         type: customFieldType
//       });
//     } else {
//       // Handle the case where the user cancels or enters nothing for label or type
//       // You can provide an error message or take appropriate action
//     }
//   } else {
//     // Handle the case where the user cancels or enters nothing for the field name
//     // You can provide an error message or take appropriate action
//   }
// }





  ngOnInit(): void {
    this.authService.getJobForm().subscribe({
      next: (res: any) => {
        this.gridData = res;
        console.log(this.gridData);
      },
      error: () => {
        // Handle error
      }
    });
  }
  formData(): FormArray {
    return this.form.get('formlist') as FormArray;
  }
//   addNewItem(value : string)
// {
//   this.itemEvent.emit(this.newItem);
// }
  get jobDescriptionControls() {
    return (this.jobForm.get('jobDescription') as FormArray).controls;
  }

  // onSubmit(): void {
  //   if (this.jobForm.valid) {
  //     const formData = this.jobForm.value;

  //     // Create a list with name and email
  //     const nameAndEmailList = {
  //       name: formData.name,
  //       email: formData.email,
  //     };

  //     this.authService.postJobForm({
  //       jobTitle: formData.jobTitle,
  //       expiry: formData.expiry,
  //       jobDuration: formData.jobDuration,
  //       jobDescription: [nameAndEmailList],
  //     }).subscribe({
  //       next: () => {
  //         console.log('Success');
  //         this.jobForm.reset(); // Reset the form after successful submission
  //         this.jobFormSubmitted.emit(); // Emit an event to notify the parent component
  //       },
  //       error: () => {
  //         // Handle error
  //       }
  //     });
  //   }
  // }

  onSubmit(): void {
    debugger;
    if (this.jobForm.valid) {
      const formData = this.jobForm.value;
  
      // Extracting data from the form array
      const jobDescriptions = this.form.value.formlist.map((item: any) => {
        return {
          name: item['name'],
          email: item['email'],
        };
      });
  
      // Update the form value with the correctly formatted jobDescription
      this.jobForm.patchValue({ jobDescription: jobDescriptions });
  
      this.authService.postJobForm({
        jobTitle: formData.jobTitle,
        expiry: formData.expiry,
        jobDuration: formData.jobDuration,
        jobDescription: jobDescriptions,
      }).subscribe({
        next: () => {
          console.log('Success');
          this.jobForm.reset();
          //this.jobFormSubmitted.emit();
        },
        error: () => {
          // Handle error
        }
      });
    }
  }
  

  field(): FormGroup {
    return this.fb.group({
      name: '',
      email: '', 
    });
  }

  addField() {
    this.formData().push(this.field());
  }
}
