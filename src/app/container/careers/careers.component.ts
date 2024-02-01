import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CareersServiceService, Job } from '../../services/careers-service.service';
import { Router } from '@angular/router';
import { CareersOverviewComponent } from '../careers-overview/careers-overview.component';
import { CareersOverviewService, JobDetail } from '../../services/careers-overview.service';

@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrl: './careers.component.css'
})
export class CareersComponent implements OnInit {
  jobs: Job[] = [];

  constructor(private jobService: CareersServiceService, private jobOverview: CareersOverviewService, private router: Router, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.jobService.getJobs().subscribe(jobs => {
      this.jobs = jobs;
    });
  }
  // openJobDetailDialog(jobId: number): void {
  //   this.jobOverview.getJobDetailById(jobId).subscribe((jobDetail: JobDetail) => {
  //     const dialogRef = this.dialog.open(CareersOverviewComponent, {
  //       width: '600px',
  //       data: jobDetail
  //     });
  //   });
  // }
  goToJobDetail(jobId: number): void {
    this.router.navigate(['/careers-overview', jobId]); // Assuming the route for job detail component is '/job-detail/:id'
  }
  onJobClick(): void {
    this.router.navigate(['/careers-overview']);
  }
}
