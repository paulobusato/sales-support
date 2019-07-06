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
    this.overlayContainer.getContainerElement().classList.add(this.theme);
    this.sharedService.onChangeTheme.subscribe({
      next: (theme: string) => {
        this.theme = theme;
        this.overlayContainer.getContainerElement().classList.add(theme);
      }
    });
  }

  // onThemeChange(theme:string) {
  //   this.theme = theme;
  //   //console.log(theme);
  //   const overlayContainerClasses = this.overlayContainer.getContainerElement().classList;
  //   const themeClassesToRemove = Array.from(overlayContainerClasses).filter((item: string) => item.includes('-theme'));
  //   if (themeClassesToRemove.length) {
  //      overlayContainerClasses.remove(...themeClassesToRemove);
  //   }
  //   overlayContainerClasses.add(theme);
  // }
}
