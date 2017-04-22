import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
  posts: any;
  constructor(public navCtrl: NavController, public http: Http) {
    this.http.get('http://agromas.com.ar/api/app').map(res => res.json()).subscribe(data => {
      this.posts = data;
      console.log(data);
    });
  }
}
