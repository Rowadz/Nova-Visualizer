import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'common-input-rules',
  templateUrl: './common-input-rules.component.html',
  styleUrls: ['./common-input-rules.component.scss']
})
export class CommonInputRulesComponent implements OnInit {
  @Input() label: string;
  @Input() placeholder: string;
  @Input() form: FormGroup;
  @Input() control: string;
  @Input() type: string;
  @Input() required: boolean;
  constructor() {}

  ngOnInit() {}
}
