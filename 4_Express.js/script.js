// Express.js framework

    // Introduction to framework
    // express.js is a npm package
    // framework => A framework is a powerful foundation that saves time, enforces best practices, and helps you build complex apps faster and in an organized way.
    // Manages everything from receiving the request and giving the response
    

// Difference between framework and library 
        // Library: Like a toolbox 🧰 — you pick tools when you need them.
        // Framework: Like a fully equipped workshop 🏗️ — it tells you where and how to work.

       
// Setting up a basic Express Application
    // Installation Express => npm i express
    // Basic Run => node "d:\Backend Domination\4_Express.js\script.js"
    // Run => npx nodemon "d:\Backend Domination\4_Express.js\script.js"
    // Basic routing setup 
        // import express from "express";

        // const app = express()
        // app.get('/', (req, res)=> {
        //     res.send("Hello Shiva!")
        // })
        // app.get('/profile', (req, res)=> {
        //     res.send("Hello Youtube!")
        // })
        // app.listen(3000)

// Middleware 
    // =>Middleware is a **function that sits between a client request and the server response**, allowing you to **process, modify, or handle requests/responses** (like logging, authentication, or parsing data) before they reach the final route handler.

        // Example :- 
                    // import express from 'express'
                    // const app = express()
                    
                    // app.use((req, res, next)=> {
                    //     console.log('Middleware Running');
                    //     next()
                    // })
                    // app.use((req, res, next)=> {
                    //     console.log('Middleware 2 Running');
                    //     next()
                    // })                        
                    // app.get('/', (req, res)=>{
                    //     res.send("Hello World!")
                    // })
                    // app.listen(3000)

// Request and Response Handling

// Error Handling
        import express from 'express';
        const app = express();

        app.get('/', (req, res) => {
        res.send("Hello World!");
        });

        app.get('/profile', (req, res, next) => {
        return next(new Error("Not Implemented"));
        });

        app.use((err, req, res, next) => {
        console.error(err.stack);
        res.status(500).send('Something broke!');
        });

        app.listen(3000, () => console.log("Server running on port 3000"));
