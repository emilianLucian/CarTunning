import { Component, OnInit } from '@angular/core';

declare var $:any;

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

	ngOnInit() {
    $('.open').click(function() {
    	$('#lightbox').fadeTo(1000, 1);
    });
    $('.close').click(function() {
    	$('#lightbox').hide();
    });

    $('.open_2').click(function() {
    	$('#lightbox_2').fadeTo(1000, 1);
    });
    $('.close').click(function() {
    	$('#lightbox_2').hide();
    });

    $('.open_3').click(function() {
    	$('#lightbox_3').fadeTo(1000, 1);
    });
    $('.close').click(function() {
    	$('#lightbox_3').hide();
    });
	}
}