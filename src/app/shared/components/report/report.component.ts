import { Component, OnInit, Input, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {
  @Input()
  report: {};

   @Inject(DOCUMENT) private document: Document;

  reportEntries= [] as any[];
  
  constructor() { }

  ngOnInit() {
    this.reportEntries = Array.from(Object.entries(this.report));
    this.reportEntries.shift();
  }

  print() {
    window.print();
  }

}
