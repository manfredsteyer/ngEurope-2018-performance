import { Flight } from './entities/flight';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { Subject } from 'rxjs/Subject';

export class FlightEventService {
    flightSelected = new ReplaySubject<Flight>(30);
}