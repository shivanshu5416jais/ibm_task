import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
// import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shipmentsearch';
  constructor(private router: Router) {
    // translate.setDefaultLang('en');

    // translate.use('en');
  }
  ngOnInit() {
    // this.router.navigateByUrl('/home')
    this.router.navigateByUrl('/home')

  }


}
