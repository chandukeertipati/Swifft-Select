import { Component, Inject, OnInit } from '@angular/core';
import { CareersServiceService, Job } from '../../services/careers-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CareersOverviewService, JobDetail } from '../../services/careers-overview.service';

@Component({
  selector: 'app-careers-overview',
  templateUrl: './careers-overview.component.html',
  styleUrl: './careers-overview.component.css'
})
export class CareersOverviewComponent {
  jobDetail!: JobDetail;

  constructor(private router: Router, private route: ActivatedRoute, private jobOverview: CareersOverviewService) { }

  ngOnInit(): void {
    const jobIdParam = this.route.snapshot.paramMap.get('id');
    if (jobIdParam !== null) {
      const jobId = +jobIdParam;
      this.jobOverview.getJobDetailById(jobId).subscribe((jobDetail: JobDetail) => {
        this.jobDetail = jobDetail;
      });
    }
  }

  cancel(): void {
    this.router.navigate(['/careers']);
  }

  // applyNow(): void {
  //   this.router.navigate(['/job-form']);
  // }
  applyNow(): void {
    if (this.jobDetail) {
      this.router.navigate(['/job-form'], { queryParams: { role: this.jobDetail.positionOverview } });
    } else {
      // Handle case where jobDetail is not available
    }
  }
}

