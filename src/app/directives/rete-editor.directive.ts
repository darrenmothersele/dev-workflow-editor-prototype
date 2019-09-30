import { Directive, ElementRef } from '@angular/core';
import { Engine, NodeEditor } from 'rete';
import ConnectionPlugin from 'rete-connection-plugin';
import AngularRenderPlugin from 'rete-angular-render-plugin';
import AutoArrangePlugin from 'rete-auto-arrange-plugin';
import { WorkflowNodeComponent } from '../components/workflow-node/workflow-node.component';
import { BaseBlock } from '../blocks/base.block';
import { InitBlock } from '../blocks/init.block';
import { DebugBlock } from '../blocks/debug.block';
import { ButtonBlock } from '../blocks/button.block';
import { ActionsBlock } from '../blocks/actions.block';
import { HttpBlock } from '../blocks/http.block';
import { GridBlock } from '../blocks/grid.block';

export interface BlockRepository {
  [key: string]: BaseBlock;
}

@Directive({
  selector: '[appReteEditor]',
  exportAs: 'editor'
})
export class ReteEditorDirective {

  editor: NodeEditor;
  engine: Engine;
  components: BlockRepository = {
    init: new InitBlock(),
    debug: new DebugBlock(),
    button: new ButtonBlock(),
    actions: new ActionsBlock(),
    http: new HttpBlock(),
    grid: new GridBlock()
  };

  constructor(
    private readonly el: ElementRef
  ) {
    this.editor = new NodeEditor('workflow@0.3.0', el.nativeElement);
    this.editor.use(ConnectionPlugin);
    this.editor.use(AngularRenderPlugin, { component: WorkflowNodeComponent });
    this.editor.use(AutoArrangePlugin, { margin: {x: 25, y: 25 }, depth: 0 });


    // TODO: Move the engine to a service (can use without editor)
    this.engine = new Engine('workflow@0.3.0');

    // TODO: Better way to register all components
    Object.keys(this.components).forEach(key => {
      console.log('register component', key);
      this.editor.register(this.components[key]);
      this.engine.register(this.components[key]);
    });

    // this.editor.view.resize();
    // this.editor.trigger('process');

    // Disable zoom
    this.editor.on('zoom', () => false);

    this.editor.on(['process', 'nodecreated', 'noderemoved', 'connectioncreated', 'connectionremoved'], (async () => {
      await this.engine.abort();
      await this.engine.process(this.editor.toJSON());
    }) as any);
  }

  debug() {
    console.log(this.editor.toJSON());
  }

  execute() {
    this.editor.trigger('process');
  }

  async createNode(type: string) {
    const node = await this.components[type].createDefaultNode();
    node.position = [24, 24];
    this.editor.addNode(node);
    this.editor.trigger('arrange' as any, { node });
  }

}
