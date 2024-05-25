import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-league',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `<p>league works!</p>`,
  styleUrl: './league.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LeagueComponent { }
