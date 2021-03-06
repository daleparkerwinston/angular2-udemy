import {Component, OnInit} from "@angular/core";
import {FormGroup, FormControl, Validators} from "@angular/forms";

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html'
})
export class SignupComponent implements OnInit{
    myForm: FormGroup;
    emailRegex: string = '[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$';

    ngOnInit() {
        this.myForm = new FormGroup({
            firstName: new FormControl(null, Validators.required),
            lastName: new FormControl(null, Validators.required),
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