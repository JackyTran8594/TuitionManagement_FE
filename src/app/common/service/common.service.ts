import { Injectable } from '@angular/core';
import { ResponseStatus } from '../../@core/constant/responseStatusEnum';
import { FeeList, FeeListData } from '../../pages/category/fee-list/service/fee';
import { ObjectType, ObjectTypeData } from '../../pages/category/object-type/service/object-type';
import { TrainClass, TrainClassData } from '../../pages/category/train-class/service/train-class';
import { HttpService } from '../../shared/http.service';

@Injectable()
export class CommonService {


  public listFeeList: FeeList[] = [];
  public listObjectType: ObjectType[] = [];
  public listTrainClass: TrainClass[] = [];

  constructor(private http: HttpService,
    private feeListService: FeeListData,
    private objectTypeService: ObjectTypeData,
    private trainClassService: TrainClassData,) { }

  public  getFeeList(): any {
    this.feeListService.getAll().subscribe({
      next: (res) => {
        console.log(res);
        if (res.result === ResponseStatus.OK) {
          this.listFeeList = res.listData;
        }
      },
      error: (err) => {
        console.log(err);
      }
    })
    return this.listFeeList;
  }

  public getObjectType(): any {
    this.objectTypeService.getAll().subscribe({
      next: (res) => {
        console.log(res);
        if (res.result === ResponseStatus.OK) {
          this.listObjectType = res.listData;
        }
      },
      error: (err) => {
        console.log(err);
      }
    })
    return this.listObjectType;
  }


  public getTrainClass(): any {
    this.trainClassService.getAll().subscribe({
      next: (res) => {
        console.log(res);
        if (res.result === ResponseStatus.OK) {
          this.listTrainClass = res.listData;
        }
      },
      error: (err) => {
        console.log(err);
      }
    });
    return this.listTrainClass;
  }

}
