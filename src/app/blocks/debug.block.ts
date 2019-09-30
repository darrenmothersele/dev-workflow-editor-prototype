import { Input, Node as ReteNode, Output, Socket } from 'rete';
import { BaseBlock } from './base.block';
import { dataSocket } from './sockets/data.socket';

export class DebugBlock extends BaseBlock {

  constructor() {
    super('Debug');
  }

  async builder(node: ReteNode): Promise<any> {
    const input = new Input('data', 'Data', dataSocket);
    const out = new Output('data', 'Data', dataSocket);
    return node.addInput(input).addOutput(out);
  }
}
