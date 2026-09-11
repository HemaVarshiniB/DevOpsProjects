# AWS Lambda
https://devops-daily.com/guides/introduction-to-aws/09-lambda-serverless


## Key Concepts

### Lambda Function
Think of Lambda as a small piece of code that wakes up when something happens. A Lambda function is simply your code packaged so AWS can execute it for you.

### Trigger
A trigger is the thing that causes/invokes the Lambda function.

### Event
The event is the data about what happened that caused Lambda to run. This EventJSON is passed as parameter into the Lambda function.

### Lambda Layer
A Lambda Layer is a reusable package of code, libraries, or dependencies that you can attach to one or more Lambda functions. Instead of putting everything inside every Lambda deployment package, you can put common dependencies into a Layer.

### Trigger → Event → Lambda Function

```text
Trigger = What caused Lambda to run
Event = Information about that occurrence
Lambda Function = Code that processes it
```

### Example

Someone presses doorbell:

```text
Trigger → Doorbell sends information → Lambda function
```

### Analogy

```text
(Trigger) "Someone uploaded a file"
        ↓
(Event) {
    "bucket": "my-bucket",
    "file": "resume.pdf"
}
        ↓
(Lambda function) Process resume.pdf
```

### CloudWatch

CloudWatch Monitor logs will by default be attached to this AWS Lambda.

---

# 1. Without Any Trigger and Adding a Layer

## Create Lambda Function

Search **AWS Lambda** → **Create Function** → **Author From Scratch**

Configure:

* **Name:** `firstFunction_PwdEncrypter`
* **Runtime:** Node.js
* **Additional Security:** Optional → Execution role as Create new role

Then click **Create Function**.

---

## Create a Test Event

To create a test event:

1. Click **Test**
2. Click **Create new Event**
3. **Invocation Type:** Synchronous
4. **Event Name:** `test1`
5. Give the related Event JSON as the testcase to test the Lambda function.

Example:

```json
{
  "password": "password@123"
}
```

---

## Password Encryption

Copy-paste ChatGPT code for password encryption in Node.js.

It uses the `bcryptjs` library for encryption. We have to install it explicitly.

We can upload the dependency-installed zipped library in the File Explorer or upload it in the Layers section of the Lambda function.

---

## Lambda Layer

Zip `node_modules` and `index.mjs` and upload it into the code editor.

Then:

**Layers → Add Layer → Create New Layer**

Configure:

* **Name:** `firstLayer_pwdEncryption`
* **Upload:** ZIP file

Then click **Create Layer**.

Next:

**Choose a Layer → Custom Layers → `firstLayer_pwdEncryption`**

Select:

```text
Version: 1
```

Then click **Save**.

> **NOTE:** You need to follow the ZIP structure (`nodejs/node_modules`) as per the documentation:
>
> [AWS Lambda - Packaging Layers](https://docs.aws.amazon.com/lambda/latest/dg/packaging-layers.html?utm_source=chatgpt.com)

---

## How the Layer Works

Even though you run without `node_modules` under File Explorer, due to the Layer it has all the dependencies and executes the testcase fine.

---

## Cleanup

Cleanup the layers and function after usage.

---

## Important Note

> **NOTE:** Always deploy the code so that it will use the updated code and then test the code.

The flow should be:

```text
Make Code Changes
       ↓
     Deploy
       ↓
      Test
```

---

# Running the Node.js Application

To run this, we have to use the command:

```bash
npm install
```

This will create the `node_modules` folder.

Then:

```bash
node index.mjs
```
