import { Component, OnInit } from '@angular/core';
import { NodeComponent, NodeService } from 'rete-angular-render-plugin';

@Component({
  selector: 'app-workflow-node',
  templateUrl: './workflow-node.component.html',
  styleUrls: ['./workflow-node.component.scss']
})
export class WorkflowNodeComponent extends NodeComponent {

  constructor(protected service: NodeService) {
    super(service);
  }

}
