import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatModule } from './widgets-modules/mat/mat.module';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { ParticlesModule } from 'angular-particle';
import { MainSubjetsComponent } from './components/home/main-subjets/main-subjets.component';
import { MatCardModule, MatBadgeModule } from '@angular/material';
import { MainSubjetsCardComponent } from './components/home/main-subjets/main-subjets-card/main-subjets-card.component';
import { NewThingsComponent } from './components/home/new-things/new-things.component';
import { NotFound404Component } from './components/not-found404/not-found404.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MainSubjetsComponent,
    MainSubjetsCardComponent,
    NewThingsComponent,
    NotFound404Component
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    MatModule,
    BrowserAnimationsModule,
    ParticlesModule,
    MatCardModule,
    MatBadgeModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [NewThingsComponent]
})
export class AppModule {}