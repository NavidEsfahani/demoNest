import * as cdk from '@aws-cdk/core';
import * as lambda from '@aws-cdk/aws-lambda';
import * as apigateway from '@aws-cdk/aws-apigateway';


export class LambdaNodeCdkStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const myFunction = new lambda.Function(this, 'LambdaNodeStack', {
      code: lambda.Code.fromAsset('./src'),
      functionName: "lambdaNode",
      handler: 'index.handler',
      memorySize: 1024,
      runtime: lambda.Runtime.NODEJS_14_X,
      timeout: cdk.Duration.seconds(300),
    });


    // Defines an API Gateway REST API resource backed by our "helloWorldFunction" function.
    new apigateway.LambdaRestApi(this, 'Endpoint', {
      handler: myFunction
    });
    
  }
}




