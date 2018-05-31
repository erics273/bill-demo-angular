import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-potato',
  templateUrl: './potato.component.html',
  styleUrls: ['./potato.component.css']
})
export class PotatoComponent implements OnInit {

  @Input() title;
  @Input() someDude;
  @Output() helloParent = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.updateAge()
  }

  updateAge(){
    if(this.someDude.age == 36){
      this.someDude.age += 4;
    }
  }

  clickedButtonForParentStuff(){
    this.helloParent.emit(this.someDude.name);
  }

}
