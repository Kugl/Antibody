import { ModuleWithProviders, NgModule } from "@angular/core";
import {
  MAT_LABEL_GLOBAL_OPTIONS,
  MatNativeDateModule,
  MAT_DATE_LOCALE,
} from "@angular/material/core";
import { MatIconRegistry } from "@angular/material/icon";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatButtonModule } from "@angular/material/button";

import { MatCardModule } from "@angular/material/card";

import { MatDialogModule } from "@angular/material/dialog";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatIconModule } from "@angular/material/icon";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatListModule } from "@angular/material/list";

import { MatCheckboxModule } from "@angular/material/checkbox";

import { MatRippleModule } from "@angular/material/core";

import { MatSidenavModule } from "@angular/material/sidenav";

import { MatToolbarModule } from "@angular/material/toolbar";
import { DragDropModule } from "@angular/cdk/drag-drop";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";

@NgModule({
  imports: [
    // MatAutocompleteModule,
    // MatBadgeModule,
    DragDropModule,
    MatButtonModule,
    // MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
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
    MatProgressBarModule,
    MatProgressSpinnerModule,
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
    MatToolbarModule,
    MatTooltipModule,
    //MatTreeModule,
    //MatNativeDateModule
  ],
  exports: [
    //MatAutocompleteModule,
    //MatBadgeModule,
    DragDropModule,
    MatButtonModule,
    //MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
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
    MatProgressBarModule,
    MatProgressSpinnerModule,
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
    MatToolbarModule,
    MatTooltipModule,
    //MatTreeModule,
    //MatNativeDateModule
  ],
  providers: [],
})
export class MaterialModule {
  constructor(public matIconRegistry: MatIconRegistry) {
    // matIconRegistry.registerFontClassAlias('fontawesome', 'fa');
  }

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: MaterialModule,
      providers: [MatIconRegistry],
    };
  }
}
