import { FormGroup } from "@angular/forms";

// using for edit form

function refreshForm(form: FormGroup) {
  // form.reset();
  for (const key in form.controls) {
    if (form.controls.hasOwnProperty(key)) {
      form.controls[key].markAsPristine();
      form.controls[key].updateValueAndValidity();
    }
  }
}

export function resetForm(form: FormGroup, item: any) {
  refreshForm(form);
  Object.keys(form.controls).forEach((value) => {
    const control = form.controls[value];
    // get property of object
    type ObjectKey = keyof typeof item;
    const property = value as ObjectKey;
    Object.keys(item);
    control.setErrors(null);
    if (property == 'id') {
      if (item[property] == 0) {
        control.setValue(null);
      } else {
        control.setValue(item[property]);
      }
    } else {
      control.setValue(item[property]);
    }
  })
}

export function buildParam(item: any) {
  let names = Object.getOwnPropertyNames(item);
  let params = new Map<string, string>();
  let url = '';
  names.forEach(value => {
    type ObjectKey = keyof typeof item;
    const property = value as ObjectKey
    params.set(value, item[property]);
  });
  // names.forEach(value => {
  //     url += '&'+ value + '=' + item[value];
  // })
  // return url;
  return params;
}

export function buildParamToCriteria(item: any, clazz: string) {
  let names = Object.getOwnPropertyNames(item);
  let url = ''
}