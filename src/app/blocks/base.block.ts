import { Component as ReteComponent, Node as ReteNode } from 'rete';
import { AngularComponent, AngularComponentData } from 'rete-angular-render-plugin';
import { NodeData, WorkerInputs, WorkerOutputs } from 'rete/types/core/data';
import { WorkflowNodeComponent } from '../components/workflow-node/workflow-node.component';

export class BaseBlock extends ReteComponent implements AngularComponent {
  data: AngularComponentData;

  constructor(props) {
    super(props);
    this.data.render = 'angular';
    this.data.component = WorkflowNodeComponent;
  }

  getDefaultData() {
    return {};
  }

  createDefaultNode() {
    return this.createNode(this.getDefaultData());
  }

  async builder(node: ReteNode) {
    console.log('base builder', node);
  }

  worker(node: NodeData, inputs: WorkerInputs, outputs: WorkerOutputs, ...args): void {
    console.log('base worker', { node, inputs, outputs, args });
  }

}
