import { ReportService } from './../../core/services/report.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-searches',
  templateUrl: './my-searches.component.html',
  styleUrls: ['./my-searches.component.scss']
})
export class MySearchesComponent implements OnInit {
  reports: any;
  isLoading = true;

  constructor(private reportService: ReportService) { }

  ngOnInit() {
    this.reportService.getReports().subscribe(x => {
      this.isLoading = false;
      this.reports = Object.entries(x)
    });
  }

}
