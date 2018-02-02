import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutUsComponent } from './about/about-us/about-us.component';
import { HistoryComponent } from './about/history/history.component';
import { NewsComponent } from './about/news/news.component';
import { ArchivesComponent } from './about/archives/archives.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { GalleryComponent } from './gallery/gallery.component';

const appRoutes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'about', component: AboutUsComponent },
	{ path: 'history', component: HistoryComponent},
	{ path: 'news', component: NewsComponent },
	{ path: 'archives', component: ArchivesComponent },
	{ path: 'services', component: ServicesComponent },
	{ path: 'gallery', component: GalleryComponent }
];

@NgModule({
	imports: [
		RouterModule.forRoot(appRoutes)
	],
	exports: [RouterModule]
})
export class AppRoutingModule {

}