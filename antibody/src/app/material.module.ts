import { ModuleWithProviders, NgModule } from "@angular/core";
import {
  MAT_LABEL_GLOBAL_OPTIONS,
  MatNativeDateModule,
  MAT_DATE_LOCALE
} from "@angular/material/core";
import { MatIconRegistry } from "@angular/material/icon";

import { MatButtonModule } from "@angular/material/button";

import { MatCardModule } from "@angular/material/card";

import { MatDialogModule } from "@angular/material/dialog";

import { MatGridListModule } from "@angular/material/grid-list";
import { MatIconModule } from "@angular/material/icon";

import { MatListModule } from "@angular/material/list";

import { MatRippleModule } from "@angular/material/core";

import { MatSidenavModule } from "@angular/material/sidenav";

import { MatToolbarModule } from "@angular/material/toolbar";

@NgModule({
  imports: [
    // MatAutocompleteModule,
    // MatBadgeModule,
    MatButtonModule,
    // MatButtonToggleModule,
    MatCardModule,
    // MatCheckboxModule,
    // MatChipsModule,
    //MatStepperModule,
    // MatDatepickerModule,
    MatDialogModule,
    // MatExpansionModule,
    // MatFormFieldModule,
    MatGridListModule,
    MatIconModule,
    //  MatInputModule,
    MatListModule,
    //MatMenuModule,
    // MatPaginatorModule,
    //MatProgressBarModule,
    //MatProgressSpinnerModule,
    // MatRadioModule,
    MatRippleModule,
    //MatSelectModule,
    MatSidenavModule,
    //MatSliderModule,//
    // MatSlideToggleModule,
    // MatSnackBarModule,
    // MatSortModule,
    // MatTableModule,
    //MatTabsModule,
    MatToolbarModule
    //MatTooltipModule,
    //MatTreeModule,
    //MatNativeDateModule
  ],
  exports: [
    //MatAutocompleteModule,
    //MatBadgeModule,
    MatButtonModule,
    //MatButtonToggleModule,
    MatCardModule,
    //MatCheckboxModule,
    //MatChipsModule,
    // MatStepperModule,
    //MatDatepickerModule,
    MatDialogModule,
    // MatExpansionModule,
    //MatFormFieldModule,
    MatGridListModule,
    MatIconModule,
    // MatInputModule,
    MatListModule,
    //MatMenuModule,
    //MatPaginatorModule,
    //MatProgressBarModule,
    //MatProgressSpinnerModule,
    //MatRadioModule,
    MatRippleModule,
    //MatSelectModule,
    MatSidenavModule,
    //MatSliderModule,
    //MatSlideToggleModule,
    //MatSnackBarModule,
    //MatSortModule,
    //MatTableModule,
    // MatTabsModule,
    MatToolbarModule
    //MatTooltipModule,
    //MatTreeModule,
    //MatNativeDateModule
  ],
  providers: []
})
export class MaterialModule {
  constructor(public matIconRegistry: MatIconRegistry) {
    // matIconRegistry.registerFontClassAlias('fontawesome', 'fa');
  }

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: MaterialModule,
      providers: [MatIconRegistry]
    };
  }
}
