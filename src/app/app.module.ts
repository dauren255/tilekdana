import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';

import {LandingPageComponent} from './landing-page/landing-page.component';
import {GalleryComponent} from './gallery/gallery.component';
import {TopNavComponent} from './top-nav/top-nav.component';

const routes: Routes = [
  {path: '', redirectTo: 'index', pathMatch: 'full'},
  {path: 'index', component: LandingPageComponent},
  {path: 'gallery', component: GalleryComponent},
];


@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    GalleryComponent,
    TopNavComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
