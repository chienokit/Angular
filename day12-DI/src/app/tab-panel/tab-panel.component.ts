import { Component, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { TabGroupComponent } from '../tab-group/tab-group.component';

@Component({
  selector: 'app-tab-panel',
  template: `
    <ng-template>
      <ng-content></ng-content>
    </ng-template>
  `
})
export class TabPanelComponent implements OnInit {

  @Input() title: string | null = null;
  @ViewChild(TemplateRef, {static: true}) panelBody: TemplateRef<unknown> | null = null;
  constructor(private  tabGroup: TabGroupComponent) { }

  ngOnInit(): void {
    this.tabGroup.addTab(this);
  }

}
