import { Component, OnInit, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { createFeatureSelector, createSelector } from '@ngrx/store';



//const selectPnxFeature = createFeatureSelector<any>('Search');
//const selectPnxData = createSelector(selectPnxFeature, state => state.pnx);

export const selectSearchState = createFeatureSelector<any>('Search');

@Component({
  selector: 'custom-nde-get-pnx-custom',
  standalone: true,
  imports: [],
  templateUrl: './nde-get-pnx-custom.component.html',
  styleUrl: './nde-get-pnx-custom.component.scss'
})
export class NdeGetPnxCustomComponent {
  //searchState = this.store.selectSignal(selectSearchState);
  //console.log(searchState());
  private store = inject(Store);
  // signal from store selector
  searchState = this.store.selectSignal(selectSearchState);
  
  //console.log(this.searchState);
    ngOnInit(): void {

    const state = this.searchState(); // <-- call the signal like a function
    console.log('Search state:', state);

    const ids = Object.keys(state.entities || {});
    if (ids.length > 0) {
      const firstPnx = state.entities[ids[0]].pnx;
      console.log('PNX metadata:', firstPnx);

      let mmsId=firstPnx.control.sourcerecordid[0];
      console.log(mmsId);
      return mmsId;
    }



  }

}
