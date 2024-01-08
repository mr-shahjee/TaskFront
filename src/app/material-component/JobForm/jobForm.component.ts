import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, FormArray } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-jobForm',
  templateUrl: './jobForm.component.html',
  styleUrls: ['./jobForm.component.scss']
})
export class JobFormComponent implements OnInit {
  newItem: any;
  messages: any;
  @Input() itemEvent = new EventEmitter<string>();
  @Output() jobFormSubmitted = new EventEmitter<void>();

  store: any;
  date1: any;
  treatment: any;

  form: FormGroup;

  jobForm = new FormGroup({
    jobTitle: new FormControl(),
    expiry: new FormControl(),
    jobDuration: new FormControl(),
    jobDescription: this.fb.array([]),
    name: new FormControl(),
    email: new FormControl(),
  });

  gridData: any[] = [];

  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.form = this.fb.group({
      formlist: this.fb.array([]),
    });
  }

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
  addNewItem(value : string)
{
  this.itemEvent.emit(this.newItem);
}
  get jobDescriptionControls() {
    return (this.jobForm.get('jobDescription') as FormArray).controls;
  }

  onSubmit(): void {
    if (this.jobForm.valid) {
      const formData = this.jobForm.value;

      // Create a list with name and email
      const nameAndEmailList = {
        name: formData.name,
        email: formData.email,
      };

      this.authService.postJobForm({
        jobTitle: formData.jobTitle,
        expiry: formData.expiry,
        jobDuration: formData.jobDuration,
        jobDescription: [nameAndEmailList],
      }).subscribe({
        next: () => {
          console.log('Success');
          this.jobForm.reset(); // Reset the form after successful submission
          this.jobFormSubmitted.emit(); // Emit an event to notify the parent component
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
