import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-moreimg',
  templateUrl: './moreimg.component.html',
  styleUrls: ['./moreimg.component.css']
})
export class MoreimgComponent implements OnInit {

  constructor() {
  
  filterSelection("all")
  function filterSelection(c) {
    var x, i;
    x = document.getElementsByClassName("column");
    if (c == "all") c = "";
    // for (i = 0; i < x.length; i++) {
    //   w3RemoveClass(x[i], "show");
    //   if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
    // }
  }
   }

  ngOnInit() {
  }

}
