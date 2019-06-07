import { Component, OnInit } from '@angular/core';
import { Photo, DataService } from './data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit {
  photos: Photo[] = [];
  constructor(private dataService: DataService) {}
  ngOnInit() {
    this.fetchData();
  }
  fetchData() {
    this.dataService.fetch().subscribe(
      (data: Photo[]) => {
        this.photos = data;
      },
      err => {
        throw new Error('err');
      }
    );
  }
}
