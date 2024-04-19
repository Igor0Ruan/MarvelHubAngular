import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoreService {
  footerText$: BehaviorSubject<String> = new BehaviorSubject<String>('');

  constructor(
  ) { }
}
