import { Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ITreeOptions, ITreeState, TreeComponent, TreeModel, TreeNode } from '@circlon/angular-tree-component';
import { NbDialogRef, NbToastrService } from '@nebular/theme';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { MenuRoleTree } from '../../../../shared/other-object';
import { Functional } from '../service/functional/functional';
import { RoleGroup, RoleGroupData } from '../service/role-group';

@Component({
  selector: 'ngx-role-group-frm',
  templateUrl: './role-group-frm.component.html',
  styleUrls: ['./role-group-frm.component.scss']
})
export class RoleGroupFrmComponent implements OnInit, OnDestroy {

  @Input() title: string;
  @Input() create: boolean;
  @Input() update: boolean;
  @Input() view: boolean;
  item: RoleGroup = {};
  selected: number;

  //Tree custom
  nodes: any;
  @ViewChild('tree') tree: TreeComponent;
  public state: ITreeState;
  options: ITreeOptions = {
    useCheckbox: true,
    idField: 'id',
    childrenField: 'children',
    displayField: 'description',
  };
  // end tree

  protected readonly $unsubscribe = new Subject<void>();

  constructor(private service: RoleGroupData, private dialogRef: NbDialogRef<RoleGroupFrmComponent>, private toastr: NbToastrService) { }


  ngOnDestroy(): void {
    this.$unsubscribe.next();
    this.$unsubscribe.complete();
  }

  ngOnInit(): void {
   
  }

  close() {
    this.dialogRef.close();
  }

  initTree():any {
    
  }

  buildRoleTree(menu: MenuRoleTree[]): any {

    let root: MenuRoleTree[] = menu.filter(x => x.parentCode == '#').map(o => {
      return {
        id: o.id,
        unitCode: o.unitCode,
        parentCode: o.parentCode,
        name: o.description,
        children: []
      }
    }) as MenuRoleTree[];

    let parentNode: MenuRoleTree[] = menu.filter(x =>
      (x.parentCode.trim().length == 2 && x.parentCode != '#')
    ).map(o => {
      return {
        id: o.id,
        unitCode: o.unitCode,
        parentCode: o.parentCode,
        name: o.description,
        children: []
      }
    }) as MenuRoleTree[];

    let childNode: MenuRoleTree[] = menu.filter(x =>
      (x.parentCode.trim().length == 6 && x.parentCode != '#')
    ).map(o => {
      return {
        id: o.id,
        unitCode: o.unitCode,
        parentCode: o.parentCode,
        name: o.description,
        children: []
      }
    }) as Functional[];

    parentNode.forEach(value => {
      childNode.forEach(val => {
        if (value.unitCode == val.parentCode) {
          value.children.push(val);
        }
      })
    });

    // root = root.filter(x => x.id != "DASHBOARD");

    root.forEach(value => {
      parentNode.forEach(val => {
        if (value.unitCode == val.parentCode) {
          value.children.push(val);
        }
      })
    })

    return root;

  }

  onActivate($event) {
    console.log($event);
    // console.log(this.tree.treeModel.activeNodes);
  }

  save(treeModel: TreeModel) {
    // console.log(treeModel.activeNodes);
    let result: any = {} //<--declare a variable
    let resultRole: string[] = [] //<--declare a variable
    Object.keys(treeModel.selectedLeafNodeIds).forEach(x => {
      let node: TreeNode = treeModel.getNodeById(x);
      if (node.isSelected) {
        console.log("Selected:", node.data.id,
          "Parent:", node.parent.data.name);
        if (node.parent.data.name) //if the node has parent
        {
          if (!result[node.parent.data.name]) //If the parent is not in the object
            result[node.parent.data.name] = {} //create

          result[node.parent.data.name][node.data.id] = true;
          resultRole.push(node.data.id);
        }
        else {
          if (!result[node.data.id]) //If the node is not in the object
            result[node.data.id] = {} //create
        }
      }
    })

    // this.item.roles = resultRole;

    const observable = this.item.id
      ? this.service.update(this.item)
      : this.service.create(this.item);

    observable
      .pipe(takeUntil(this.$unsubscribe))
      .subscribe(
        res => {
          this.dialogRef.close(true);
        },
        err => {
          if (err.error && err.error.message) {
            this.toastr.danger(err.error.message, `Error!`);
          } else {
            this.toastr.danger('Có lỗi xảy ra', `Error!`);
          }
        },
        () => {
          // console.log('HTTP request completed.');
        },
      );
  }

  // save() {
  //   if (this.create) {
  //     this.service.create(this.item).subscribe(res => {
  //       console.log(res);
  //       this.dialogRef.close(res);
  //     });
  //   }
  //   if (this.update) {
  //     this.service.update(this.item).subscribe(res => {
  //       console.log(res);
  //       this.dialogRef.close(res);
  //     });
  //   }
  // }
}
