import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.herofit.app',
  appName: 'hero-fit',
  webDir: 'out',
  bundledWebRuntime: false,
  ios:{
    scheme: "Hero Fit"
  },
  server:{
    url : "http://192.168.1.36:3000",
    cleartext:true
  }
};

export default config;

// {
//   "appId": "com.herofit.app",
//   "appName": "hero-fit",
//   "webDir": "out",
//   "bundledWebRuntime": false,
//   "server":{
//     "url" : "http://192.168.0.146:3000",
//     "cleartext":true
//   },
//   "ios":{
//     "scheme": "Hero Fit"
//   }
// }

