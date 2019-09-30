import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WorkflowEditorPageComponent } from './pages/workflow-editor-page/workflow-editor-page.component';


const routes: Routes = [
  {
    path: '',
    component: WorkflowEditorPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
