import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Camera } from '@ionic-native/camera';
import { IonicPage, NavController, ViewController } from 'ionic-angular';
import {Http, Request, RequestMethod, URLSearchParams} from "@angular/http";
import {Headers} from '@angular/http';

@IonicPage()
@Component({
  selector: 'page-item-create',
  templateUrl: 'item-create.html'
})
export class ItemCreatePage {
  @ViewChild('fileInput') fileInput;
  http: Http;
  mailgunUrl: string;
  mailgunApiKey: string;
  isReadyToSave: boolean;

  item: any;

  form: FormGroup;

  constructor(public navCtrl: NavController, public viewCtrl: ViewController, formBuilder: FormBuilder, public camera: Camera, http: Http) {
    this.form = formBuilder.group({
      profilePic: [''],
      name: ['', Validators.required],
      email: ['',  Validators.required],
      cep: ['',  Validators.required],
    });
    this.http = http;
    this.mailgunUrl = "einfach.com.br";
    this.mailgunApiKey = window.btoa("api:key-89864462121901d4b58c4fe7879fcdff");
    
    // Watch the form for changes, and
    this.form.valueChanges.subscribe((v) => {
      this.isReadyToSave = this.form.valid;
    });
  }

  ionViewDidLoad() {

  }

  send(name: string, subject: string, message: string) {

    if (!this.form.valid) { return; }
    //alert(name);
   
    var requestHeaders = new Headers();
    var body = new URLSearchParams()
    body.append("from", 'rafael@einfach.com.br')
    body.append("to", 'rafael@einfach.com.br')
    body.append("subject", name)
    body.append("html", name)
    requestHeaders.append("Content-Type", "application/x-www-form-urlencoded");
    //requestHeaders.append('Access-Control-Allow-Origin', '*');
    //requestHeaders.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');
    //requestHeaders.append("Access-Control-Allow-Origin","*");
    return this.http.post(
      "https://api:key-89864462121901d4b58c4fe7879fcdff@api.mailgun.net/v3/einfach.com.br/messages",
      body, {headers: requestHeaders})
      .subscribe(
        data => console.log('Received:' + data),
        err => console.log(err),
        () => console.log('Call Complete')
      );


}

  getPicture() {
    if (Camera['installed']()) {
      this.camera.getPicture({
        destinationType: this.camera.DestinationType.DATA_URL,
        targetWidth: 150,
        targetHeight: 150
      }).then((data) => {
        this.form.patchValue({ 'profilePic': 'data:image/jpg;base64,' + data });
      }, (err) => {
        alert('Unable to take photo');
      })
    } else {
      this.fileInput.nativeElement.click();
    }
  }

  processWebImage(event) {
    let reader = new FileReader();
    reader.onload = (readerEvent) => {

      let imageData = (readerEvent.target as any).result;
      this.form.patchValue({ 'profilePic': imageData });
    };

    reader.readAsDataURL(event.target.files[0]);
  }

  getProfileImageStyle() {
    return 'url(' + this.form.controls['profilePic'].value + ')'
  }

  /**
   * The user cancelled, so we dismiss without sending data back.
   */
  cancel() {
    this.viewCtrl.dismiss();
  }

  /**
   * The user is done and wants to create the item, so return it
   * back to the presenter.
   */
  //done() {
  //  if (!this.form.valid) { return; }
  //  this.viewCtrl.dismiss(this.form.value);
 // }

}
