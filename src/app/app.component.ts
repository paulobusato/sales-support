import { Component, OnInit } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';
import { SharedService } from './shared/shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'sales-support';
  theme = 'my-second-theme';

  constructor(private overlayContainer: OverlayContainer, private sharedService: SharedService) {}

  ngOnInit() {
    this.sharedService.onChangeTheme.subscribe({
      next: (theme: string) => {
        this.theme = theme;
        this.overlayContainer.getContainerElement().classList.add(theme);
      }
    });
  }
}
