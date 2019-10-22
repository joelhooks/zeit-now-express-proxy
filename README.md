# API endpoint proxy function

This is an example of an api proxy. 

It forwards a request to another endpoint and returns the results.

It uses [express](https://expressjs.com/) to handle the request, [axios](https://github.com/axios/axios) to call the endpoint being proxied, and [async/await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function) to manage the timing.

It deploy's to [Zeit's now](https://zeit.co/docs/v2/introduction/), which looks in the `/api` folder for any JavaScript files and creates a [serverless function](https://zeit.co/docs/v2/serverless-functions/introduction) for any that it discovers. In this case it finds `randomQuote.js` which becomes `/api/randomQuote` on the resulting url when deployed to now.

It is advised that "express doesn't meet the model of now serverless functions" which I take to mean that you probably shouldn't build a multi-endpoint traditional express app using functions, which represent a single endpoint conceptually.

In this case, express is being used because it has nifty middleware plugins features like [cors](https://expressjs.com/en/resources/middleware/cors.html) that "just work".

[![Deploy with ZEIT Now](https://zeit.co/button)](https://zeit.co/new/project?template=https://github.com/zeit/now-examples/tree/master/gatsby)