/*

eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE2MTYwNDA3MzEsImV4cCI6MTY0NzU3Njc3MiwiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoianJvY2tldEBleGFtcGxlLmNvbSIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6Im1hbmFnZXIifQ.PVpvo5o44dS7G79Cq-qb_-hebNbEg0ttx2gKk6WT-Zo

*/



import {inject} from '@loopback/core';
import {
  Request,
  RestBindings,
  get, post, put, del,
  response,
  ResponseObject, requestBody
} from '@loopback/rest';
import {
  TokenServiceBindings
} from '@loopback/authentication-jwt';
import {authorize} from '@loopback/authorization';
import {TokenService} from '@loopback/authentication';
import {SecurityBindings, UserProfile} from '@loopback/security';
import {authenticate} from '@loopback/authentication';

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

@authenticate('jwt')
@authorize({
  allowedRoles: ['Manager', 'customer']
})
export class CreditCardController {
  constructor(
    @inject(TokenServiceBindings.TOKEN_SERVICE)
    public jwtService: TokenService,
    @inject(SecurityBindings.USER, {optional: true})
    public user: UserProfile,
    @inject(RestBindings.Http.REQUEST) 
    private req: Request) {}

   // Map to `GET /ping`
   @get('/')
   @response(200, CREDIT_RESPONSE)
   getCards(@requestBody() account: string): object {
     // Reply with a greeting, the current time, the url, and request headers
     return {
       greeting: 'Credit card service  from LoopBack',
       date: new Date(),
       url: this.req.url,
       headers: Object.assign({}, this.req.headers),
     };
   }

   // Map to `GET /ping`
   @get('/transactions')
   @response(200, CREDIT_RESPONSE)
   getCardTransaction(): object {
     // Reply with a greeting, the current time, the url, and request headers
     return {
       "message" : "hello there!!!"
     };
   }

   // Map to `GET /ping`
   @post('/cancel')
   @response(200, CREDIT_RESPONSE)
   cancelCard(): object {
     // Reply with a greeting, the current time, the url, and request headers
     return {
       greeting: 'Credit card service  from LoopBack',
       date: new Date(),
       url: this.req.url,
       headers: Object.assign({}, this.req.headers),
     };
   }

   // Map to `GET /ping`
   @post('/block')
   @response(200, CREDIT_RESPONSE)
   blockCard(): object {
     // Reply with a greeting, the current time, the url, and request headers
     return {
       greeting: 'Credit card service  from LoopBack',
       date: new Date(),
       url: this.req.url,
       headers: Object.assign({}, this.req.headers),
     };
   }

      // Map to `GET /ping`
    @post('/unblock')
    @response(200, CREDIT_RESPONSE)
    unBlockCard(): object {
        // Reply with a greeting, the current time, the url, and request headers
        return {
          greeting: 'Credit card service  from LoopBack',
          date: new Date(),
          url: this.req.url,
          headers: Object.assign({}, this.req.headers),
        };
      }
   

   // Map to `GET /ping`
   @post('/activate')
   @response(200, CREDIT_RESPONSE)
   activateCard(): object {
     // Reply with a greeting, the current time, the url, and request headers
     return {
       greeting: 'Credit card service  from LoopBack',
       date: new Date(),
       url: this.req.url,
       headers: Object.assign({}, this.req.headers),
     };
   }

   // Map to `GET /ping`
   @post('/creditcard/apply')
   @response(200, CREDIT_RESPONSE)
   applyForCard(): object {
     // Reply with a greeting, the current time, the url, and request headers
     return {
       greeting: 'Credit card service  from LoopBack',
       date: new Date(),
       url: this.req.url,
       headers: Object.assign({}, this.req.headers),
     };
   }
}