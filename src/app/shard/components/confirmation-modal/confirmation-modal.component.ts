import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'confirmation-modal',
  templateUrl: './confirmation-modal.component.html',
  styleUrls: ['./confirmation-modal.component.scss']
})
export class ConfirmationModalComponent implements OnInit {
  @Input() modalContent:any
  @Input() btnContent:any
  @Output() confirm:EventEmitter<any>= new EventEmitter;

  constructor(private modal:NgbModal) { }

  ngOnInit(): void {
  }

  open(content:any) {
    this.modal.open(content);
  }
  
  confirmFun(){
    this.confirm.emit()
  }
}
