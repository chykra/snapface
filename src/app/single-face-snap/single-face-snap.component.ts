import { Component, OnInit } from '@angular/core';
import { FaceSnapsService } from '../services/face-snap.service';
import { CommonModule } from '@angular/common';
import { FaceSnap } from '../models/face-snap.model';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-single-face-snap',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet, 
    RouterLink
  ],
  templateUrl: './single-face-snap.component.html',
  styleUrl: './single-face-snap.component.scss'
})
export class SingleFaceSnapComponent implements OnInit{
  faceSnap!: FaceSnap;
  snapButton! : string;
  snap! : boolean;

  constructor(private faceSanpsService: FaceSnapsService,
    private route : ActivatedRoute
  ) {}


  ngOnInit(): void {
    this.snapButton = 'Oh!Snap';
    this.snap = false;
    const faceSnapId = +this.route.snapshot.params['id'];
    this .faceSnap = this.faceSanpsService.getFaceSnapById(faceSnapId);
  }

  onSnap(){
    if(this.snap == false){
      this.faceSanpsService.snapFaceSnapById(this.faceSnap.id, 'snap');
      this.snap = true;
      this.snapButton = 'Oops!unsnap';
    }
    else{
      this.faceSanpsService.snapFaceSnapById(this.faceSnap.id, 'unsnap');
      this.snap = false;
      this.snapButton = 'Oh!Snap';
    }
  }

}
