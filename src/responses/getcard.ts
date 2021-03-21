import { 
    ResponseObject
  } from '@loopback/rest';

export const GET_CARD_RESPONSE: ResponseObject = {
    description: 'Get cards',
    content: {
      'application/json': {
        schema: {
          type: 'object',
          title: 'GetCardResponse',
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
  