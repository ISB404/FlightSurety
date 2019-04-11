exports.id=0,exports.modules={"./src/server/server.js":function(e,r,t){"use strict";t.r(r);var n,o=t("./build/contracts/FlightSuretyApp.json"),s=t("./src/server/config.json"),c=t("web3"),a=t.n(c),u=t("express"),i=t.n(u);t("babel-polyfill");function l(e,r,t,n,o,s,c){try{var a=e[s](c),u=a.value}catch(e){return void t(e)}a.done?r(u):Promise.resolve(u).then(n,o)}function p(e){return function(){var r=this,t=arguments;return new Promise(function(n,o){var s=e.apply(r,t);function c(e){l(s,n,o,c,a,"next",e)}function a(e){l(s,n,o,c,a,"throw",e)}c(void 0)})}}var f=[],d=s.localhost,h=new a.a(new a.a.providers.WebsocketProvider(d.url.replace("http","ws")));h.eth.defaultAccount=h.eth.accounts[0];var v=new h.eth.Contract(o.abi,d.appAddress);function g(){return(g=p(regeneratorRuntime.mark(function e(r){var t,o;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.eth.getAccounts();case 2:return n=e.sent,e.next=5,v.methods.REGISTRATION_FEE().call({from:n[0]});case 5:for(t=e.sent,o=0;o<r;o++)m(o);return console.log(t),e.abrupt("return",1);case 9:case"end":return e.stop()}},e)}))).apply(this,arguments)}function m(e){return w.apply(this,arguments)}function w(){return(w=p(regeneratorRuntime.mark(function e(r){var t,o;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=r+20,e.next=3,v.methods.registerOracle().send({from:n[t],value:RegistrationFee,gas:999999});case 3:return e.sent,console.log("registeredOracle2 ",n[t]),e.next=7,v.methods.getMyIndexes().call({from:n[t]});case 7:o=e.sent,console.log("Oracle registered: ".concat(o[0],", ").concat(o[1],", ").concat(o[2])),f.push([n[t],o]);case 10:case"end":return e.stop()}},e)}))).apply(this,arguments)}console.log(n),function(e){g.apply(this,arguments)}(5),v.events.OracleRequest({fromBlock:0},function(e,r){e&&console.log(e)});var x=i()();x.get("/api",function(e,r){r.send({message:"An API for use with your Dapp!"})}),r.default=x}};