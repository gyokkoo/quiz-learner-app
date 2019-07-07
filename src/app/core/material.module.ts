import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
   MatButtonModule,
   MatCardModule,
   MatDialogModule,
   MatInputModule,
   MatTableModule,
   MatToolbarModule,
   MatMenuModule,
   MatIconModule,
   MatNavList,
   MatProgressSpinnerModule
} from '@angular/material';
import {
   MatListModule
} from '@angular/material/list';

import {
   MatSidenavModule
} from '@angular/material/sidenav';

@NgModule({
   imports: [
      CommonModule,
      MatToolbarModule,
      MatButtonModule,
      MatCardModule,
      MatInputModule,
      MatDialogModule,
      MatTableModule,
      MatMenuModule,
      MatIconModule,
      MatListModule,
      MatSidenavModule,
      MatProgressSpinnerModule
   ],
   exports: [
      CommonModule,
      MatToolbarModule,
      MatButtonModule,
      MatCardModule,
      MatInputModule,
      MatDialogModule,
      MatTableModule,
      MatMenuModule,
      MatIconModule,
      MatNavList,
      MatListModule,
      MatSidenavModule,
      MatProgressSpinnerModule
   ],
})
export class CustomMaterialModule {
}
