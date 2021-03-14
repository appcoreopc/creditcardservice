// Uncomment these imports to begin using these cool features!

// import {inject} from '@loopback/core';
import {inject} from '@loopback/core';
import {
  Request,
  RestBindings,
  get, post, put, del,
  response,
  ResponseObject,
} from '@loopback/rest';


const CREDIT_RESPONSE: ResponseObject = {
  description: 'Ping',
  content: {
    'application/json': {
      schema: {
        type: 'object',
        title: 'PingResponse',
        properties: {
          greeting: {type: 'string'},
          date: {type: 'string'},
          url: {type: 'string'},
          headers: {
            type: 'object',
            properties: {
              'Content-Type': {type: 'string'},
            },
            additionalProperties: true,
          },
        },
      },
    },
  },
}

export class CreditCardController {
  constructor(@inject(RestBindings.Http.REQUEST) private req: Request) {}

   // Map to `GET /ping`
   @get('/creditcard/ping')
   @response(200, CREDIT_RESPONSE)
   ping(): object {
     // Reply with a greeting, the current time, the url, and request headers
     return {
       greeting: 'Credit card service  from LoopBack',
       date: new Date(),
       url: this.req.url,
       headers: Object.assign({}, this.req.headers),
     };
   }
}



