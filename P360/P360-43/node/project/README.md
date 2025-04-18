# Order Management Service

This is a Node.js Express service for managing customer orders. It uses OAuth for authentication and the winston logger for logging.

## How to run

1. Install the dependencies: `npm install`
2. Start the server: `npm start`

## API

### Get Orders

`GET /orders`

Fetches all customer orders.

## Error Handling

All errors are handled by a middleware. When an error occurs, it is logged and a generic error message is sent to the client.

## Logging

All logs are saved in the `combined.log` file. Errors are additionally saved in the `error.log` file.

## Authentication

This service uses OAuth for authentication. The user token and secret need to be provided in the `oauth.get` method.