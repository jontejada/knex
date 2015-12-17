* `npm install --save express ejs pg knex body-parser method-override morgan locus`
	* express: framework 
	* ejs: emedded javascript inside serverside template html
	* pg: connect to postgres
	* knex: knex stuff
	* body-parser: getting stuff from body of POST request
	* method-override: UPDATE and DELETE
	* morgan: server side logging 
	* locus: debugging

* `knex init` to start knex by creating a knexfile specifies connection to database

* VIEWS
	* mkdir
	* cd views
	* `touch {new,edit,index,show}.ejs`
* CONTROLLERS (will also have the minimal MODEL logic)
	* mkdir
	* cd controllers
	* `touch users.js`
* DB
	* `touch knex.js` creates object that is passed to conroller(?)

* `createdb userapp` and same to check 
* edits to knexfile to aid dev:
	* dev client: postgresql
	* dev connection filename: userapp
	* dev debug: true
	* dev pool: {min:1, max:1}

in app.js:




____________________________________________________________
error during npm install
> deasync@0.1.4 install /Users/jon/GalvanizeProjects/express_knex/node_modules/deasync
> node ./build.js

xcode-select: error: tool 'xcodebuild' requires Xcode, but active developer directory '/Library/Developer/CommandLineTools' is a command line tools instance

xcode-select: error: tool 'xcodebuild' requires Xcode, but active developer directory '/Library/Developer/CommandLineTools' is a command line tools instance

  CXX(target) Release/obj.target/deasync/src/deasync.o
  SOLINK_MODULE(target) Release/deasync.node
Installed in `/Users/jon/GalvanizeProjects/express_knex/node_modules/deasync/bin/darwin-x64-node-5/deasync.node`
express_knex@1.0.0 /Users/jon/GalvanizeProjects/express_knex
