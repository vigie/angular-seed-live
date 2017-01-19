import { Component } from '@angular/core';

@Component({
   selector: 'my-app',
   template: `
      <clr-main-container>
         <clr-header>
            <div class="branding">
               <a href="javascript://" class="nav-link">
                  <span class="title">Angular App</span>
               </a>
            </div>
            <div class="header-nav" [clr-nav-level]="1">
            </div>
         </clr-header>
         <div class="content-container">
            <main class="content-area">
            </main>
         </div>
      </clr-main-container>
   `
})
export class AppComponent { }
