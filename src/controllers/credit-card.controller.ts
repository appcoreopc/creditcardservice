/*

eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE2MTYwNDA3MzEsImV4cCI6MTY0NzU3Njc3MiwiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoianJvY2tldEBleGFtcGxlLmNvbSIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6Im1hbmFnZXIifQ.PVpvo5o44dS7G79Cq-qb_-hebNbEg0ttx2gKk6WT-Zo

*/

import {inject} from '@loopback/core';
import {
  Request,
  RestBindings,
  get, post, put, del,
  response,
  requestBody
} from '@loopback/rest';
import {
  TokenServiceBindings
} from '@loopback/authentication-jwt';
import {authorize} from '@loopback/authorization';
import {TokenService} from '@loopback/authentication';
import {SecurityBindings, UserProfile} from '@loopback/security';
import {authenticate} from '@loopback/authentication';
import { PING_RESPONSE } from '../responses/ping';
import { GET_CARD_RESPONSE } from '../responses/getcard';

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

   @get('/')
   @response(200, GET_CARD_RESPONSE)
   getCards(@requestBody() account: string): object {
     // Reply with a greeting, the current time, the url, and request headers
     return {
       greeting: 'Credit card service from LoopBack',
       date: new Date(),
       url: this.req.url,
       headers: Object.assign({}, this.req.headers),
     };
   }

   // Map to `GET /ping`
   @get('/transactions')
   @response(200, PING_RESPONSE)
   getCardTransaction(): object {
     // Reply with a greeting, the current time, the url, and request headers
     return {
       "message" : "hello there!!!"
     };
   }

   // Map to `GET /ping`
   @post('/cancel')
   @response(200, PING_RESPONSE)
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
   @response(200, PING_RESPONSE)
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
    @response(200, PING_RESPONSE)
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
   @response(200, PING_RESPONSE)
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
   @response(200, PING_RESPONSE)
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