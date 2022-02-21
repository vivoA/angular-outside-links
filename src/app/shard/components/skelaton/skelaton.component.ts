import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-skelaton',
  templateUrl: './skelaton.component.html',
  styleUrls: ['./skelaton.component.scss']
})
export class SkelatonComponent implements OnInit {
  @Input() mode:any
  constructor() { }

  ngOnInit(): void {
  }

}
