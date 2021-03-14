import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  //props
  length = 0;
  password = '';
  name='outputBox';
  note = 'Tap to copy the Password.';
  includeLetters = false;
  includeNumbers = false;
  includeSymbols = false;

  //methods
  onChangeLength(value: string){
    const parsedValue = parseInt(value);
    if(!isNaN(parsedValue)){
      this.length = parsedValue;
    }
  }

  onChangeUseLetters(){
    this.includeLetters = !this.includeLetters;
  }

  onChangeUseNumbers(){
    this.includeNumbers = !this.includeNumbers;
  }

  onChangeUseSymbols(){
    this.includeSymbols = !this.includeSymbols;
  }

  onButtonClick(){
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '1234567890';
    const symbols = '!@#$%^&*()';
    
    let validChar = '';

    if(this.includeLetters)
      validChar += letters; 
    if(this.includeNumbers)
      validChar += numbers;
    if(this.includeSymbols) 
      validChar += symbols;

    let generatedPassword = '';
    for(let i = 0; i < this.length; i++){
      console.log(Math.floor(Math.random() * 50));
      const index = Math.floor(Math.random() * validChar.length);
      generatedPassword += validChar[index];
      this.password = generatedPassword;
    }
    
  }

  getPassword(){
    return this.password;
  }

  getNote(){
    return this.note;
  }
}
