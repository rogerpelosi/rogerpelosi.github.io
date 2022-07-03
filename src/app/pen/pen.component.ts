import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-pen',
  templateUrl: './pen.component.html',
  styleUrls: ['./pen.component.css']
})
export class PenComponent implements OnInit {
  @ViewChild('blog') a: any;
  constructor() { }

  ngOnInit(): void {
  }

  addShadow(){
    this.a.nativeElement.classList.add('shadow');
  }

  removeShadow(){
    this.a.nativeElement.classList.remove('shadow');
  }

}
