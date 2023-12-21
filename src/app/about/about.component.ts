
// import { Component, NgModule } from '@angular/core';
// import { FormsModule, NgModel } from '@angular/forms';

// @Component({
//   selector: 'app-about',
//   templateUrl: './about.component.html',
//   styleUrls: ['./about.component.css']
// })


// export class AboutComponent {}

import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
     selector: 'app-about',
     templateUrl: './about.component.html',
     styleUrls: ['./about.component.css']
   })
export class AboutComponent {
  formData: any = {}; // Initialize an empty object to store form data

    constructor (private router:Router) {}

  onSubmit() {
    // Handle form submission here, e.g., send data to a server or perform other actions
    console.log(this.formData);
  }

  gotoLogoff() {
    this.router.navigate(["../login"]), {skiplocationchange : true};
  }
}

