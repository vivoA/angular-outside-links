import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SidePanelService } from './side-panel.service';

@Component({
  selector: 'side-panel',
  templateUrl: './side-panel.component.html',
  styleUrls: ['./side-panel.component.scss']
})
export class SidePanelComponent implements OnInit {
  @Input() title:any;
  @Input() name:any;
  @Input() displayHeader:any;
  @Input() wideModal:any;
  @Output() SidePanelClosed: EventEmitter<any> = new EventEmitter();
  constructor(private sidePanelSer:SidePanelService) { }

  ngOnInit(): void {
  }


  onClose() {
    this.sidePanelSer.hide()
    this.SidePanelClosed.emit()
  }

}
