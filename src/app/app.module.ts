import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { MessageModule } from 'primeng/message';
import { MessageService } from 'primeng/api';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToastModule } from 'primeng/toast';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
// import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { CareersComponent } from './container/careers/careers.component';
import { LogInComponent } from './shared/log-in/log-in.component';
import { HeaderComponent } from './shared/header/header.component';
import { MainLayoutComponent } from './shared/main-layout/main-layout.component';
import { UserModuleModule } from './container/user-module/user-module.module';
import { CareersOverviewComponent } from './container/careers-overview/careers-overview.component';
@NgModule({
  declarations: [
    AppComponent,
    CareersComponent,
    LogInComponent,
    HeaderComponent,
    MainLayoutComponent,
    CareersOverviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MessageModule,
    ToastModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    // FlexLayoutModule,
    RouterModule,
    UserModuleModule
  ],
  providers: [
    provideClientHydration(),
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
