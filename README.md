## Webpack React Electron Boilerplate

### Introduction

A very minimal boilerplate for creating a Desktop application with a react app.

Just combined information from a few sources listed below:

[Building a desktop application with Electron - Kristian Poslek](https://medium.com/developers-writing/building-a-desktop-application-with-electron-204203eeb658)

[Developing desktop applications with Electron and React - M Ahsan](https://medium.com/@Agro/developing-desktop-applications-with-electron-and-react-40d117d97564)

[How to store user data in Electron - Cameron Nokes](https://medium.com/@ccnokes/how-to-store-user-data-in-electron-3ba6bf66bc1e)

and official documentation of the technologies involved(not much required though)

This boilerplate is well documented and is enough to get you going on the right track to build a desktop application with electron and react.

**Update 1:** If you resize the window the app remembers the size and starts in that size on restart, used apps AppData in the OS to store the preference

### Getting Started
Right now you have to run two commands to get this application started.

1. Clone this repo
2. run `npm install`

For Development

3. run `npm run webpack`. Keep this running. **Do not Close this terminal**
4. run `npm start` in another terminal.
    
For Production

3. run `npm run build` to build the app for production(change the platform in npm script for a different platform)

This should open the electron app with react app running inside it.

### Missing Features(For my note)
1. Application's own database - Found a few alternatives for applications own database implementation
  * [Pouch DB](https://pouchdb.com/)(JS implementation of CouchDB)
  * [Node Postgres](https://github.com/brianc/node-postgres) (has external dependencies)
  * [NeDb](https://github.com/louischatriot/nedb) (database which can be in-memory or persisted implements mongo api)
  
Note: I do not feel the need for the application to have its own database. Most of 
     the offline storage can be taken care of using the primitive AppData store that 
     we have. But if you want it, do tell (with upsides to doing it, use cases, etc.).

### Issues?
Don't worry just raise an issue in github, and i'll look into it.