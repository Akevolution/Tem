import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from './material.module';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { StoreModule } from '@ngrx/store';


import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BaselabComponent } from './base-lab/base-lab.component';
import { BaselabRoutingModule } from './base-lab/base-lab-routing.module';
import { EffectsModule } from '@ngrx/effects';
import { labReducer } from './base-lab/store/lab.reducer';
import { LabEffects } from './base-lab/store/lab.effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';



@NgModule({
  declarations: [
    AppComponent,
    BaselabComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    BaselabRoutingModule,
    ToastrModule.forRoot(),
    StoreModule.forRoot({
      labState: labReducer
    }, {
      runtimeChecks: {
        strictActionImmutability: true,
        strictStateImmutability: true
      }
    }),
    EffectsModule.forRoot([
      LabEffects
    ]),
    [
      StoreDevtoolsModule.instrument({ maxAge: 25 })]
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
