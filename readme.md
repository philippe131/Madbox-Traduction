# Madbox-Traduction

Translation web app using NodeJs / ExpressJs / React / MongoDb

## Installation

To install the dependencies
```
npm install
cd client && npm install
```

## Test

Run tests
```
jasmine
```

## run the app

Run nodejs
```
npm start
```

Run React app
```
npm run client
```

## Improvement

- Charge a list of word on the front so you don't have to make a request for every word

- Remove nodemodule/@vitalets and Use Google account to translate without limitation

- Upgrade the front

- Gamify around the number of life you still had (instead of a number use heart emoji)

## Why commit the node_modules/@vitalets

The google translate API was utilisable only if I made an account and add payement methods. I found a way to use it without doing that here :

- https://github.com/matheuss/google-translate-api/issues/79

Ase you can see on the link I had to change a file in node_modules/@vitalets.

Because I had to change a file inside I had to commit it.
