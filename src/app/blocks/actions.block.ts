import { Input, Node as ReteNode, Output, Socket } from 'rete';
import { BaseBlock } from './base.block';
import { dataSocket } from './sockets/data.socket';
import { buttonSocket } from './sockets/button.socket';

export class ActionsBlock extends BaseBlock {

  constructor() {
    super('Actions');
  }

  async builder(node: ReteNode): Promise<any> {
    const input = new Input('data', 'Data', dataSocket);
    const button1 = new Input('button1', 'Button', buttonSocket);
    const button2 = new Input('button2', 'Button', buttonSocket);
    const out1 = new Output('data', 'Data', dataSocket);
    return node.addInput(input).addInput(button1).addInput(button2).addOutput(out1);
  }
}
