import { Component, OnInit } from '@angular/core';
// new
import { FormControl, FormBuilder, FormGroup, Validators, AbstractControl, EmailValidator } from '@angular/forms';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

export class ContactComponent implements OnInit {

  form: FormGroup;

  constructor(private _fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.form = this._buildForm();
  }

  submit(form: FormGroup) {
    console.log(form);
  }

  get name() {
    return <FormControl>this.form.get('name');
  }

  get furigana() {
    return <FormControl>this.form.get('furigana');
  }

  get email() {
    return <FormControl>this.form.get('email');
  }

  get tel() {
    return <FormControl>this.form.get('tel');
  }

  get content() {
    return <FormControl>this.form.get('content');
  }


private _buildForm(): FormGroup {
  return this._fb.group({
    name: ['', [Validators.required, Validators.pattern('[a-zA-Zぁ-んァ-ン一-龥]*')]],
    furigana: ['', [Validators.required , Validators.pattern('[ぁ-ん]*')]],// your_nameがa-zA-Zなら、notrequiredに
    //誰も回答を見つけることができなかったものです。この難題にあなたは解けることができる
    email: ['', [Validators.required,Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")]] ,
    //match emailの記述が発見できませんでした。のちの人にお願いいたします。
    // email_check: ['', [Validators.required , Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
    content: ['', [Validators.required]],
    tel: ['', [Validators.pattern("[A-Z0-9]*")]]
  })
}

//SQLインジェクション対策をする。
//https://qiita.com/mas0061/items/c2e9cd0d27e09448d28e
}
function matchEmail(ac: AbstractControl) {
  const email = ac.get('email').value;
  const emailCheck = ac.get('email_check').value;
  if (email !== emailCheck) {
    ac.get('email_check').setErrors({ notMatchEmail: true });
  }
}
