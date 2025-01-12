# Intermittent Server Crashes in Node.js without Error Messages

This repository demonstrates a scenario where a Node.js HTTP server crashes intermittently without providing any error messages in the console. The server is a simple example using the `http` module. The cause of the crashes and solutions are explored.

## Bug

The provided `server.js` file contains a basic HTTP server.  Under heavy load or after prolonged runtime, this server may unexpectedly crash without any indication in the console logs. This makes debugging and resolving the issue extremely challenging.

## Solution

The solution involves using the `process.on('uncaughtException')` event listener to catch and handle unexpected exceptions that might lead to the server crashing. This listener logs the error to the console and helps identify the root cause.

The `serverSolution.js` file implements this solution.  Additionally, it's best practice to implement robust error handling within the request handling logic itself.