---
title: I/O
description: Allows you to make asynchronous HTTP (Ajax) requests.
layout: "examples"
weight: 100
---

###### {$page.description}

- [Getting Started](#1)
- [Using {$page.title}](#2)
- [Configuring {$page.title}](#3)
- [Basic Example](#4)
- [Real World Example](#5)

<article id="1">

## Getting Started

First load the seed and CSS files, if you haven't yet.

```xml
<script src="http://cdn.alloyui.com/3.0.1/aui/aui-min.js"></script>
<link href="http://cdn.alloyui.com/3.0.1/aui-css/css/bootstrap.min.css" rel="stylesheet"></link>
```

Then initialize AlloyUI and load the I/O module.

```javascript
YUI().use(
  'aui-io-request',
  function (Y) {
    // code goes here
  }
);
```

</article>

<article id="2">

## Using {$page.title}

Make an asynchronous request and get the response data.

```javascript
YUI().use(
  'aui-io-request',
  function (Y) {
    Y.io.request(
      'example.json',
      {
        on: {
          success: function() {
            var data = this.get('responseData');
          }
        }
      }
    );
  }
);
```

</article>

<article id="3">

## Configuring {$page.title}

There are some other options that you can pass to your I/O method.

For example, you can specify the type of the request (e.g., xml, json, javascript, text).

```javascript
YUI().use(
  'aui-io-request',
  function (Y) {
    Y.io.request(
      'example.xml',
      {
        dataType: 'xml',
        on: {
          success: function() {
            var data = this.get('responseData');
          }
        }
      }
    );
  }
);
```

Also, you can set `cache` to `false` so the current timestamp will be appended to the url, preventing the url from being cached.

```javascript
YUI().use(
  'aui-io-request',
  function (Y) {
    Y.io.request(
      'example.xml',
      {
        cache: 'false',
        on: {
          success: function() {
            var data = this.get('responseData');
          }
        }
      }
    );
  }
);
```

<div class="alert alert-success">
For more information about configuration, check out our <a href="http://alloyui.com/api/modules/aui-io.html" target="_blank"> Api Docs</a>.
</div>

</article>

<article id="4">

## Basic Example

<button class="btn btn-primary" id="ioButton">Click for an HTTP request!</button>

<script type="text/javascript">
{literal}
YUI().use(
  'aui-io-request',
  function(Y) {
    Y.io.request(
      '/files/io/content.html',
      {
        on: {
          success: function() {
            var data = this.get('responseData');
            Y.one('#ioButton').on('click', function() {
                alert(data);
              }
            );
          }
        }
      }
    );
  }
);
{/literal}
</script>

##### JavaScript:
```javascript
YUI().use(
  'aui-io-request',
  function (Y) {
    Y.io.request(
      'http://alloyui.com/files/io/content.html',
      {
        on: {
          success: function() {
            var data = this.get('responseData');
            alert(data);
          }
        }
      }
    );
  }
);
```

</article>

<article id="5">

## Real World Example

<div id="shipping">
  <p>
    <select name="state" id="state">
      <option value="">Choose a state...</option>
    </select>
  </p>
  <p>
    <select name="city" id="city">
      <option value="">Choose a city...</option>
    </select>
  </p>
</div>

<style>
{literal}
  #shipping {
    width: 482px;
    height: 200px;
    padding: 110px 0 0 30px;
    background: url('https://github.com/liferay/alloyui.com/blob/master/src/files/io/img/shipping.png?raw=true') transparent no-repeat 0 0;
    margin: 30px auto;
  }
  label {
    color: #36558E;
  }
{/literal}
</style>

<script src="/scripts/real-world/rw-io.js" type="text/javascript"></script>
<br>

##### HTML:
```xml
<div id="shipping">
  <p>
    <select name="state" id="state">
      <option value="">Choose a state...</option>
    </select>
  </p>
  <p>
    <select name="city" id="city">
      <option value="">Choose a city...</option>
    </select>
  </p>
</div>
```

##### JavaScript:
```javascript
YUI().use(
  'aui-io-request',
  'node',
  function(Y) {
    // create a new asynchonous request to grab all states
    Y.io.request(
      'http://alloyui.com/files/io/states.json',
      {
        dataType: 'json',
        on: {
          success: function() {
            // gets the result of this asynchronous request
            var data = this.get('responseData');
            states = data.states;

            // iterates on all states to create a new <option> on that <select>
            for (i = 0; i < states.length; i++) {
              Y.one('#state').append('<option value="' + states[i].code + '">' + states[i].name + '</option>');
            }
          }
        }
      }
    );

    Y.one('#state').on(
      'change',
      function() {
        var cityCode = this.get('value');

        if (cityCode !== '') {
          // creates a new asynchronous request to grab the cities corresponding to that state
          Y.io.request(
            'http://alloyui.com/files/io/' + cityCode + '.json',
            {
              dataType: 'json',
              on: {
                success: function() {
                  // gets the result of this asynchronous request
                  var data = this.get('responseData');
                  cities = data.cities;
                  options = '';

                  // iterates on all states to create a new <option> on that <select>
                  for (i = 0; i < cities.length; i++) {
                    options += '<option value="' + cities[i].name + '">' + cities[i].name + '</option>';
                  }

                  Y.one('#city').setHTML(options);
                }
              }
            }
          );
        }
      }
    );
  }
);
```

</article>
