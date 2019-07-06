import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
   MatToolbarModule,
   MatButtonModule,
   MatIconModule,
   MatStepperModule,
   MatFormFieldModule,
   MatInputModule,
   MatSelectModule,
   MatAutocompleteModule,
   MatCardModule,
} from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatCardModule,
  ],
  exports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatCardModule,
  ]
})
export class MaterialModule { }
