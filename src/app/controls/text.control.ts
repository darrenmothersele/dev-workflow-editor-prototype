import { Control } from 'rete';
import { AngularControl } from 'rete-angular-render-plugin';
import { Component, Input, OnInit, Type } from '@angular/core';

@Component({
  templateUrl: 'text.control.html',
  styleUrls: ['text.control.scss']
})
export class TextComponent implements OnInit {
  @Input() value!: string;
  @Input() readonly!: boolean;
  @Input() change!: (_: string) => any;
  @Input() mounted!: () => any;
  @Input() label: string;

  ngOnInit() {
    console.log(this);
    this.mounted();
  }
}

export class TextControl extends Control implements AngularControl {
  component: Type<TextComponent>;
  props: { [key: string]: unknown };

  constructor(public emitter, public key, readonly = false) {
    super(key);
    this.component = TextComponent;
    this.props = {
      readonly,
      label: key,
      change: v => this.onChange(v),
      value: 'Submit',
      mounted: () => {
        this.setValue(this.getData(key) as any || '');
      }
    };
  }

  onChange(val: string) {
    this.setValue(val);
    this.emitter.trigger('process');
  }

  setValue(val: string) {
    this.props.value = val;
    this.putData(this.key, this.props.value);
  }

}
