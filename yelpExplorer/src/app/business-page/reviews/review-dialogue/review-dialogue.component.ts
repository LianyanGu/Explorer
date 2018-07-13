import {Component, Inject, OnInit} from '@angular/core';
import {DialogData} from '../reviews.component';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-review-dialogue',
  templateUrl: './review-dialogue.component.html',
  styleUrls: ['./review-dialogue.component.css']
})

export class ReviewDialogueComponent implements OnInit {


  constructor(public dialogRef: MatDialogRef<ReviewDialogueComponent>,
              @Inject(MAT_DIALOG_DATA) public data: DialogData) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }

}

