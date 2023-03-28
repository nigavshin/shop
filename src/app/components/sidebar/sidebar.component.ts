import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss',],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarComponent {
  open = false;

  readonly webApis = ['Common', 'Audio', 'Canvas', 'Geolocation', 'MIDI', 'Workers'];

  readonly tinkoff = [
    'Taiga-UI',
    'ng-event-plugins',
    'ng-polymorpheus',
    'ng-dompurify',
  ];

  toggle(open: boolean): void {
    this.open = open;
  }

  readonly testForm = new FormGroup({
    testValue: new FormControl(''),
  });
}
