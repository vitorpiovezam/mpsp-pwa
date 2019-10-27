import { ReportService } from './../../core/services/report.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-searches',
  templateUrl: './my-searches.component.html',
  styleUrls: ['./my-searches.component.scss']
})
export class MySearchesComponent implements OnInit {
  reports = [] as any[];
  isLoading = true;

  constructor(private reportService: ReportService) { }

  ngOnInit() {
    this.reportService.getReports().subscribe(x => {
      this.isLoading = false;
      this.reports = x
    });
  }

  getPortalNames(report: {}) {
    console.log(report);
    return "salve";
  }

}
