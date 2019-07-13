// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  api: {
    //url: "http://127.0.0.1:8000/api"
    url: "http://app.e-vnn.com/api"
  },
  profile: {
    //url: "http://127.0.0.1:8000/profile/"
    url: "http://app.e-vnn.com/public/profile/"
  },
  flyer: {
    //url: "http://127.0.0.1:8000/flyers/"
    url: "http://app.e-vnn.com/public/flyers/"
  },
  production: false
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
