import { Transferencia } from './../models/transfer.model';

import { Component, EventEmitter, Output } from "@angular/core";
import { TransferService } from '../services/transfer.service';
import { Router } from '@angular/router';

@Component({
    selector:'app-new-transfer',
    templateUrl:'./new-transfer.component.html',
    styleUrls:['./new-transfer.component.scss']
})
export class NewTransferComponent {

  @Output() whenTransfer = new EventEmitter<any>();

  value: number;
  destiny: number;

  constructor(private service: TransferService, private router: Router) {

  }

  transfer() {
    console.log('Requested new transfer');

    const valueEmit: Transferencia = {value: this.value, destiny: this.destiny};

    this.service.addNewTransfer(valueEmit).subscribe((result) => {
      console.log(result);
      this.clearFields();
      this.router.navigateByUrl('extract');
    },
    (error) => console.error(error)
    );
  }

  clearFields() {
    this.value = 0;
    this.destiny = 0;
  }
}
