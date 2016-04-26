# Workout Log
This application was built as [CodeMiner Frontend Dev test ](https://gist.github.com/akitaonrails/2cf8d517d5dac8631e47).
The requirements can be found on the original link. 

#### Architecture 
The application was built as a single-page application using cutting-edge tools, such as [React.js](http://facebook.github.io/react). 
It was opted not to use any Flux implementations (like Redux) for state management, since that would grow the applications size and complexity and my knowledge of it is limited.

Despite my lack of experience with ES6 and React yet, I chose to work with it on this project since it's become the *de facto* standard for React. The ES6 class and imports are great to work with React's modular and component based structure.

## Getting started
Make sure you have NodeJS installed on your machine. *The system was built with Node v5.5.0 - incompatiblities with older versions may occur, despite unlikely* 

First, you'll have to download this repo, be it cloning the repo via git or downloading a zip package. Once you pass that step, you will have to run a few commands in the project's folder 
*(Assuming you have a UNIX-like terminal on your machine)*:

 ```
  $ npm install
 ```
That will set up all the needed dependencies for us to build the project. Now, we have to build the project. We have two options:

For **DEBUG**: ` $ npm run build-dev `

For **PRODUCTION**: ` $ npm run build `

This will transpile, minimize and copy the necessary files to the `build` folder. 
Once you do that, you can open the `build/index.html` file in your browser. 

Optionally, you can use a simple local server (like Python's SimpleHTTPServer) to access the files, although the result will be the same. 


## Challenges faced

I decided to use this test as an opportunity to give [Rollup](https://github.com/rollup/rollup/) a try instead of Browserify as my bundle manager. I spent a little more time than expected to configure the dev environemnt due to a behaviour I so far didn't know:
  - React according to its [getting started](https://github.com/facebook/react/blob/f7850dd3d78d313a9e7774870e85c32719fbe233/docs/docs/getting-started.md) uses `process.env` to check the type of environment it is supposed to run as. They propose the following substitution if you're using Webpack:
  
```  
  new webpack.DefinePlugin({
    "process.env": {
      NODE_ENV: JSON.stringify("production")
    }
  });
  
```
  
  That can be replicated in Rollup using [rollup-plugin-replace](https://github.com/rollup/rollup-plugin-replace); 
  
  Also, the project took longer than expected to be developed since I was developing that on my 'free time' during work and I'm still not fully 'fluent' in React + ES6.
  
  ### Future improvements
  If I were to start again, I would probably use WebPack and/or Gulp for the build process. Rollup is great but isn't quite fit for production just yet - it lacks a few things WebPack offers and its build size isn't usually much lesser than WebPack's.
  
  Additionally, I would probably rewrite the CSS to make it more modular and reusable, which wasn't one of my goals while writing it but is definitely important for larger-scaled projects.
  
  On the state management side, I would probably try using Flux, since I noticed at the end of the project that it becomes harder to deal with state once you pass a certain number of state properties; 
  I'm still to experiment with libraries like Alt, Redux and MobX to understand and improve my React applications, and expect them to help greatly with the application's management.