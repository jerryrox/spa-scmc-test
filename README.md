# SPA SCMC Test
Another PoC application for SPAs.

## Setting variant mode
Create an env file in the project. Refer to `src/vite-env.d.ts` for the list of env variables it should contain.

`VITE_VARIANT_TYPE` can be either `alpha` or `beta`.

I didn't realize until I finished implementing that names alpha and beta may be confused for application version. But, I purely meant as different app variant name.

## Folder structure
### src/api
Contains list of third-party integration classes such as login, logout, get items, add item, etc.

The `ApiContainer.ts` file exports the appropriate dependency container for the current variant mode specified in env. For example, see the constructors of `src/providers/variants/AlphaVariantProvider.ts` and `BetaVariantProvider.ts`, where they assign value to `this.apiContainer`.

Each folder under the `api` folder contains the base api declaration and cloud-specific implementation logics.

### src/app
The base scaffolding of the app 🏗

### src/components
Components 🧩

### src/deps
A single file that exports dependency container. It also demonstrates initializing `VariantProvider` dependency for two different variant types.

### src/models
Entity models, types, converters

### src/pages
Pages.

The folder in `src/pages/login/loginForm` shows an example of variant-specific rendering of a component.

### src/providers
App-level dependencies go here.

### src/utils
Utilities 🔧

## Config values for cloud integration
See `src/vite-env.d.ts` file structure and comments.

## Awilix library
Kinda becomes off-topic but as a person in love with C#, I wanted to know what the experience of DI would be like in TypeScript... with React?

So this `awilix` library seemed a pretty decent one and decided to try it out.

The result was not so great. Every time I changed something within any of the dependencies, the hot reload will trigger, but all states will be lost... WTF?  
Who knows, I might've done something wrong 🤷‍♂️

I don't remember `zustand` or `jotai` doing this shit but darn it, I thought I was so close in working with React like C# applications 😂

## Security consideration for production
This is a simple example that connects with cloud services using client SDKs. There may be several security risks associated if you just go this way. For simplicity, I'll use Firebase as an example.

1. Your only reliance of security is on the cloud configuration. (E.g. Firestore security rules)
2. You can't properly validate data types and whatever that goes into the database. This can happen if an attacker gets hold of an auth key and make custom requests to Firestore. As long as the requests pass the security rules placed, there's no way of knowing what data they'll put in and mess with the system.

If the above two are not of a concern, then so be it 🙃

I think a potential solution here is incorporating serverless functions (or any other that can use admin SDK) which can bypass security rules for any type of write access.

This means you could write security rules that always return `false` for any write access, effectively blocking all write requests from the client-side.

These write requests should be mediated through the admin SDK so it can handle proper validation and write to the database.

A simple example using serverless function backend would be as such:
- Implement serverless functions app separately. (PoC https://github.com/jerryrox/serverless-scmc-test)
- Forget about variant-specific implementation for `src/api`. Instead, come up with a way to call the desired serverless function based on current variant.