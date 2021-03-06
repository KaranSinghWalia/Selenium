$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("D:/various/eclipse-workspace/CucumberSelenium/src/main/java/sanveoCucumber/features/LoginPage.feature");
formatter.feature({
  "line": 1,
  "name": "As a user i should be able to login into the application",
  "description": "",
  "id": "as-a-user-i-should-be-able-to-login-into-the-application",
  "keyword": "Feature"
});
formatter.before({
  "duration": 4267738800,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "As a user I am able to login into the application with my credentials",
  "description": "",
  "id": "as-a-user-i-should-be-able-to-login-into-the-application;as-a-user-i-am-able-to-login-into-the-application-with-my-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "URL of the application should be open.",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "The user navigates to the login page.",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "The user enters his credentials username - \"dev\" and Password - \"Firas@123\"",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "The user should be logged in.",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageSteps.url_of_the_application_should_be_open()"
});
formatter.result({
  "duration": 220611200,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.the_user_navigates_to_the_login_page()"
});
formatter.result({
  "duration": 43200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "dev",
      "offset": 44
    },
    {
      "val": "Firas@123",
      "offset": 65
    }
  ],
  "location": "LoginPageSteps.the_user_enters_his_credentials_username_and_Password(String,String)"
});
formatter.result({
  "duration": 1224300800,
  "error_message": "org.openqa.selenium.ElementClickInterceptedException: element click intercepted: Element \u003ca href\u003d\"https://www.amazon.in/ap/signin?openid.pape.max_auth_age\u003d0\u0026amp;openid.return_to\u003dhttps%3A%2F%2Fwww.amazon.in%2F%3Fref_%3Dnav_ya_signin\u0026amp;openid.identity\u003dhttp%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select\u0026amp;openid.assoc_handle\u003dinflex\u0026amp;openid.mode\u003dcheckid_setup\u0026amp;openid.claimed_id\u003dhttp%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select\u0026amp;openid.ns\u003dhttp%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0\u0026amp;\" class\u003d\"nav-a nav-a-2   nav-progressive-attribute\" data-nav-ref\u003d\"nav_ya_signin\" data-nav-role\u003d\"signin\" data-ux-jq-mouseenter\u003d\"true\" id\u003d\"nav-link-accountList\" tabindex\u003d\"0\" data-csa-c-type\u003d\"link\" data-csa-c-slot-id\u003d\"nav-link-accountList\" data-csa-c-content-id\u003d\"nav_ya_signin\" data-csa-c-id\u003d\"jq1ztd-wyjbx2-84w0py-3i3x74\"\u003e...\u003c/a\u003e is not clickable at point (1103, 30). Other element would receive the click: \u003cdiv class\u003d\"a-modal-scroller a-declarative\" data-action\u003d\"a-popover-floating-close\" style\u003d\"padding-bottom: 0px; visibility: visible;\"\u003e...\u003c/div\u003e\n  (Session info: chrome\u003d98.0.4758.82)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027INDIA-FVQ8D63\u0027, ip: \u0027192.168.29.239\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.12\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 98.0.4758.82, chrome: {chromedriverVersion: 98.0.4758.48 (d869ab3eda606..., userDataDir: C:\\Users\\KARANB~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:54111}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 9c0ad0a587bbf0ae425897e1711b12a3\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\r\n\tat org.openqa.selenium.support.events.EventFiringWebDriver$EventFiringWebElement.lambda$new$0(EventFiringWebDriver.java:404)\r\n\tat com.sun.proxy.$Proxy25.click(Unknown Source)\r\n\tat org.openqa.selenium.support.events.EventFiringWebDriver$EventFiringWebElement.click(EventFiringWebDriver.java:417)\r\n\tat sanveo.pages.LoginPage.LoginPage(LoginPage.java:52)\r\n\tat sanveoCucumber.stepDefinitions.LoginPageSteps.the_user_enters_his_credentials_username_and_Password(LoginPageSteps.java:33)\r\n\tat ???.Then The user enters his credentials username - \"dev\" and Password - \"Firas@123\"(D:/various/eclipse-workspace/CucumberSelenium/src/main/java/sanveoCucumber/features/LoginPage.feature:7)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginPageSteps.the_user_should_be_logged_in()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 429435900,
  "status": "passed"
});
formatter.after({
  "duration": 757215000,
  "status": "passed"
});
formatter.before({
  "duration": 3400744700,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "As a user I am not able to login into the application with my credentials",
  "description": "",
  "id": "as-a-user-i-should-be-able-to-login-into-the-application;as-a-user-i-am-not-able-to-login-into-the-application-with-my-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 13,
  "name": "URL of the application should be open.",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "The user navigates to the login page.",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "The user enters his credentials username - \"stage\" and Password - \"Random\"",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "The user should be logged in.",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageSteps.url_of_the_application_should_be_open()"
});
formatter.result({
  "duration": 2502600,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.the_user_navigates_to_the_login_page()"
});
formatter.result({
  "duration": 30500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "stage",
      "offset": 44
    },
    {
      "val": "Random",
      "offset": 67
    }
  ],
  "location": "LoginPageSteps.the_user_enters_his_credentials_username_and_Password(String,String)"
});
formatter.result({
  "duration": 1203434000,
  "error_message": "org.openqa.selenium.ElementClickInterceptedException: element click intercepted: Element \u003ca href\u003d\"https://www.amazon.in/ap/signin?openid.pape.max_auth_age\u003d0\u0026amp;openid.return_to\u003dhttps%3A%2F%2Fwww.amazon.in%2F%3Fref_%3Dnav_ya_signin\u0026amp;openid.identity\u003dhttp%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select\u0026amp;openid.assoc_handle\u003dinflex\u0026amp;openid.mode\u003dcheckid_setup\u0026amp;openid.claimed_id\u003dhttp%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select\u0026amp;openid.ns\u003dhttp%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0\u0026amp;\" class\u003d\"nav-a nav-a-2   nav-progressive-attribute\" data-nav-ref\u003d\"nav_ya_signin\" data-nav-role\u003d\"signin\" data-ux-jq-mouseenter\u003d\"true\" id\u003d\"nav-link-accountList\" tabindex\u003d\"0\" data-csa-c-type\u003d\"link\" data-csa-c-slot-id\u003d\"nav-link-accountList\" data-csa-c-content-id\u003d\"nav_ya_signin\" data-csa-c-id\u003d\"5bnxdg-suq2sr-x1x8uh-2gkai7\"\u003e...\u003c/a\u003e is not clickable at point (1103, 30). Other element would receive the click: \u003cdiv class\u003d\"a-modal-scroller a-declarative\" data-action\u003d\"a-popover-floating-close\" style\u003d\"padding-bottom: 0px; visibility: visible;\"\u003e...\u003c/div\u003e\n  (Session info: chrome\u003d98.0.4758.82)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027INDIA-FVQ8D63\u0027, ip: \u0027192.168.29.239\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.12\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 98.0.4758.82, chrome: {chromedriverVersion: 98.0.4758.48 (d869ab3eda606..., userDataDir: C:\\Users\\KARANB~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:54161}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 31e3eb10d0d36039ce6d493f924db447\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\r\n\tat org.openqa.selenium.support.events.EventFiringWebDriver$EventFiringWebElement.lambda$new$0(EventFiringWebDriver.java:404)\r\n\tat com.sun.proxy.$Proxy25.click(Unknown Source)\r\n\tat org.openqa.selenium.support.events.EventFiringWebDriver$EventFiringWebElement.click(EventFiringWebDriver.java:417)\r\n\tat sanveo.pages.LoginPage.LoginPage(LoginPage.java:52)\r\n\tat sanveoCucumber.stepDefinitions.LoginPageSteps.the_user_enters_his_credentials_username_and_Password(LoginPageSteps.java:33)\r\n\tat ???.Then The user enters his credentials username - \"stage\" and Password - \"Random\"(D:/various/eclipse-workspace/CucumberSelenium/src/main/java/sanveoCucumber/features/LoginPage.feature:15)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginPageSteps.the_user_should_be_logged_in()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 288815400,
  "status": "passed"
});
formatter.after({
  "duration": 759094000,
  "status": "passed"
});
formatter.before({
  "duration": 5700530100,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "As a user I am not able to login into application with my credentials",
  "description": "",
  "id": "as-a-user-i-should-be-able-to-login-into-the-application;as-a-user-i-am-not-able-to-login-into-application-with-my-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 21,
  "name": "URL of the application should be open.",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "The user navigates to the login page.",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "The user enters his credentials username - \"production\" and Password - \"Random\"",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "The user should be logged in.",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageSteps.url_of_the_application_should_be_open()"
});
formatter.result({
  "duration": 904700,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.the_user_navigates_to_the_login_page()"
});
formatter.result({
  "duration": 22300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "production",
      "offset": 44
    },
    {
      "val": "Random",
      "offset": 72
    }
  ],
  "location": "LoginPageSteps.the_user_enters_his_credentials_username_and_Password(String,String)"
});
formatter.result({
  "duration": 1403754300,
  "error_message": "org.openqa.selenium.ElementClickInterceptedException: element click intercepted: Element \u003ca href\u003d\"https://www.amazon.in/ap/signin?openid.pape.max_auth_age\u003d0\u0026amp;openid.return_to\u003dhttps%3A%2F%2Fwww.amazon.in%2F%3Fref_%3Dnav_ya_signin\u0026amp;openid.identity\u003dhttp%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select\u0026amp;openid.assoc_handle\u003dinflex\u0026amp;openid.mode\u003dcheckid_setup\u0026amp;openid.claimed_id\u003dhttp%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select\u0026amp;openid.ns\u003dhttp%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0\u0026amp;\" class\u003d\"nav-a nav-a-2   nav-progressive-attribute\" data-nav-ref\u003d\"nav_ya_signin\" data-nav-role\u003d\"signin\" data-ux-jq-mouseenter\u003d\"true\" id\u003d\"nav-link-accountList\" tabindex\u003d\"0\" data-csa-c-type\u003d\"link\" data-csa-c-slot-id\u003d\"nav-link-accountList\" data-csa-c-content-id\u003d\"nav_ya_signin\" data-csa-c-id\u003d\"uerci8-il5qiy-6jyff3-bkkzy3\"\u003e...\u003c/a\u003e is not clickable at point (1103, 30). Other element would receive the click: \u003cdiv class\u003d\"a-modal-scroller a-declarative\" data-action\u003d\"a-popover-floating-close\" style\u003d\"padding-bottom: 0px; visibility: visible;\"\u003e...\u003c/div\u003e\n  (Session info: chrome\u003d98.0.4758.82)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027INDIA-FVQ8D63\u0027, ip: \u0027192.168.29.239\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.12\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 98.0.4758.82, chrome: {chromedriverVersion: 98.0.4758.48 (d869ab3eda606..., userDataDir: C:\\Users\\KARANB~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:54196}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: b3fc3dfc0d55bfef4e18f90db7f0e5a8\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\r\n\tat org.openqa.selenium.support.events.EventFiringWebDriver$EventFiringWebElement.lambda$new$0(EventFiringWebDriver.java:404)\r\n\tat com.sun.proxy.$Proxy25.click(Unknown Source)\r\n\tat org.openqa.selenium.support.events.EventFiringWebDriver$EventFiringWebElement.click(EventFiringWebDriver.java:417)\r\n\tat sanveo.pages.LoginPage.LoginPage(LoginPage.java:52)\r\n\tat sanveoCucumber.stepDefinitions.LoginPageSteps.the_user_enters_his_credentials_username_and_Password(LoginPageSteps.java:33)\r\n\tat ???.Then The user enters his credentials username - \"production\" and Password - \"Random\"(D:/various/eclipse-workspace/CucumberSelenium/src/main/java/sanveoCucumber/features/LoginPage.feature:23)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginPageSteps.the_user_should_be_logged_in()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 455545300,
  "status": "passed"
});
formatter.after({
  "duration": 729554600,
  "status": "passed"
});
});