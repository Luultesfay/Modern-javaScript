////MODERN JAVASCRIPT DEVELOPMENT OVERVIEW

/*
Nowadays, the web app codebase is increasing, and using a single script.js file to fit the entire javascript code in one file is not a good practice in terms of page load time*/

//modules
//A module is just a file. One script is one module. As simple as that.

//if we are working in project we might have more codes, working this  project in  single file is more sophesticated , so modules come to solve this problem

//by divide our entire project into multiple modules, then these modules can share data between them and make our code more organized and maintainable

/*
Now what's great about modules is we can use third-party modules within our application. 
There are various packages shared on the NPM (NODE PAKAGE MANAGER)repository which can be used e.g. React, Leaflet and etc
*/

/*
So let's say that we are done writing our project code, we divided it into multiple modules and we included some 3rd-party modules as well. 
And so now the development step is complete. Now, this is not the end of the story. At least not when rebuilding a real-world application.

-Instead, our project now needs to go through a build process, 
 where one big final JavaScript bundle is built. And that's the final file, which we will deploy to our web server for production.

- a build process can be something really complex, but keeping it simple here and can be divided into two major steps. 

-**first step, we'll bundle all our modules together into one big file. This is a pretty complex process that can eliminate unused code and compress code as well. 
    -This step is super important for two big reasons.
     1.First, older browsers don't support modules at all. And so code that's in a module could not be executed by any older browser.
     2.And second, it's also better for performance to send fewer files to the browser, and it's also beneficial that the bundling step compresses our code. 

-**SECOND step, we do something called 'Transpiling' and 'Polyfilling', which is basically to convert all modern JavaScript syntax and features back to old ES5 syntax, 
so that even older browsers can understand our code without breaking. And this is usually done using a tool called Babel. 
*/

//we don't perform these steps ourselves. Instead, we use a special tool to implement this build process for us. And the most common build tools available, are probably Webpack and Parcel

// Webpack and Parcel   called JavaScript bundlers because well, as the name says they take our raw code and transform it into a JavaScript bundle

//-Webpack is the more popular one, but it can be really hard and confusing to set it up  because there's a lot of stuff that we need to configure manually, in order to make it work properly.

//-Parcel, on the other hand, is a zero-configuration bundler, which simply works out of the box. And so in this bundler, we don't have to write any setup code, which is really amazing.
//after these two steps, we end up with that final JavaScript bundle, ready to be deployed on a server for production.

////////modules behind the scine
//So we can think of modules as small building blocks that we can then put together in order to build really complex applications.

//modules are small reusable components that can be imported and exported between them and combined to form a bigger application.

//Modules can load each other and use special directives export and import to interchange functionality, call functions of one module from another one:

/////export
//--So with exports,  we can export values out of a module for example, simple values or even entire functions. And whatever we export from a module is called the public API.
//this public API is actually consumed by importing values into a module.

////import
//just like we can export values in modules, we can usually also import values from other modules.And these other modules from which we import are then called dependencies of the importing module

//The benefits of using modules

//1.Composition: These small building blocks put together to build complex applications.
//2.Isolation: Modules are developed in isolation without thinking about other codebases.
//3.Abstraction: Hiding implementation details from other components and only sharing functionalities.
//4.Organization: Allows you to organize your code into small file chunks, with each file responsible for one job. or
//5.Reusability: Modules can be easily used with other projects for their specific functionality.
//6.Encapsulation: Just like you can expose a piece of code from a file, you can also hide / protect another piece of code from public access.

/* 
ES6 modules are modules that are actually stored in files and each file is one module.

So there is exactly one module per file. But now you might be thinking,

well, scripts are usually also files, right?And that's of course true.

And so let's not compare these two types of files in order to understand

that there are actually huge differences between old school scripts and modern ES6 modules.
*/

////////                     ES6 modules  VS old school scripts

///ES6 modules

//1. top level variable is 'scoped to module'

/*-So basically variables are privateto the module by default.

And the only way an outside module can access a value that's inside of a module

is by exporting that value.So just as we learned in the last slide.But if we don't export,

then no one from the outside can see the variable.

2,ES modules are always executed in strict mode ,with modules, there is no more need to manually declare strict mode.

3,'this'  keyword is always undefined at the top level

4,is that we can export and import values between them using this ES6 import and experts syntax.

note:imports and exports,which is the fact that they can only happen at the top level.So as you know, outside of any function or any if block, if we try to use them inside them error thrown

-Also all imports are hoisted.So no matter where in a code you're importing values,it's like the import statement

will be moved to the top of the file.So in practice importing values is always the first thing that happens in a module.

5,<script type="module"> in order to link a module to an HTML file,we need to use the script tag with

the type attribute set to module,instead of just a plain script tag.


6,And finally about downloading the module files themselves.This always automatically happens in an asynchronous way.

And this is true for a module loaded from HTML as well as for modules that are loaded by importing one module into another,

using the import syntax.

///script
1.top level variables are always global? And this can lead to problems

like global namespace pollution,where multiple scripts try to declare variables

with the same name and then these variables collide.

2,are executed in sloppy mode by default.

3,while in scripts it points at the window object, 

4,In regular scripts, importing and exporting values is just completely impossible.

5.<script>

6,Now regular scripts on the other hand are downloaded by default in a blocking synchronous way, unless we use the async
*/

/////////let's dig a bit deeper and really understand how modules actually import other modules behind the scenes.

//eg let's analyze what happens in this small code example.

//we are importing    rand method from maths.js  and showDice from dom.js   to our module  index. js
/*
import { rand } from './maths.js';
import { showDice } from './dom.js';
const dice = rand(1, 6, 2);
showDice(dice)
*/

// we will dig deep what happen behind the scine    and see the picture that dominstrated the process
/*
-Now, as always, when a piece of code is executed, the first step is to parse that code.(to read the  code without excuting it )

-import code is hoisted when parase code happening ,And in fact, the whole process of importing modules
happens before the code in the main module is actually executed. 

-So in this example,the index.js module imports,the rand and math modules in a synchronous way.

What that means is that only after all imported modules have been downloaded and executed,

the main index.js module will finally be executed as well.




-But you might ask why do we actually want modules to be loaded in a synchronous way? Isn't synchronous bad?

answer :Well, the answer is that this is the easiest way in which we can do things like bundling and dead code elimination.
So basically deleting code that's actually not even necessary.

-this is very important in large projects with hundreds of modules and that includes third party modules

from which we usually only want a small piece and not the entire module.So by knowing all dependencies

between modules before execution,bundlers like webpack and Parcel can then join multiple modules together

and eliminate that code.And so essentially this is the reason why we can only import and export

outside of any code that needs to be executed.

-So after the parsing process,HAS figured out which modules it needs to import,then these modules are actually downloaded from server

note:  downloading from server actually happens in an Asynchronous way.It is only the importing operation itself

that happens synchronously.
-Then after a module arrives, it's also parsed and the modules exports are linked to the imports in index.js.
*/

/*
So for example, the math module exports a function called rand.And this export is then connected

to the rand import in the index.js module.And this connection is actually a live connection.So exported values are not copied to imports.

Instead, the import is basically just a reference to the export at value like a pointer. So when the value changes in the exporting module,

then the same value also changes in the importing module. 


then the code in the imported modules is executed. And with this the process of importing modules is finally finished. then  fimally index.js is excuted
*/
