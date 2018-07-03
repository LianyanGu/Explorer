import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {DialogData} from '../tips.component';

@Component({
  selector: 'app-tip-dialogue',
  templateUrl: './tip-dialogue.component.html',
  styleUrls: ['./tip-dialogue.component.css']
})
export class TipDialogueComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<TipDialogueComponent>,
              @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }

}
