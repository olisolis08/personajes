import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-characters-gender',
  templateUrl: './characters-gender.component.html',
  styleUrls: ['./characters-gender.component.css']
})
export class CharactersGenderComponent implements OnInit {

  @Input() character: any;

  ngOnInit(): void {}
}
