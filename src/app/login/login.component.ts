import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// for calling function of a external file
declare function init_plugins();
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    init_plugins();
  }

  login() {
    this.router.navigate(['/dashboard']);
  }
}
