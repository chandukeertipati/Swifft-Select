import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './shared/main-layout/main-layout.component';
import { CareersComponent } from './container/careers/careers.component';
import { CareersOverviewComponent } from './container/careers-overview/careers-overview.component';
import { JobApplyFormComponent } from './container/job-apply-form/job-apply-form.component';

const routes: Routes = [
  {
    path: "",
    component: MainLayoutComponent,
    children: [
      {
        path: "careers",
        component: CareersComponent
      },
      {
        path: "careers-overview/:id",
        component: CareersOverviewComponent
      },
      {
        path: "job-form",
        component: JobApplyFormComponent
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
