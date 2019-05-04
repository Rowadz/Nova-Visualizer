import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatModule } from './widgets-modules/mat/mat.module';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { ParticlesModule } from 'angular-particle';
import { MainSubjetsComponent } from './components/home/main-subjets/main-subjets.component';
import { MatCardModule } from '@angular/material';
import { MainSubjetsCardComponent } from './components/home/main-subjets/main-subjets-card/main-subjets-card.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, MainSubjetsComponent, MainSubjetsCardComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    MatModule,
    BrowserAnimationsModule,
    ParticlesModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
