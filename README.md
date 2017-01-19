angular-seed-live
===

Use this seed to get an [Angular](https://angular.io/) application up and running in
the minimum amount of time as possible.

All runtime 3rd party dependencies are hosted by CDNs and not
installed locally.

All typescript transpiliation and Angular compilation happens in
the browser, significantly lengthening app start up time.

For these reasons, this seed should only be used for small demos and
prototypes only.

This seed is a suitable starting point for applications hosted in
codepen, plunkr or other online editors.

## Getting Started

### To run locally:

 1. `npm install` (this simply installs [lite-server](https://github.com/johnpapa/lite-server)
to serve the application's index and typescript files to the server)
 1. `npm start`

 ### To host on plunkr or similar:

You'll need to upload the `index.html`, `systemjs.config.web.js`
and everything in the `app/` folder.

## Clarity integration
Switch to the `clarity` branch for integration with the
[Clarity](https://vmware.github.io/clarity/) library of
styles and components
