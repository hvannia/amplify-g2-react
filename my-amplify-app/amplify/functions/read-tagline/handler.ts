import { Handler } from 'aws-lambda';

export const handler: Handler = async (event) => {
    console.log('Handler event:' + JSON.stringify(event, null, 2));
    return {
        statusCode: 200,
        body:JSON.stringify(event)
    }
}