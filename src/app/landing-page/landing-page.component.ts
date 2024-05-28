import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {
  constructor(private router: Router) {}

  onContinue(): void{
    this.router.navigateByUrl('facesnaps')
  }


}
