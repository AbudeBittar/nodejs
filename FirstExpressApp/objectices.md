# metadata
* a set of data that describes and gives information about other data.


# npm Init and package.json: 
* is located in the path: ..\node_modules\express\package.json
* it holds metadata relevant to a specific project so it contains all the meta data about this particular application or this package express (so it contains a description a name an author and so on and then all the different contributors who have added to it. It also contains the license the github repository URL,  the homepage so it can be used to search for it and probably most importantly the dependencies.
* Dependencies: These are all the packages that express relies on that it needs in order to work.




* When we install a package with NPM install and we add on the flag "--save" at the end.  it will take the package name and version and automatically save it into our package.json file


* Use "npm init" to create the package.json automatically  --> 
npm init --> Enter
Press ^C at any time to quit.
package name: (packagejsondemo)
version: (1.0.0)
description: Simple Package.json Demo
entry point: (index.js) app.js
test command:
git repository:
keywords:
author: Abudé
license: (ISC)
About to write to C:\Users\abittar\Desktop\HTML&CSS&JS\nodeJs\PackageJsonDemo\package.json:

{
  "name": "packagejsondemo",
  "version": "1.0.0",
  "description": "Simple Package.json Demo",
  "main": "app.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Abudé",
  "license": "ISC"
}


Is this OK? (yes)


than let's go and install a new package will do express. --> 
npm install express --save 

And you see we now end up with a dependancies field in the package.json file (express : version)


* so --save add our Pachages to the dependencies in the package.json file automatically.
