// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: true,
  firebase: {
    apiKey: 'AIzaSyBegOaO4MOHq0TRJgtcxMHh3as6CRncugI',
    authDomain: 'dpmtrd.firebaseapp.com',
    databaseURL: 'https://dpmtrd.firebaseio.com',
    projectId: 'dpmtrd',
    storageBucket: 'dpmtrd.appspot.com',
    messagingSenderId: '84699580355'
  },
  pusher: {
    key: '49121088c312711b26ca',
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
