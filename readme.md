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

setup app.js:

setup users.js:

setup knex.js and knexfile.js:

create a migration createusers with the knex cli:
_________________________________
jonmacbook:express_knex jon$ knex

  Usage: knex [options] [command]

  Commands:

    init [options]                         Create a fresh knexfile.
    migrate:make [options] <name>         Create a named migration file.
    migrate:latest                         Run all migrations that have not yet been run.
    migrate:rollback                       Rollback the last set of migrations performed.
    migrate:currentVersion                View the current version for the migration.
    seed:make [options] <name>            Create a named seed file.
    seed:run                              Run seed files.

  Options:

    -h, --help         output usage information
    -V, --version      output the version number
    --debug            Run with debugging.
    --knexfile [path]  Specify the knexfile path.
    --cwd [path]       Specify the working directory.
    --env [name]       environment, default: process.env.NODE_ENV || development
_________________________________

* `knex migrate:make create_users` generates migrations dir with timestamped 20151217144455_create_users.js file
* fill 20151217144455_create_users.js exported functions
* `knex migrate:latest`




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
