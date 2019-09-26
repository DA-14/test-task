import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-input-indicator',
  templateUrl: './input-indicator.component.html',
  styleUrls: ['./input-indicator.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputIndicatorComponent {
  @Input() inputValue: number;
}
