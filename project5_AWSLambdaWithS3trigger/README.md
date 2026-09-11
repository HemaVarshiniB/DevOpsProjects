# With S3 as trigger

S3 -> Create Bucket -> image1bukcet -> create bucket

When you configure an S3 event trigger, S3 needs permission to invoke your Lambda function.

Create a lambda function -> name: `resizeImageFunction`, Runtime: `Python.3.10`, (use the code given below) -> Custom Settings -> enable 'Custom Execution role' -> Create New Role -> Create new policy and add code snippets as here (`resizeImageFunction-role-mvlae2lo`) -> Save -> Create Function

### Policy

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "s3:GetObject",
        "s3:PutObject"
      ],
      "Resource": "arn:aws:s3:::image1bukcet/*"
    }
  ]
}
```

### Lambda Function

```python
import json

def lambda_handler(event, context):
    # TODO implement
    print("Hello from Lambda!!")

    return {
        'statusCode': 200,
        'body': json.dumps('Hello from Lambda!')
    }
```

for the lambda function -> Add Trigger -> select a source: s3, Bucket: image1bukcet, check mark the -> I acknowledge costs applicable for recursive uploads -> add.

Under s3 Properties -> Event Notifications -> you can see the lambda function.

Under resizeFunction -> configurations -> Permissions -> resource-based policy statements -> you will see the permissions to access s3 bucket.

Now go to s3 -> Upload image file -> It should trigger lambda function, and it can be seen in the cloudwatch logs.

Clean up s3 bucket, lambda function

NOTE: The Lambda execution role gives Lambda permission to access S3, while adding the S3 trigger automatically creates a resource-based policy on Lambda that gives S3 permission to invoke the Lambda function.
