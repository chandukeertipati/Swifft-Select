import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Swiftt-Select';
  constructor(private messageService: MessageService) { }
  showSuccess() {
    this.messageService.add({ severity: 'success', summary: 'Success Message', detail: 'Operation successful' });
  }
  showInfo() {
    this.messageService.add({ severity: 'info', summary: 'Info', detail: 'Message Content' });
  }
  showWarn() {
    this.messageService.add({ severity: 'warn', summary: 'Warn', detail: 'Message Content' });
  }
  showError() {
    this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Message Content' });
  }
}
