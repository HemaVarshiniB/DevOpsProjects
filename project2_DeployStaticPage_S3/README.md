# AWS S3 Static Website Deployment Guide

## 1. Create S3 Bucket
* Go to **S3 Console**
* Click **Create Bucket**
* Bucket Name: `staticpagedeploys3`
* Click **Create Bucket**

## 2. Upload Files
* Click **Add files**
  * Upload `index.html`
* Click **Add folder**
  * Select the `Images` folder
* Click **Upload**

## 3. Test Object URL
* Open the bucket
* Click on `index.html`
* Copy the **Object URL**
❗ You will see **Access Denied** (this is expected at this stage)

## 4. Enable Static Website Hosting
* Go to **Bucket Properties**
* Scroll to **Static website hosting**
* Click **Edit**
* Enable it
* Set:
  * **Index document**: `index.html`
* Click **Save changes`
❗ Still shows **Access Denied**

## 5. Disable Block Public Access
* Go to **Permissions**
* Under **Block public access**
* Click **Edit**
* Uncheck all options
* Save changes
❗ Still shows **Access Denied**

## 6. Enable ACLs & Make Objects Public
### Step 1: Enable ACLs
* Go to **Permissions**
* Under **Object Ownership**
* Select **ACLs enabled**
* Check **Acknowledge**
* Save changes

### Step 2: Make Files Public
* Select `index.html`
* Click **Actions → Make public using ACL → Make public**

### Step 3: Make Folder Public (if images not displaying)
* Select the `Images` folder
* Click **Actions → Make public using ACL → Make public**


## 7. Access Your Static Website
Use either of the following URLs:
* **Website Endpoint:**
  ```
  http://staticpagedeploys3.s3-website.ap-south-1.amazonaws.com/
  ```
* **Direct Object URL:**
  ```
  https://staticpagedeploys3.s3.ap-south-1.amazonaws.com/index.html
  ```
✅ Your static website should now be live!

---

## Notes

* Ensure all assets (images, CSS, JS) are publicly accessible
* Prefer the **website endpoint URL** for proper routing behavior
* Double-check file paths in `index.html`

---
