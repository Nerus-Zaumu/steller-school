import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { HomeworkTemplateComponent } from './components/homework-template/homework-template.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';

@NgModule({
  declarations: [
    ToolbarComponent,
    HomeworkTemplateComponent
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    CommonModule,
    RouterModule
  ],
 exports: [
  ToolbarComponent,
  HomeworkTemplateComponent
 ]
})
export class SharedModule {}
