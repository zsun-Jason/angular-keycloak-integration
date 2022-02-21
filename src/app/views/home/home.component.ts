import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
  }

  login(){
    this.router.navigate(['../../profile/edit'], {relativeTo: this.route})
  }

}
