## Bjorn's thoughts:

### What is the added value of Microfrontends in a Microservices Architecture
 The added value of Microfrontends within a Microservices architecture is that you can keep comparable domain logic and implementation close to eachother. A microservice with a specific function can be tied in more closely with a specific frontend that implements this service and the required logic around that. Using a public API for both the front- and back-end, we can tie in other parts of the application.

### Added value of Microfrontends with the Codestar (FRP) stack
 Microfrontends within the Codestar (FRP) stack is still not entirely clear to me. If you want to enable reactivity throughout a micro-frontend app with multiple internal frontends, this means you will have to think about a reactive API between these frontends and internal components. This, in my opinion and expectation, might make for a more complex architecture frontend wise then if you were to stick with a singular application. This also enables "micro-frontends" to a sense in the form components libraries, building blocks and all that. When you have separate apps and want to introduce reactivity, to me, will add more complexity than it reduces.

### What effects do Microfrontends have on maintainability, extensibility, autonomy, re-use, performance?
I think the main selling point and powerful asset that a microfrontend brings is the very tight scope you can have on an "app". Whether this ties in directly with a microservice, or just takes care of a very specific piece of functionality or feature doesn't really matter. This is also a good point in regards for autonomy and perhaps even re-use within the same application, or even over applications. Having separate apps allows developers to independantly develop their own features and value, without having to know about other parts of the app. In regards of reuse; a good architecture will allow separate apps to reuse existing components, and perhaps create reusable features to be used over multiple frontend applications when that need arises.

In regards to maintainability and extensibility; this is not so clear. The added costs in regards of managing multiple projects, dependency management and updating, separate repositories (or a monorepo with other pros and cons) make it difficult to keep track how all the parts might tie into eachother. There's also a bit of overhead to keep in mind for each project in regards of being able to build and test all parts.

## Parts not mentioned / to be further examined:
[] Using multiple paradigms within one app (React / Angular / Vue in one app). Why would you want to do this? What benefits and drawbacks does this have? If there's a good concrete reason why you would want this, that's a good pro for a micro-frontend architecture.
[] Deployment of micro-frontend parts; do you deploy each separately and tie them together in the runtime?
[] Complexity of the final build for the project; how do you build all parts, how do you finally deploy?
