import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  
  //receiving props from parent(app component)
  @Input() title = 'default';
  @Input() imageUrl = 'default';
  @Input() username = 'default';
  @Input() content = 'default';

  constructor() { }

  ngOnInit(): void {
  }

}
