import { Component } from '@angular/core';
import { NgForm } from "@angular/forms";
import {AuthService} from "../../services/auth.service";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
    constructor(private authService: AuthService) { }
    onLogin(form: NgForm) {
        this.authService.login(form.value.email, form.value.password)
            .subscribe(
                tokenData => console.log(tokenData),
                error => console.log(error)
            );
    }
}
