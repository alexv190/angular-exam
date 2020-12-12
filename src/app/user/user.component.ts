import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AppService } from '../app.service';
import { UserResponse } from '../model/userResponse';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  id = '';
  user: UserResponse;
  myForm: FormGroup;

  constructor(
    private activeRoute: ActivatedRoute,
    private appService: AppService,
    private fb: FormBuilder
  ) {
    //FormBuilder используется вместо конструктора new FormGroup({...})
    this.myForm = fb.group({
      //создает группу
      fio: '',
      email: '',
      street: '',
      suite: '',
      city: '',
      zip: '',
      phone: '',
      web: fb.control(''),
    });
  }

  ngOnInit(): void {
    this.getParam();
  }

  getParam() {
    this.activeRoute.params.subscribe((e) => {
      this.id = e['id'];
      this.appService.getUser(this.id).subscribe((response) => {
        this.user = response;
        this.myForm.patchValue({
          fio: this.user.name,
          email: this.user.email,
          street: this.user.address.street,
          suite: this.user.address.suite,
          city: this.user.address.city,
          zip: this.user.address.zipcode,
          phone: this.user.phone,
          web: this.user.website,
        });
        this.myForm.markAllAsTouched();
      });
     
    });
  }
}
