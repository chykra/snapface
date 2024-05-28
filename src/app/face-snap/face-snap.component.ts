import { Component, OnInit, Input } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { CommonModule } from '@angular/common';
import { FaceSnapsService } from '../services/face-snap.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-face-snap',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss'
})
export class FaceSnapComponent implements OnInit {

  @Input() faceSnap!: FaceSnap;
  snapButton! : string;
  snap! : boolean;

  constructor(private faceSanpsService: FaceSnapsService,
    private router: Router
  ) {}


  ngOnInit(): void {
    this.snapButton = 'Oh!Snap';
    this.snap = false;
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

  onViewFaceSnap() {
    this.router.navigateByUrl(`facesnaps/${this.faceSnap.id}`);
}
}
