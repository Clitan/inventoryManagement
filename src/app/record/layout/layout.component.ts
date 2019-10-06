import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { MainServiceService } from 'src/app/main-service.service';


@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  options: FormGroup;
  sideNavState: boolean = true;
  navActive: boolean = true;
  user:string;

  constructor(fb: FormBuilder, private routr: Router, private activeRoute: ActivatedRoute,private service:MainServiceService) {

    this.options = fb.group({
      bottom: 0,
      fixed: this.sideNavState,
      top: 0
    });
    routr.navigate(['purchase'], { relativeTo: this.activeRoute });
    this.user = service.loginUserName;
  }

  ngOnInit() {

  }
  toggle_side_nav() {
    this.options.patchValue({
      fixed: !this.sideNavState,
    })
  }

  ActiveNav(selectedItem: string) {
    if (selectedItem == 'Purchase') {
      this.navActive = true;
      this.routr.navigate(['purchase'], { relativeTo: this.activeRoute });
    }
    else {
      this.navActive = false;
      this.routr.navigate(['sales'], { relativeTo: this.activeRoute });
    }
  }

}