To set CI-CD pipeline for syncing AWS S3 + Cloudfront to the local static index.html, follow these steps.

1. Create S3 bucket with default settings and upload all the related files and folders.

2. Create a CloudFront free distribution which is to be placed infront of S3 bucket. Basically any request comes, cloudfront serves a frontdoor without needing access to s3 objects to them. 

3. Now add github actions to the project root directory. Create .github/workflows folder and create .yml file in this folder path. 

4. This .yml path has steps which triggers s3 file syncing and displays in the cloudfront index url page whenever there is a change/code checkin happens in project3_DeployStaticPage_s3_CloudFront folder. It USES some pre-defined actions like checkout for downloading your folder repo code into virtual machine,  configure-aws-credentials@v4 to access AWS credentials (which we specified in Github Settings -> Secrets and variables -> Actions -> New Repository Secret -> Name: Secret), run s3 sync command for syncing local folders, refreshing cloudfront cache.

5. When you checkin the code changes, it will run the CI-CD steps and syncs the changes between local and s3 bucket which will be automatically reflects in cloudfront https index page.
