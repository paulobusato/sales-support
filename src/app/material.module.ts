import { NgModule } from '@angular/core';

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

const materialModules = [
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
  MatStepperModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatAutocompleteModule,
  MatCardModule,
];

@NgModule({
  declarations: [],
  imports: materialModules,
  exports: materialModules,
})
export class MaterialModule { }
