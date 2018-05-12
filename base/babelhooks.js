console.log('STARTING: ','babelhooks.js');
require('babel-register')({
    only: ['./base/node_modules/test/*','./base/node_modules/app/*']
    // only: [/app/,'tests']
    //  ignore: /(?!^app])/
    // presets: ['es2015'],
    // ignore: function(filename) {
    //     // console.log('ffffffffffffffffffffffffffffffffff');
    //     // console.log('filename: ',filename);
    //     return filename.toString().includes('/app') || filename.toString().includes('/test');
    //
    // },
});