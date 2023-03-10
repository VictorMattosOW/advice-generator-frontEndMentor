import { Component, OnInit } from '@angular/core';
import { ConselhosService } from '../service/conselhos.service';
import { Conselhos } from './model/conselhos.model';

@Component({
  selector: 'app-conselhos',
  templateUrl: './conselhos.component.html',
  styleUrls: ['./conselhos.component.scss']
})

export class ConselhosComponent implements OnInit {

  conselho: Conselhos = {};
  isDevice = false;
  constructor(private conselhoService: ConselhosService) {}

  ngOnInit(): void {
    this.getConselho();
    this.isDevice = (window.screen.width < 600) ? true : false;
  }

  getConselho() {
    this.conselhoService.getConselho().subscribe({
      next: (ret: Conselhos) => {
        this.conselho = ret;
      },
      error: (error:any) => {
        console.error(error);
      }
    });
  }

}
