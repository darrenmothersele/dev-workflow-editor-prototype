import { Node as ReteNode, Output, Socket } from 'rete';
import { BaseBlock } from './base.block';
import { dataSocket } from './sockets/data.socket';

export class InitBlock extends BaseBlock {

  constructor() {
    super('Init');
  }

  async builder(node: ReteNode): Promise<any> {
    const out1 = new Output('data', 'Data', dataSocket);
    return node.addOutput(out1);
  }
}
