import { Component, OnInit } from '@angular/core';
import { CareersServiceService, Job } from '../../services/careers-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrl: './careers.component.css'
})
export class CareersComponent implements OnInit {
  jobs: Job[] = [];

  constructor(private jobService: CareersServiceService, private router: Router) { }

  ngOnInit(): void {
    this.jobService.getJobs().subscribe(jobs => {
      this.jobs = jobs;
    });
  }

  onJobClick(): void {
    this.router.navigate(['/careers-overview']);
  }
}
