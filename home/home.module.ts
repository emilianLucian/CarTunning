import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { DetailsComponent } from './details/details.component';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { HeaderComponent } from '../core/header/header.component';
import { ContactTopComponent } from '../core/contact/contact-top/contact-top.component'; 
import { DropdownDirective } from '../shared/dropdown.directive';

@NgModule({
	declarations: [
		DetailsComponent,
		SlideshowComponent,
		HeaderComponent,
		ContactTopComponent,
		DropdownDirective
	],
	imports: [
		CommonModule,
		ReactiveFormsModule,
		DropdownDirective
	]
})
export class RecipesModule {}