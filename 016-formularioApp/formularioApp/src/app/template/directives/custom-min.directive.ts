import { Directive, Input } from "@angular/core";
import { FormControl, NG_VALIDATORS, Validators } from "@angular/forms";
import { __values } from "tslib";

@Directive(
        {
            selector: '[customMin][ngModel]',
            providers: [{
                provide: NG_VALIDATORS,
                useExisting
            }]
        }
    )

export class CustomMinDirective implements Validators {

    @Input() minimo!: number;

    constructor() {    }

    validate(  control: FormControl ) {
    
        const inputValue = control.value;

        console.log(inputValue);

        return null;
    
    }

}