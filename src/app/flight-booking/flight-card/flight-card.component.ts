import { Flight } from '../../entities/flight';
import {
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    EventEmitter,
    Input,
    NgZone,
    OnChanges,
    OnInit,
    Output,
    ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'flight-card',
  templateUrl: './flight-card.component.html',
  styleUrls: ['./flight-card.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush 
})
export class FlightCardComponent implements OnInit {

  @Input() item: Flight;
  @Input() selected: boolean;
  @Output() selectedChange = new EventEmitter<boolean>();
  
  constructor(private element: ElementRef, private zone: NgZone) { }

  ngOnInit() {
  }

  select() {
    this.selected = true;
    this.selectedChange.next(true);
  }

  deselect() {
    this.selected = false;
    this.selectedChange.next(false);
  }

  blink() {
    // Dirty Hack used to visualize the change detector
    // let originalColor = this.element.nativeElement.firstChild.style.backgroundColor;
    this.element.nativeElement.firstChild.style.backgroundColor = 'crimson';
    //              ^----- DOM-Element

    this.zone.runOutsideAngular(() => {
      setTimeout(() => {
        this.element.nativeElement.firstChild.style.backgroundColor = 'white';
      }, 1000);
    });

    return null;
  }

}
