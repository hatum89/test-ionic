import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {

  expanded: boolean = false;
  selectedOption: string = null;

  @Input() options: string[] = [
    'Masculino',
    'Femenino'
  ];

  constructor() { }

  ngOnInit(): void {
  }

  toggleExpanded(): void {
    this.expanded = !this.expanded;
  }

  selectOption(text: string): void {
    this.selectedOption = text;
  }

}
