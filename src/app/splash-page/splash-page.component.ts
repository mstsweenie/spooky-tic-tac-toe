import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-splash-page',
  templateUrl: './splash-page.component.html',
  styleUrls: ['./splash-page.component.scss']
})
export class SplashPageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goGame(): void {
    console.log("Working");
    this.router.navigate(['/login']);
  }

}
