import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared/shared.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  themeOptions: string[] = ['my-theme', 'my-second-theme'];

  constructor(private sharedService: SharedService) { }

  ngOnInit() {
  }

  set selectedTheme(value: string) {
    console.log(value);
    this.sharedService.onChangeTheme.next(value);
  }

}
