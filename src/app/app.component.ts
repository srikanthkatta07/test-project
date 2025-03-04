import { Component, Input, NgModule } from '@angular/core';
import { SmartTableComponent, SmartSearchComponent, SmartDatepickerComponent } from '@snovasys/snova-tailwind-uikit'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SmartTableComponent, SmartSearchComponent, SmartDatepickerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})

export class AppComponent {
  @Input() columnsArray = [
    { columnName: 'Email', columnKey: 'email', sticky:true , disableSort: true },
    { columnName: 'Subject', columnKey: 'subject', sticky:false, disableSort: true },
    { columnName: 'Sent Date Time', columnKey: 'sentDate', sticky:false, disableSort: true },
    { columnName: 'Sent Status', columnKey: 'sentStatus', sticky:false, disableSort: true },
    { columnName: 'Retry Count', columnKey: 'retryCount', sticky:false, disableSort: true },
  ];

  @Input() tableData = [
    { email: "sample@gmail.com", subject: "1231", sentDate: "1", sentStatus: 12, retryCount: "hyd" },
    { email: "sample@gmail.com", subject: "1231", sentDate: "1", sentStatus: 12, retryCount: "hyd" },
    { email: "sample@gmail.com", subject: "1231", sentDate: "1", sentStatus: 12, retryCount: "hyd" },
    { email: "sample@gmail.com", subject: "1231", sentDate: "1", sentStatus: 12, retryCount: "hyd" },
    { email: "sample@gmail.com", subject: "1231", sentDate: "1", sentStatus: 12, retryCount: "hyd" },
    { email: "sample@gmail.com", subject: "1231", sentDate: "1", sentStatus: 12, retryCount: "hyd" },
  ]

  @Input() selectedWeek = new Date();

  handleValueChange(event: HTMLInputElement) {
    console.log(event)
  }
}
