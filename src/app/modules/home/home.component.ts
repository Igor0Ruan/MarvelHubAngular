import { Component, OnInit } from '@angular/core';
import { CreatorService } from 'src/app/shared/services/creator.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  routes = {
    characters: { url: ['characters'] },
    comics: { url: ['comics'] },
    events: { url: ['events'] }
  };

  constructor(
    private creatorService: CreatorService
  ) { }

  ngOnInit(): void {
    // Getting the first data to fill the footer text
    this.creatorService.find(1).subscribe();
  }

}
