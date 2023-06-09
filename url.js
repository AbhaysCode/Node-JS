const url = require('url');

const myUrl = new URL("http://myweb.com:3000/videoplay?id=200&status=awesome");

// Accessing the URL
console.log(myUrl.href);
console.log(myUrl.toString());

// Host
console.log("host is ",myUrl.host);

// HostName
console.log("hostname is ",myUrl.hostname);

// PathName
console.log("pathname is ",myUrl.pathname);

// Serialized Query
console.log("serialized query is ",myUrl.search);

// Search Params
console.log("search params is ",myUrl.searchParams);

// appending the Search Params
myUrl.searchParams.append('winner','csk');
console.log("search params after append is ",myUrl.searchParams);

// Looping Through SearchParams
console.log("Looping Through SearchParams is ");
myUrl.searchParams.forEach((value,name) => {
    console.log(`${name} : ${value}`);
});




