import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Season } from '../../../../shared/season';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { SeasonsHttpService } from '../services/seasons-http.service';

@Component({
  selector: 'season-dialog',
  templateUrl: './edit-season-dialog.component.html',
  styleUrls: ['./edit-season-dialog.component.css'],
})
export class EditSeasonDialogComponent {
  form: FormGroup;

  dialogTitle: string;

  season: Season;

  mode: 'create' | 'update';

  loading$: Observable<boolean>;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<EditSeasonDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data,
    private seasonsService: SeasonsHttpService
  ) {
    this.dialogTitle = data.dialogTitle;
    this.season = data.season;
    this.mode = data.mode;

    const formControls = {
      description: ['', Validators.required],
      category: ['', Validators.required],
      longDescription: ['', Validators.required],
      promo: [false, []],
    };

    if (this.mode === 'update') {
      this.form = this.fb.group(formControls);
      this.form.patchValue({ ...data.course });
    } else if (this.mode === 'create') {
      this.form = this.fb.group({
        ...formControls,
        url: ['', Validators.required],
        iconUrl: ['', Validators.required],
      });
    }
  }

  onClose() {
    this.dialogRef.close();
  }

  onSave() {
    const changes: Partial<Season> = {
      ...this.form.value,
    };

    if (this.mode === 'update') {
      this.seasonsService
        .updateSeason(this.season._id, changes)
        .subscribe((season) => this.dialogRef.close(season));
    } else if (this.mode === 'create') {
      this.seasonsService
        .createSeason(changes)
        .subscribe((season) => this.dialogRef.close(season));
    }
  }
}
