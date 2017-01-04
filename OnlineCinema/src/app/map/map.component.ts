import {Component, OnInit} from '@angular/core';
import {MarkerService} from '../_services/marker.service'
import {Marker} from "../_models/maker-storage";
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
  providers: [MarkerService]
})
export class MapComponent implements OnInit {

  zoom: number = 17; // Zoom level

  markers: Marker[];

  private cinemaName: string = 'galaxy';
  constructor(private _markerService: MarkerService) {
    this.markers = this._markerService.getMarkers(this.cinemaName);
  }

  ngOnInit() {
  }

  getMarkers(id: number) {
    switch (id) {
      case -1 : // Gần nhất
        break;
      case 0 : // Tất cả
        break;
      case 1 : // Galaxy
        this.cinemaName = 'galaxy';
        break;
      case 2 : // Cgv
        this.cinemaName = 'cgv';
        break;
      case 3 : // bhd
        this.cinemaName = 'bhd';
        break;
    }
    this.markers = this._markerService.getMarkers(this.cinemaName);
  }

  mapClick($event: any) {

  }

  clickedMarker(marker: Marker, index: number) {
    console.log(marker.name + " " + index);
  }

  markerDragEnd(marker: Marker, $event) {

  }
}
