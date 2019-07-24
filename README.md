# Deployment with Ghost CMS 

<p align="center">
    <a href="https://ghost.org">Ghost.org</a> |
    <a href="https://ghost.org/features">Features</a> |
    <a href="https://ghost.org/customers">Showcase</a> |
    <a href="https://forum.ghost.org">Forum</a> |
    <a href="https://ghost.org/docs/">Documentation</a> |
    <a href="https://github.com/TryGhost/Ghost/blob/master/.github/CONTRIBUTING.md">Contributing</a> |
    <a href="https://opencollective.com/ghost">Donate</a> |
    <a href="https://twitter.com/ghost">Twitter</a>
    <br /><br />
    <a href="https://ghost.org">
        <img src="https://img.shields.io/badge/downloads-1.4M-brightgreen.svg" alt="Downloads" />
    </a>
    <a href="https://github.com/TryGhost/Ghost/releases/">
        <img src="https://img.shields.io/github/release/TryGhost/Ghost.svg" alt="Latest release" />
    </a>
    <a href="https://travis-ci.org/TryGhost/Ghost">
        <img src="https://travis-ci.org/TryGhost/Ghost.svg?branch=master" alt="Build status" />
    </a>
    <a href="https://github.com/TryGhost/Ghost/contributors/">
        <img src="https://img.shields.io/github/contributors/TryGhost/Ghost.svg" alt="Contributors" />
    </a>
    <a href="https://opencollective.com/ghost">
        <img src="https://opencollective.com/ghost/backers/badge.svg" alt="OpenCollective" />
    </a>
</p>

## Author

Xia Liu, Robert Bronson, Liz Mahoney, Doug Klemp

## Deployed Link

http://ghost123.us-west-2.elasticbeanstalk.com/

## Features

Create a full cloud deployment pipeline for your assigned application.

- Instantiate the appropriate server architecture
- Create, initialize, and load any databases
- Connect the application to the created database
- Automate the entire process with a CI/CD pipeline
- Connect to github and auto-deploy from master
Run all automated tests


## Getting Started

1. Create a directory on your local drive named `ghost`, then cd into the `ghost` directory/

2. Go to TryGhost Repo on github: `https://github.com/tryghost/ghost`, fork and clone onto your local machine.

3. Create an empty directory called `ghost_empty` and `cd` into that folder.

4. Run `npm install ghost-cli -g`

5. Run `ghost install local`

6. Run `ghost install` (make sure the node version is 8.10.0, Run `node --version`)

### Set up Database - Go to AWS Console 


1. Select Mysql
2. Select Dev/Test - MySql
3. Create new database

### Set up CodePipeline with AWS

1. Create a code pipeline called: `ghostpp`

2. Select github webhook and find `ghost` repo and add it

3. Select `Sample Application`

4. Create new pipeline.


## Roadblocks

1. In the instructions to install `$ ghost install local` make sure node version is 

`npm install -g n`

`sudo n 8.10.0`

2. When creating a database, the free tier charges $20.00. Which we decided to use local database.

	DB instance identifier - `ghostDB`
 
	Enter new Master Username and Password
	
3. Deployment unsuccessful

- Deployment onto code pipeline,resulted in server error

```
(TRUNCATED)...opt/elasticbeanstalk/containerfiles/ebnode.py", line 180, in npm_install raise e 
subprocess.CalledProcessError: Command '['/opt/elasticbeanstalk/node-install/node-v10.16.0-linux-x64/bin/npm',
'--production', 'install']' returned non-zero exit status 1. Hook /opt/elasticbeanstalk/hooks/appdeploy/pre/50npm.sh failed. 

```



## Quickstart Install

If you want to run your own instance of Ghost, in most cases the best way is to use our **CLI tool**

```
$ npm install ghost-cli -g
```

&nbsp;

Then, if installing locally add the `local` flag to get up and running in under a minute - [Local install docs](https://ghost.org/docs/install/local/)

```
$ ghost install local
```

&nbsp;

or on a server run the full install, including automatic SSL setup using LetsEncrypt - [Production install docs](https://ghost.org/docs/install/ubuntu/)

```
$ ghost install
```

&nbsp;

Check out our [official documentation](https://ghost.org/docs/) for more information about our [recommended hosting stack](https://ghost.org/docs/concepts/hosting/) & properly [upgrading Ghost](https://ghost.org/faq/upgrade-to-ghost-2-0/), plus everything you need to develop your own Ghost [themes](https://ghost.org/docs/api/v2/handlebars-themes/) or work with [our API](https://ghost.org/docs/api/v2/).

&nbsp;


# Getting Help

You can find answers to a huge variety of questions, along with a large community of helpful developers over on the [Ghost forum](https://forum.ghost.org/) - replies are generally very quick. **Ghost(Pro)** customers also have access to 24/7 email support.

To stay up to date with all the latest news and product updates, make sure you [subscribe to our blog](https://ghost.org/blog/) — or you can always follow us [on Twitter](https://twitter.com/Ghost), if you prefer your updates bite-sized and facetious. :saxophone::turtle:

&nbsp;


## Contributors & Advanced Developers

For anyone wishing to contribute to Ghost or to hack/customise core files we recommend following our full development setup guides: [General Contributor Guide](https://ghost.org/docs/concepts/contributing/) | [Developer Setup Instructions](https://ghost.org/docs/install/source/) | [Admin Client development guide](https://ghost.org/docs/install/source/#ghost-admin)

&nbsp;


## Copyright & License

Copyright (c) 2013-2019 Ghost Foundation - Released under the [MIT license](LICENSE). Ghost and the Ghost Logo are trademarks of Ghost Foundation Ltd. Please see our [trademark policy](https://ghost.org/trademark/) for info on acceptable usage.


## Resources 
https://aws.amazon.com/blogs/devops/six-steps-to-deploy-ghost-to-aws-elastic-beanstalk/
https://aws.amazon.com/blogs/devops/six-steps-to-deploy-ghost-to-aws-elastic-beanstalk/
