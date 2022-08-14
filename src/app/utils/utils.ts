import { FormGroup } from "@angular/forms";

 // using for edit form

 function  refreshForm(form: FormGroup) {
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