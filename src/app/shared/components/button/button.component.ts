import { Component, EventEmitter, Input, Output } from '@angular/core';

type Variant =
  | 'primary'
  | 'secondary'
  | 'info'
  | 'warning'
  | 'success'
  | 'danger';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
})
export class ButtonComponent {
  @Input() label: string = 'Click';
  @Input() variant: Variant = 'primary';
  @Input() disabled: boolean = false;
  @Input() additionalClasses: string = '';
  @Output() clicked = new EventEmitter<void>();

  private variantClasses: { [key: string]: string } = {
    primary: 'bg-primary',
    danger: 'bg-danger',
    success: 'bg-success',
    warning: 'bg-warning',
    info: 'bg-info',
  };

  get buttonClass(): string {
    return `px-4 py-2 rounded text-white ${this.additionalClasses} ${
      this.variantClasses[this.variant]
    }`;
  }

  onClick(): void {
    if (!this.disabled) {
      this.clicked.emit();
    }
  }
}
