exports.id=0,exports.modules={"./src/server/server.js":function(e,s,o){"use strict";o.r(s);var t=o("./build/contracts/FlightSuretyApp.json"),r=o("./src/server/config.json"),x=o("web3"),c=o.n(x),n=o("express"),a=o.n(n),l=r.localhost,u=new c.a(new c.a.providers.WebsocketProvider(l.url.replace("http","ws")));u.eth.defaultAccount=u.eth.accounts[0],accounts=u.eth.getAccounts();var i=new u.eth.Contract(t.abi,l.appAddress);console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxx"),i.events.OracleRequest({fromBlock:0},function(e,s){e&&console.log(e),console.log(s)});var p=a()();p.get("/api",function(e,s){s.send({message:"An API for use with your Dapp!"})}),s.default=p}};