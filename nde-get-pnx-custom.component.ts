import { Component, OnInit, inject } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common'; 
import { Store } from '@ngrx/store';
import { createFeatureSelector } from '@ngrx/store';

// Selector
export const selectSearchState = createFeatureSelector<any>('Search');

@Component({
  selector: 'custom-nde-get-pnx-custom',
  standalone: true,
  imports: [NgIf], // required here if used in the html template
  templateUrl: './nde-get-pnx-custom.component.html',
  styleUrl: './nde-get-pnx-custom.component.scss'
})
export class NdeGetPnxCustomComponent implements OnInit {
  private store = inject(Store);
  searchState = this.store.selectSignal(selectSearchState);
  
  // must declare the properties with its type and an initial value
  show: boolean = false; 
  mmsId: string | null = null; //can be string or null, and initial val is null

  ngOnInit(): void {
    let pathname = window.location.pathname;
    this.show=false;
    if (pathname == "/nde/fulldisplay") {
      this.show = true;
    }

    const state = this.searchState();
    const ids = Object.keys(state.entities || {});
    if (ids.length > 0) {
      const firstPnx = state.entities[ids[0]].pnx;
      this.mmsId = firstPnx.control?.sourcerecordid?.[0] ?? null;
    }
  }
}
