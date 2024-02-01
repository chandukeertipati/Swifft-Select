import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-job-apply-form',
  templateUrl: './job-apply-form.component.html',
  styleUrl: './job-apply-form.component.css'
})
export class JobApplyFormComponent {
  applyingFor!: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.applyingFor = params['role'];
    });
  }
}
