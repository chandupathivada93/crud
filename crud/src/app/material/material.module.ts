import {MatButtonModule} from '@angular/material/button';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatNativeDateModule} from '@angular/material/core';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatToolbarModule} from '@angular/material/toolbar';
import { NgModule } from '@angular/core';

const materialComponents=[
                  MatButtonModule,
                  MatToolbarModule,
                  MatIconModule,
                  MatDialogModule,
                  MatFormFieldModule,
                  MatInputModule,
                  MatSelectModule,
                  MatDatepickerModule,
                  MatNativeDateModule,
                  MatRadioModule,
                  MatTableModule,
                  MatPaginatorModule,
                  MatSortModule

];
@NgModule({

  imports: [materialComponents],
  exports :[materialComponents]
})
export class MaterialModule { }
