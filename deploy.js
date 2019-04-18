var FtpDeploy = require('ftp-deploy');
var ftpDeploy = new FtpDeploy();
var dotenv = require('dotenv');
require('nightwatch/bin/runner.js');

// dotenv.config();

// var currentStage = typeof process.argv.slice(2)[0] === 'undefined' ? 'staging' : process.argv.slice(2)[0]; // This gets the stage set, if it isn't set, then we fall back to staging.

// console.log('- Starting deployment to ' + process.env.APP_TITLE + ' server using "' + currentStage + '" settings.');

// var config = {
//     user: process.env.FTP_USER,
//     password: process.env.FTP_PASSWORD,
//     host: process.env.FTP_HOST,
//     port: process.env.FTP_PORT,
//     localRoot: __dirname + process.env.FTP_LOCAL_ROOT,
//     deleteRemote: true,
//     forcePasv: true,
//     include: ['*', '**/*'],
//     // exclude: ['dist/**/*.map']     // e.g. exclude sourcemaps - ** exclude: [] if nothing to exclude **
// }

// switch(currentStage) {
//     case 'staging':
//         config.remoteRoot = '/staging.devitup.co.uk/';
//     break;
//     case 'production':
//         config.remoteRoot = '/devitup.co.uk/';
//     break;
// }

// config.remoteRoot += 'public';

 
// // use with promises
// ftpDeploy.deploy(config)
//     .then(res => {
//         console.log('- Deployment complete using ' + currentStage.toUpperCase() + ' configuration stage at https://' + (config.remoteRoot).substring(1, config.remoteRoot.length - 7))
//     })
//     .catch(err => console.log(err));