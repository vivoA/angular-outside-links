import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AutosizeModule } from '@techiediaries/ngx-textarea-autosize';
import { NgxSelectModule, INgxSelectOptions } from 'ngx-select-ex';
import { SidePanelComponent } from './components/side-panel/side-panel.component';
import { ConfirmationModalComponent } from './components/confirmation-modal/confirmation-modal.component';
import { SkelatonComponent } from './components/skelaton/skelaton.component';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { SearchPipe } from './pips/search.pipe';
import { HighlightDirective } from './directives/highlight.directive';

const CustomSelectOptions: INgxSelectOptions = { // Check the interface for more options
    optionValueField: 'id',
    optionTextField: 'name'
};
@NgModule({
  declarations: [
    SidePanelComponent,
    ConfirmationModalComponent,
    SkelatonComponent,
    SearchPipe,
    HighlightDirective
  ],
  imports: [
    CommonModule,
    NgxSelectModule.forRoot(CustomSelectOptions),
    FormsModule,
    ReactiveFormsModule,
    AutosizeModule,
    NgxSkeletonLoaderModule,
  ],
  exports:[
    NgxSelectModule,
    FormsModule,
    ReactiveFormsModule,
    AutosizeModule,
    SidePanelComponent,
    NgxSkeletonLoaderModule,
    SkelatonComponent,
    ConfirmationModalComponent,
    SearchPipe,
    HighlightDirective
  ]
})
export class ShardModule { }
