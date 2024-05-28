import { Component, OnInit, LOCALE_ID} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FaceSnapListComponent } from './face-snap-list/face-snap-list.component';
import { HeaderComponent } from "./header/header.component";



@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, CommonModule, FaceSnapListComponent, HeaderComponent]
})
export class AppComponent implements OnInit{


    ngOnInit(){
     
    }
     
}
