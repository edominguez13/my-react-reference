# Creating my first app #

After checking that npm and node are installed with

```
npm --version
node --version
```

I proceeded to run the command `npm init react-app firstapp`, where "firstapp" is the name of the app.

I got and error:
```
PS C:\Dev\my-react-reference\my-first-app> npm init react-app firstapp
npx: installed 67 in 9.421s
You are running Node 12.18.0.
Create React App requires Node 14 or higher. 
Please update your version of Node.
```

## How to update your Node and NPM ##

To update Node.js run: `nvm install latest`

To update npm run: `npm install -g npm`

Or just download and install the latest version in the official page: [Node.js Downloads.](https://nodejs.org/en/download/)

I downloaded the file form the official page because my machine didn't recognize `nvm`.


## Success! ##

After running the command `npm init react-app firstapp` again the firstapp directory was created.

```
PS C:\Dev\my-react-reference\my-first-app> npm init react-app firstapp
Need to install the following packages:
create-react-app@5.0.1
Ok to proceed? (y) y
npm WARN deprecated tar@2.2.2: This version of tar is no longer supported, and will not receive security updates. Please upgrade asap.

Creating a new React app in C:\Dev\my-react-reference\my-first-app\firstapp.

Installing packages. This might take a couple of minutes.
Installing react, react-dom, and react-scripts with cra-template...


added 1463 packages in 49s

242 packages are looking for funding
  run `npm fund` for details

Installing template dependencies using npm...

added 69 packages, and changed 1 package in 8s

246 packages are looking for funding
  run `npm fund` for details
Removing template package using npm...


removed 1 package, and audited 1532 packages in 4s

246 packages are looking for funding
  run `npm fund` for details

8 vulnerabilities (2 moderate, 6 high)

To address all issues (including breaking changes), run:
  npm audit fix --force

Run `npm audit` for details.

Success! Created firstapp at C:\Dev\my-react-reference\my-first-app\firstapp
Inside that directory, you can run several commands:

  npm start
    Starts the development server.

  npm run build
    Bundles the app into static files for production.

  npm test
    Starts the test runner.

  npm run eject
    Removes this tool and copies build dependencies, configuration files
    and scripts into the app directory. If you do this, you can’t go back!

We suggest that you begin by typing:

  cd firstapp
  npm start

Happy hacking!
PS C:\Dev\my-react-reference\my-first-app> 
```

It included the following files:

- node_modules directory
- public directory
- src directory
- .gitignore file
- package-lock.json file
- package.json file
- README.md file

## Start the app ##

Run the following commands to enter the project directory and then run the server:

```
cd firstapp
npm start
```
After you run the commands above a website will open with the React logo, and in your terminal will appear the following output:

```
          react-scripts  >=2.1.4
          Depends on vulnerable versions of @svgr/webpack
          Depends on vulnerable versions of resolve-url-loader
          node_modules/react-scripts

postcss  <8.4.31
Severity: moderate
Compiled successfully!

You can now view firstapp in the browser.        

  Local:            http://localhost:3000        
  On Your Network:  http://10.0.0.48:3000        

Note that the development build is not optimized.
To create a production build, use npm run build. 

webpack compiled successfully
```

## How to end the execution of the app ##

Press Ctrl + C

## ERROR: react-scripts file missing ##

It is an error about react-scripts file missing in your node_modules/ directory at the time of installation.

Check your react-script dependency is avaliable or not in package.json.

If not available then add it manually via:

```npm install react-scripts --save```