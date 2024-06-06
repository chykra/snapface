import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterOutlet, RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [RouterOutlet, RouterLink, FormsModule],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent implements OnInit {
  constructor(private router: Router) {}

  userEmail!: string;
  
  onContinue(): void{
    this.router.navigateByUrl('facesnaps')
  };

  ngOnInit(): void {
  };

  onSubmitForm(form: NgForm): void {
    console.log(form.value);
  }


}
