import { NgModule } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  imports: [
    MatGridListModule,
    MatButtonModule,
    MatCardModule,
  ],
  exports: [
    MatGridListModule,
    MatButtonModule,
    MatCardModule,
  ]
})

export class MaterialModule {}
