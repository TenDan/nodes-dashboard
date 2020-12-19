import {ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-metric',
  templateUrl: './metric.component.html',
  styleUrls: ['./metric.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MetricComponent implements OnChanges {
  private _value = 0;
  private _max = 100;

  get value(): number {
    return this._value;
  }

  @Input('used')
  set value(value: number) {
    if (isNaN(value)) {
      value = 0;
    }
    this._value = value;
  }

  get max(): number {
    return this._max;
  }

  @Input('available')
  set max(max: number) {
    if (isNaN(max)) max = 100;
    this._max = max;
  }

  isDanger() {
    return this.value / this.max > 0.7;
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.value && isNaN(changes.value.currentValue)) this._value = 0;
    if (changes.max && isNaN(changes.max.currentValue)) this._max = 0;
  }

}
