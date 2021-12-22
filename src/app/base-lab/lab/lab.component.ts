import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LabApiService } from 'src/app/service/lab-api.service';
import { Lab } from '../../models/lab.model';


@Component({
  selector: 'app-lab',
  templateUrl: './lab.component.html',
  styleUrls: ['./lab.component.scss']
})
export class LabComponent implements OnInit {

 

  lab: Lab;

  labData: Lab[] = [];

  isReadOnly: boolean = true;

  isEditable: boolean = false;

  labForm:FormGroup;

 

  constructor(
    private labApi: LabApiService,
    private router: Router,
    private fb: FormBuilder) { }


  ngOnInit() {

    this.labApi.getLog().subscribe((data :any[]) => {
      this.labData = data;
    });

    this.labForm = this.fb.group({
      id: ['', Validators.required],
      date: ['', Validators.required],
      temp: ['', Validators.required],
      templow: ['', Validators.required],
      humid: ['', Validators.required],
      humidlow: ['', Validators.required],
    });

    
  }
   

  editLab() {
    this.isEditable = !this.isEditable;
  }

  saveLab() {
    console.log(this.labForm.value);

    this.labApi.editLog(this.labForm.value , this.lab._id).subscribe(data =>{
      this.router.navigateByUrl('/id');
    });
  }
  
  cancelLab() {

  }

}
