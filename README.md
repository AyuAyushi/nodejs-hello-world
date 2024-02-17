# nodejs-hello-world
 
1. Create an ec2 instance  using ubuntu with a key-pair
2. ssh thorugh aws cloudshell
3. generate pub-private ssh key in it
4. add public key to ur github account (/home/ec2-user/.ssh)
6. install express using npm and create nodejs hello world app. create a repo in local.
7. push the repo into github
8. create a folder and a file inside it .github/workflows/cicd.yaml
paste the following-----------------------------------------------------

name: CI

on:
  push:
    branches:
      - main

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
    - name: Checkout repository
      uses: actions/checkout@v2

9. check github actions 
10. checkout/v2 is deprecated so use v4 instead to get the warnings removed
11. In github navigate to the main page of the repository. >  click  Settings >  select  Secrets and variables, then click Actions. > Click the Secrets tab. > Click New repository secret.
Add the following secrets:

EC2_HOST -> public ipv4 address
EC2_USERNAME -> ec2-user
EC2_SSH_KEY -> check /home/ec2-user/.ssh



sudo su - 

1. ssh into ec2 instance thorught local 
ssh -i privatekeyfile.pem user@ipaddress
2.

ssh-keygen 

copy the private key and enter in github secrets

-------------------------------------------------------------------------------------------------------------------------------------------Final-----------



1. create ec2 instance with key pair (private) --- ubuntu
ssh from local to ec2
2.chmod 400 DemoDeployment

3. ssh -i DemoDeployment.pem ubuntu@<publicIP>
just do ls and check now

4. ssh-keygen -t rsa -b 4096 -C "your_email@example.com" (generate key in ec2) --mailid has to be associated with github account
5. cd /home/ubuntu/.ssh
6. check for all the 3 files - id_rsa id_rsa.pub authroized_keys
7. authorized key contains DemoDeployment and github email 
i.e. local  machine can communicate to ec2 using the private key (DemoDeployment) and also github can communicate to ec2 (using private key we gave to github secrets)
8. cat id_rsa.pub >> authorized_keys
i.e. append the puiblic key to it
9. copy private key (id_rsa) and make 3 secrets git secret- EC2_PRIVATE_KEY, EC2_HOST, EC2_USER
(while copying the private key include everything including begin and end lines)
(for host, copy the public ipv4 address)

The checkout action does the following:

Clones your repository into the runner environment. (i.e. in github workflow remote machine where these steps are running)
Checks out the commit or branch specified in the trigger event. In this case, it's the default branch (main).
Sets up the workspace so that subsequent steps in your workflow can access the checked-out code.

10. run the yaml and check that ssh is happening from github to ec2 (just the ssh command part of deploying to ec2 instance run)
11. Check if git is present else install
12. install nodejs in ec2 instance (using script):
-> curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash. ~/.nvm/nvm.sh (install nvm)
-> . ~/.nvm/nvm.sh (activating nvm)
-> nvm install --lts

12. Enabled All traffic in ec2 instance security group, and push the yaml
13. Access the <public_ip>:3000 to see the response



