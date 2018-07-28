import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  example: any = [1,2,3,4];
  constructor() {

      
   }

  ngOnInit() {
  }

  ngAfterViewInit(){
    let elements: NodeListOf<Element> = document.getElementsByClassName("board");
      let width =  elements.length * 320;

      let boardsElement = document.getElementById("boards") as HTMLBaseElement;

      boardsElement.style.width = width + "px";
  }

}
