import { LambdaDataSource } from "aws-cdk-lib/aws-appsync";
import { handler } from './handler';
import { Context, Callback } from 'aws-lambda';

interface EventBody {
    key: string;
    bucket: string;
}

interface LambdaEvent{ body: EventBody }

interface LambdaResponse{
    statusCode: number;
    body: string;
    headers?: {
        [key:string]: string;
    }
}
 // Create a mock context
 const context: Context = {
    callbackWaitsForEmptyEventLoop: true,
    functionName: 'read-tagline',
    functionVersion: '1',
    invokedFunctionArn: 'test-arn',
    memoryLimitInMB: '128',
    awsRequestId: 'test-request-id',
    logGroupName: 'test-log-group',
    logStreamName: 'test-log-stream',
    getRemainingTimeInMillis: () => 1000,
    done: () => {},
    fail: () => {},
    succeed: () => {},
};

// Create a mock callback
const callback: Callback = (error, result) => {
    if (error) {
        console.error('Callback error:', error);
    }
    return result;
};

async function localTest(): Promise<void>{
    const event: LambdaEvent = {
        body: {
            key: "",
            bucket: ""
        }
    };
    try {
        const response: LambdaResponse = await handler(event, context, callback);
        console.log(response.statusCode, response.body);
        if (response.statusCode === 200) {
            console.log("test passed")
        } else {
            console.error('Test failed with status', response.statusCode);
        }
    }
    catch (error) {
        console.error('Test error:', error instanceof Error ? error.message : error);
        process.exit(1);
    }
    
}
