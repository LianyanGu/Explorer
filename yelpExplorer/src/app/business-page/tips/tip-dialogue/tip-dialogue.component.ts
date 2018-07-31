import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {DialogData} from '../tips.component';
import {Review} from '../../../models/Review';
import {Tip} from '../../../models/Tip';
import {TipsService} from '../tips.service';

@Component({
  selector: 'app-tip-dialogue',
  templateUrl: './tip-dialogue.component.html',
  styleUrls: ['./tip-dialogue.component.css']
})
export class TipDialogueComponent implements OnInit {
  newTip: Tip = null;
  date = new Date();

  constructor(public dialogRef: MatDialogRef<TipDialogueComponent>,
              @Inject(MAT_DIALOG_DATA) public data: DialogData,
              private tipsService: TipsService) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }

  setDate() {
    this.date.setDate(17);
    this.date.setMonth(1);
    this.date.setFullYear(2017);
    this.date.setMinutes(17);
    this.date.setHours(9);
    this.date.setSeconds(17);
  }

  submitTip(data: DialogData) {
    this.newTip = new Tip(data.text, this.date, 0, data.businessId, data.userId);
    console.log('new Tip');
    console.log(this.newTip);
    this.tipsService.addTip(this.newTip).subscribe(
      (response) => {
        console.log(response);
      }
    );
  }

}
