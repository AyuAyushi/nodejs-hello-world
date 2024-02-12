# nodejs-hello-world
 
1. Create an ec2 instance without giving any ssh key-pair
2. ssh thorugh aws cloudshell
3. generate pub-private ssh key in it
4. add public key to ur github account
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