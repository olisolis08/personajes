import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-characters-status',
  templateUrl: './characters-status.component.html',
  styleUrls: ['./characters-status.component.css']
})
export class CharactersStatusComponent implements OnInit {

  @Input() character: any;

  ngOnInit(): void {}
}

