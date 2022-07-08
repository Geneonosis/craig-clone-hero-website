import { NgbTypeahead } from '@ng-bootstrap/ng-bootstrap';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Observable, OperatorFunction, Subject, merge } from 'rxjs';
import {
  debounceTime,
  distinctUntilChanged,
  map,
  filter,
} from 'rxjs/operators';
import songList from '../assets/data/songs.json';
import { MatLabel } from '@angular/material/form-field';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, AfterViewInit {
  public songsFromJson: songDetails[] = (<songDetails[]>(
    songList
  )) as songDetails[];
  public searchList: songDetails[] = [];

  ngOnInit(): void {
    this.searchList = this.songsFromJson;
  }

  ngAfterViewInit(): void {
    //this.songsFromJson.forEach((song) => console.log(song.Name));
  }

  conductSearchBySong(): void {
    this.searchList = this.songsFromJson.filter((v) =>
      v.Name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  conductSearchByArtist(): void {
    this.searchList = this.songsFromJson.filter((v) =>
      v.Artist.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  public searchTerm: string = '';
}

interface songDetails {
  Name: string;
  Artist: string;
  Album: string;
  Genre: string;
  Charter: string;
  Year: string;
  Playlist: string;
  Lyrics?: boolean; //variable
  modchart: boolean;
  songLength?: number; //variable
  chartsAvailable: number;
}
