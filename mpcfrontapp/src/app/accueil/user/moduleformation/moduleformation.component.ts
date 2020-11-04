import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-moduleformation',
  templateUrl: './moduleformation.component.html',
  styleUrls: ['./moduleformation.component.scss']
})
export class ModuleformationComponent implements OnInit {
  token: string;

  constructor(private router : Router) { }

  ngOnInit(): void {
    this.token = window.localStorage.getItem('token');
    if (!this.token) {
      this.router.navigate(['login']);

    }else if (this.token == 'formateur') {
      this.router.navigate(['ajoutmoduleformation']);

    }
  }

}
