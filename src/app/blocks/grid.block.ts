import { BaseBlock } from './base.block';
import { Input, Node as ReteNode, Output } from 'rete';
import { dataSocket } from './sockets/data.socket';
import { TextControl } from '../controls/text.control';

export class GridBlock extends BaseBlock {

  constructor() {
    super('Grid');
  }

  async builder(node: ReteNode): Promise<any> {
    const input = new Input('data', 'Data', dataSocket);
    const out1 = new Output('data', 'Data', dataSocket);
    return node.addInput(input)
      .addOutput(out1);
  }
}
