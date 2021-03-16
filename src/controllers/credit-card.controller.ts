import {inject} from '@loopback/core';
import {
  Request,
  RestBindings,
  get, post, put, del,
  response,
  ResponseObject,
} from '@loopback/rest';
import {
  TokenServiceBindings,
  MyUserService,
  UserServiceBindings,
  UserRepository,
} from '@loopback/authentication-jwt';
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
export class CreditCardController {
  constructor(
    @inject(TokenServiceBindings.TOKEN_SERVICE)
    public jwtService: TokenService,
    @inject(UserServiceBindings.USER_SERVICE)
    public userService: MyUserService,
    @inject(SecurityBindings.USER, {optional: true})
    public user: UserProfile,
    @inject(RestBindings.Http.REQUEST) 
    private req: Request) {}

   // Map to `GET /ping`
   @get('/creditcard')
   @response(200, CREDIT_RESPONSE)
   getCards(): object {
     // Reply with a greeting, the current time, the url, and request headers
     return {
       greeting: 'Credit card service  from LoopBack',
       date: new Date(),
       url: this.req.url,
       headers: Object.assign({}, this.req.headers),
     };
   }

   // Map to `GET /ping`
   @get('/creditcard/transactions')
   @response(200, CREDIT_RESPONSE)
   getCardTransaction(): object {
     // Reply with a greeting, the current time, the url, and request headers
     return {
       greeting: 'Credit card service  from LoopBack',
       date: new Date(),
       url: this.req.url,
       headers: Object.assign({}, this.req.headers),
     };
   }

   // Map to `GET /ping`
   @post('/creditcard/cancel')
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
   @post('/creditcard/block')
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
    @post('/creditcard/unblock')
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
   @post('/creditcard/activate')
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