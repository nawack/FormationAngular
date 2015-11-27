#End 2 End Testing (Protractor)
To run the end-2-end tests against the application you use [Protractor](https://github.com/angular/protractor).

## Starting the Web Server
In either case you will need the application to be running via the web-server. 
From the root folder of the repository run:

```
grunt serve
```

The application should now be available at `http://localhost:9000/`

## Testing with Protractor

As a one-time setup, download webdriver.
```
webdriver-manager update
```

Start the Protractor test runner using the e2e configuration:

```
protractor tests/protractor-conf.js
```
