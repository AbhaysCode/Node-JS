const path = require('path');

// BaseName
console.log("BaseName is ",path.basename(__filename));

// DirName
console.log("DirName is ",path.dirname(__filename));

// ExtName
console.log("ExtName is ",path.extname(__filename));

// Significant Property Representing Path
console.log("Property Representing Path is ",path.parse(__filename));

// Joins all fileName together
console.log("Joins all fileName together",path.join(__dirname,"hello","index.html"));

