## With API Gateway as Trigger

* Create a Lambda function **[name: `2ndFunctionApiGateway`]** (use the code given below).

* **API Gateway → Create API → Create REST API**

  * Name: `firstRESTAPI`
  * New API
  * API endpoint type: `Regional`
  * IP address type: `IPv4`
  * Click **Create API**

* **API Gateway → Create Resource**

  * Resource Name: `triggerLambda`

* **Create Method → Method Details**

  * Method: `GET`
  * Integration Type: `Lambda Function`
  * Choose the Lambda function (`2ndFunctionApiGateway`) which we created above.
  * We can also pass a request body.
  * Click **Create Method**

* **Deploy API**

  * Deployment stage: `New Stage`
  * Stage Name: `dev`
  * Click **Deploy**

Example URL:

```text
https://h933vy5iw9.execute-api.us-east-1.amazonaws.com/dev
```

It will give a **Missing Authentication Token** error.

If we add `/triggerLambda` to the URL:

```text
https://h933vy5iw9.execute-api.us-east-1.amazonaws.com/dev/triggerLambda
```

then it will display the code.

### To Print the GET Method Body

Go to:

**Edit Resources → Edit Method → Request**

* Request Body: `application/json`
* Model: `Empty`
* Click **Save**

Now, if we hit the API in Postman along with the request body JSON, it will display the JSON in the Postman response.

Basically, here the Lambda function is triggered by the API in API Gateway. You can also see this activity in **CloudWatch Logs**.

**Voila, we created a serverless API!!!!** 🚀

### Lambda Function Code

Used the following Lambda function code to display the JSON:

```javascript
export const handler = async (event) => {
    return {
        statusCode: 200,
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(event, null, 2)
    };
};
```

### Clean Up

Clean up the following resources after testing:

* The stage in API Gateway
* The API in API Gateway
* The Lambda function
