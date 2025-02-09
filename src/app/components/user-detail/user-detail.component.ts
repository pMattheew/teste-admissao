import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  edit = false;

  constructor(
    private auth: AuthenticationService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  
  logout(): void {
    this.auth.logout();
    this.router.navigate(['login']).then(() => {location.reload()});
  }

}
