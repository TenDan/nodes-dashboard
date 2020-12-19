import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {NodesDetailComponent} from '../nodes-detail/nodes-detail.component';

@Component({
  // tslint:disable-next-line:component-selector
  selector: '[app-nodes-row]',
  templateUrl: './nodes-row.component.html',
  styleUrls: ['./nodes-row.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NodesRowComponent {
  @Input() node: any;

  constructor(private modalService: NgbModal) {
  }


  isDanger(prop) {
    return this.node[prop].used / this.node[prop].available > 0.7;
  }

  open(node) {
    const modal = this.modalService.open(NodesDetailComponent);
    modal.componentInstance.node = node;
  }
}
