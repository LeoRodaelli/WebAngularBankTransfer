import { Transferencia } from './../models/transfer.model';
import { TransferService } from './../services/transfer.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-extract',
  templateUrl: './extract.component.html',
  styleUrls: ['./extract.component.scss']
})
export class ExtractComponent implements OnInit {

  transfers: any[];

  constructor(private service: TransferService) {
  }

  ngOnInit() {
    this.service.allTransfers().subscribe((transfers: Transferencia[]) => {
      console.table(transfers);
      this.transfers = transfers;
    })
  }
}
