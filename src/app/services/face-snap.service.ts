import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap.model";

@Injectable({
    providedIn: 'root'
})
export class FaceSnapsService{

    faceSnaps: FaceSnap[] = [
        {
            id: 1,
            title: 'Archibald',
            description: 'MOn meilleur amis',
            createdDate: new Date(),
            snaps: 140,
            imgUrl: 'https://picsum.photos/536/354'
        },
        {
            id: 2,
            title: 'Robert',
            description: 'attention a robert',
            createdDate: new Date(),
            snaps: 0,
            imgUrl: 'https://picsum.photos/536/355',
            location: 'Paris'
        },
        {
            id: 3,
            title: 'Martin',
            description: 'BOb le gib',
            createdDate: new Date(),
            snaps: 350,
            imgUrl: 'https://picsum.photos/536/356',
            location: 'par ici'
        }
    ];

    getAllFaceSnaps(): FaceSnap[]{
        return this.faceSnaps;
    }

    getFaceSnapById(faceSnapId: number): FaceSnap{
        const facsSnap = this.faceSnaps.find(faceSnape => faceSnape.id === faceSnapId)
        if(!facsSnap){
            throw new Error('FaceSnap not found');
        }
        else{
            return facsSnap;
        }
    } 

    
    snapFaceSnapById(faceSnapId: number, snapType : 'snap' | 'unsnap'): void{
        const faceSnap = this.getFaceSnapById(faceSnapId);
        snapType === 'snap'? faceSnap.snaps++ : faceSnap.snaps--;

    }

}