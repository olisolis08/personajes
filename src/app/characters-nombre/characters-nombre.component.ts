import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-characters-nombre',
  templateUrl: './characters-nombre.component.html',
  styleUrls: ['./characters-nombre.component.css']
})
export class CharactersNombreComponent implements OnInit {
  @Input() character: any;

  ngOnInit(): void {}
}
