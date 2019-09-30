import { Input, Node as ReteNode, Output, Socket } from 'rete';
import { BaseBlock } from './base.block';
import { dataSocket } from './sockets/data.socket';
import { buttonSocket } from './sockets/button.socket';
import { TextControl } from '../controls/text.control';

export class ButtonBlock extends BaseBlock {

  constructor() {
    super('Button');
  }

  async builder(node: ReteNode): Promise<any> {
    const out1 = new Output('button', 'Button', buttonSocket);
    const input = new Input('data', 'Data', dataSocket);
    return node.addInput(input).addControl(new TextControl(this.editor, 'label')).addOutput(out1);
  }
}
