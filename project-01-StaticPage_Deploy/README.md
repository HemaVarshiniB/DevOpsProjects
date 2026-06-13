Step1: Create a basic index.html file
Step2: Launch an EC2 instance with (a) AMI: Amazon-Linux or Ubuntu (b)Instance type: any free tier version (c) create .pem file and keep it in the location as in the index.html file(d) Allow SSH - port 22, Allow HTTP - port 80 in the Security Group
Step3: chmod 400 my-web-server.pem
Step4: Move the local index.html file to EC2 instance, to do this run scp command from the local machine -> scp -i my-web-server.pem index.html ec2-user@ec2-13-233-105-25.ap-south-1.compute.amazonaws.com:/home/ec2-user/
Step5: SSH into EC2. ssh -i "my-web-server.pem" ec2-user@ec2-13-233-105-25.ap-south-1.compute.amazonaws.com
Step6: ls. you could see index.html copied into this instance
Step7: sudo mv index.html /var/www/html <- /var/www/html is the web root directory, Whatever file you put here can be served on the internet by a web server. 
Step8: If you find any errors in step6, then you might have to install webservers like http/apache2. sudo yum update -y(for Amazon Linux AMI), sudo yum install httpd -y, sudo systemctl start httpd, sudo systemctl enable httpd. Now if you ls /var/www/ you should see html. Now, sudo mv index.html /var/www/html
Step9: Now copy and run public Ip of EC2 instance. http://13.233.105.25/ it should display Hello there!!
