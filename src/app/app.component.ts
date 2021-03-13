import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  //props
  password = '';
  name='outputBox';
  note = 'Tap to copy the Password.';

  //methods
  onButtonClick(){
    this.password = '@dsgd56&*';
  }

  getPassword(){
    return this.password;
  }

  getNote(){
    return this.note;
  }
}
