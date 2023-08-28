import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { LambdaNodeCdkStack } from '../lib/demo-nestjs-stack';



const app = new cdk.App();
new LambdaNodeCdkStack(app, 'DemoNestjsStack');