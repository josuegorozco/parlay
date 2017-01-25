# React Boiler Plate  

A highly scalable foundation with the best DX and a focus on performance and best practices.  

<hr />  

Build on the latest tech stacks:  

<img src="app/assets/images/logos/stacks.png" alt="Tech Stacks" width="100%" height="78" />  

Deliver high quality code with:  

<img src="app/assets/images/logos/tests.png" alt="Test Frameworks" width="100%" height="78" />  

# Quick Start

1. Install latest version of Nodejs: [https://nodejs.org/en/download/current/](https://nodejs.org/en/download/current/)
2. Install latest version of npm: ```npm install -g npm@latest```
3. Install dependencies: ```npm install```
4. Launch dev environment: ```npm start```

# Contribution Guidelines
### Writing Tests
Unit tests are written in [mochajs](https://mochajs.org/), with [expect](https://github.com/mjackson/expect), [sinon](http://sinonjs.org/) assertion libraries and run via [karma](https://karma-runner.github.io/1.0/index.html)

### Code Reviews
Code reviews are performed internally by team members. Each PR should meet the following checklist/guidelines:  
<hr />
- [ ] Commits reference a JIRA ticket  
- [ ] Code is associated with only one top level JIRA ticket  
- [ ] Pull, run, and test the code locally. Attempt to find edge cases or unrelated code that may have broken  
- [ ] Run linting, build, and unit tests if this is done by CI  
- [ ] Review the code primarily for anti-patterns, edge cases, and accurate business logic.  
- [ ] Review the code for cleanliness and coding standards.  
- [ ] All comments resolved  

# About

This is a fork of [https://github.com/mxstbr/react-boilerplate.](https://github.com/mxstbr/react-boilerplate) with modified support for singleton sagas.