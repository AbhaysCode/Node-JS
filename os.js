const os = require('os');

// Operating System
console.log("Platform is ", os.platform());

// Architecture of CPU
console.log("Arch is ", os.arch());

// CPU Core Info
console.log("CPU Core Info is ", os.cpus());

// Free Memory
console.log("Free Memory is ", os.freemem());

// Total Memory
console.log("Total Memory is ", os.totalmem());

// Home Directory
console.log("Home Directory is ", os.homedir());

// uptime
console.log(" uptime is ", os.uptime());
console.log(" uptime min is ", os.uptime()/60);