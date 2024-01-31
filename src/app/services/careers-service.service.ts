import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
export interface Job {
  id: number;
  role: string;
  location: string;
  type: string;
}
@Injectable({
  providedIn: 'root'
})
export class CareersServiceService {
  private jobs: Job[] = [
    { id: 1, role: 'Software Engineer', location: 'New York', type: 'Full-Time' },
    { id: 2, role: 'Data Analyst', location: 'San Francisco', type: 'Contract' },
    { id: 3, role: 'UI/UX Designer', location: 'London', type: 'Remote' },
    // Add more job data as needed
  ];

  constructor() { }

  getJobs(): Observable<Job[]> {
    return of(this.jobs);
  }
}
