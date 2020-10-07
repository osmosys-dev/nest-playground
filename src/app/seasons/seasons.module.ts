import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { CoursesCardListComponent } from './courses-card-list/courses-card-list.component';
import { EditCourseDialogComponent } from './edit-course-dialog/edit-course-dialog.component';
import { CoursesHttpService } from './services/courses-http.service';
import { CourseComponent } from './course/course.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule, Routes } from '@angular/router';
import { Season } from '../../../shared/season';
import { Episode } from '../../../shared/episode';

export const seasonsRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: ':seasonUrl',
    component: SeasonComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatTabsModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatSlideToggleModule,
    MatDialogModule,
    MatSelectModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    RouterModule.forChild(seasonsRoutes),
  ],
  declarations: [
    HomeComponent,
    SeasonsCardListComponent,
    EditSeasonDialogComponent,
    SeasonComponent,
  ],
  exports: [
    HomeComponent,
    SeasonsCardListComponent,
    EditSeasonDialogComponent,
    SeasonComponent,
  ],
  entryComponents: [EditSeasonDialogComponent],
  providers: [SeasonsHttpService],
})
export class SeasonsModule {
  constructor() {}
}
