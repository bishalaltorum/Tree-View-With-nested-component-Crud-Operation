import { TreeData } from './tree-data.model';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TreeDataService {

  _dataChange = new BehaviorSubject<TreeData[]>(
    [{
      Id: 1,
      Name: 'Product 1',
      Description: 'This is a product',
      Children: [
        {
          Id: 2,
          Name: 'Sub product 1',
          Description: 'Children 1',
          Children: []
        },
        {
          Id: 3,
          Name: 'Sub Product 2',
          Description: 'Children 2',
          Children: [
            {
              Id: 4,
              Name: 'Sub Sub Product 1',
              Description: 'GrandChildren 1',
              Children: []
            }
          ]
        }
      ]
    },
  ]
  );


}
