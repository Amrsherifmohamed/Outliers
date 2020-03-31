import { Component, OnInit } from '@angular/core';
import { ApplyForJob } from 'src/app/_models/applyForJob';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-company-appliers',
  templateUrl: './company-appliers.component.html',
  styleUrls: ['./company-appliers.component.css']
})
export class CompanyAppliersComponent implements OnInit {
  appliers: ApplyForJob[];
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe(
      data => { this.appliers = data['jobappliers'] }
    );

  }

}
