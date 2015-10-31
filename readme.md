# ES6 Refactor

In order to make this work, you need to have node.js. You can check to see if you have node.js by running ***node -v*** from the command line.


If you don't have node, you can find some node here:

https://nodejs.org/en/



Once you do have node, clone the repository and from the repository root run ***npm install***. 


# Command Line Tasks
This project has two main command-line tasks you can run. 

```
npm start /* starts the build/watch tasks for any files in the es6 folder */
		 /* the build/watch tasks compile the files from the es6 folder into the dist/main_es6.js file */
		 /* also starts the test runner with the compiled file */
npm test /* runs the tests with the main.js (original) file */

```

# Index Files

This project has two index files. They are identical except for the javascript file they include. index-js.html loads with main.js (the original javascript file); index-es6.html loads with main_es6.js, the javascript file compiled from the files in the es6 directory. 
