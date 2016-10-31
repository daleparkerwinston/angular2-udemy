import {Component} from "@angular/core";
import {Validators, FormControl, FormGroup} from "@angular/forms";

@Component({
    selector: 'app-signin',
    templateUrl: './signin.component.html'
})
export class SigninComponent {
    myForm: FormGroup;
    emailRegex: string = '[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$';

    ngOnInit() {
        this.myForm = new FormGroup({
            email: new FormControl(null, [
                Validators.required,
                Validators.pattern(this.emailRegex)]),
            password: new FormControl(null, Validators.required)
        });
    }

    onSubmit() {
        console.log(this.myForm);
        this.myForm.reset();
    }
}