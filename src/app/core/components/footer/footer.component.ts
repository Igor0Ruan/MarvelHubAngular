import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CoreService } from 'src/app/shared/services/core.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  footerText!: String;


  constructor(
    private coreService: CoreService
  ) { }

  ngOnInit(): void {
    this.coreService.footerText$.subscribe(text => this.footerText = text);
  }
}
