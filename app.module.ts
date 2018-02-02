import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { AppRoutingModule } from './app-routing.module';

import { DropdownDirective } from './shared/dropdown.directive';
import { ContactTopComponent } from './core/contact/contact-top/contact-top.component';
import { SlideshowComponent } from './home/slideshow/slideshow.component';
import { DetailsComponent } from './home/details/details.component';
import { AboutUsComponent } from './about/about-us/about-us.component';
import { HomeComponent } from './home/home.component';
import { HistoryComponent } from './about/history/history.component';
import { NewsComponent } from './about/news/news.component';
import { ArchivesComponent } from './about/archives/archives.component';
import { ServicesComponent } from './services/services.component';
import { GalleryComponent } from './gallery/gallery.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DropdownDirective,
    ContactTopComponent,
    SlideshowComponent,
    DetailsComponent,
    AboutUsComponent,
    HomeComponent,
    HistoryComponent,
    NewsComponent,
    ArchivesComponent,
    ServicesComponent,
    GalleryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule
  ],
  exports: [
  	DropdownDirective
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
