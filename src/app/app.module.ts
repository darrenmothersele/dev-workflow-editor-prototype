import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WorkflowEditorPageComponent } from './pages/workflow-editor-page/workflow-editor-page.component';
import { ReteEditorDirective } from './directives/rete-editor.directive';
import { WorkflowNodeComponent } from './components/workflow-node/workflow-node.component';
import { NodeService, ReteModule } from 'rete-angular-render-plugin';
import { TextComponent } from './controls/text.control';
import { MatButtonModule, MatIconModule, MatMenuModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    WorkflowEditorPageComponent,
    ReteEditorDirective,
    WorkflowNodeComponent,
    TextComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReteModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule
  ],
  entryComponents: [
    WorkflowNodeComponent,
    TextComponent
  ],
  providers: [
    NodeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
