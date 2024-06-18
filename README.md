# SPA SCMC Test
Another PoC application for SPAs.

## Additional notes
### Config values for cloud integration
See `src/vite-env.d.ts` file structure and comments.

### Awilix library
Kinda becomes off-topic but as a person in love with C#, I wanted to know what the experience of DI would be like in TypeScript... with React?

So this `awilix` library seemed a pretty decent one and decided to try it out.

The result was not so great. Every time I changed something within any of the dependencies, the hot reload will trigger, but all states will be lost... WTF?  
Who knows, I might've done something wrong 🤷‍♂️

I don't remember `zustand` or `jotai` doing this shit but darn it, I thought I was so close in working with React like C# applications 😂

### Security consideration for production
This is a simple example that connects with cloud services using client SDKs. There may be several security risks associated if you just go this way. For simplicity, I'll use Firebase as an example.

1. Your only reliance of security is on the cloud configuration. (E.g. Firestore security rules)
2. You can't properly validate data types and whatever that goes into the database. This can happen if an attacker gets hold of an auth key and make custom requests to Firestore. As long as the requests pass the security rules placed, there's no way of knowing what data they'll put in and mess with the system.

If the above two are not of a concern, then so be it 🙃

I think a potential solution here is incorporating serverless functions (or any other that can use admin SDK) which can bypass security rules for any type of write access.

This means you could write security rules that always return `false` for any write access, effectively blocking all write requests from the client-side.

These write requests should be mediated through the admin SDK so it can handle proper validation and write to the database.