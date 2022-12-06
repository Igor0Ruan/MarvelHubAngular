import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, timer } from 'rxjs';
import { mapTo, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-list-item-card',
  templateUrl: './list-item-card.component.html',
  styleUrls: ['./list-item-card.component.scss']
})
export class ListItemCardComponent implements OnInit {

  @Input() title = '';
  @Input() description = '';
  @Input() imgSrc = '';
  @Input() itemId = 0;
  @Input() routeUrl = [''];

  timeForLoadingShowValue= 2000;
  loadingShowValues$: Observable<boolean> = new Observable;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    this.setupTimeTitleShowValues()
  }

  goToItemPage(): void {
    this.router.navigate(this.routeUrl);
  }

  private setupTimeTitleShowValues() {
    this.loadingShowValues$ = timer(this.timeForLoadingShowValue).pipe(
      mapTo(false),
      startWith(true),
    );
  }
}
