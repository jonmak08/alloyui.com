---
title: Form Validator
description: Provides a method of ensuring the validity of form entries.
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

Then initialize AlloyUI and load the Form Validator module.

```javascript
YUI().use(
  'aui-form-validator',
  function(Y) {
    // code goes here
  }
);
```

</article>

<article id="2">

## Using {$page.title}

In order to validate form entries, a form must first be created in HTML.

```xml
<form id="myForm">
  <div class="control-group">
    <label class="control-label" for="name">Name:</label>
    <div class="controls">
      <input name="name" id="name" type="text">
    </div>
  </div>
</form>
```

Set `boundingBox` to the form id, pass in the input element name under `rules`, and set `required` to true.

```javascript
YUI().use(
  'aui-form-validator',
  function(Y) {
    new Y.FormValidator(
      {
        boundingBox: '#myForm',
        rules: {
          name: {
            required: true
          }
        }
      }
    );
  }
);
```

Now, if the user attempted to subit the form without filling out the name field, they would receive an alert reading, "This field is required."

</article>


<article id="3">

## Configuring {$page.title}

Further requirements can be specified depending on the input type. For example, if the form input is for an email address, Form Validator can ensure that the text entered is a valid email address by setting `email` to `true`.

```javascript
YUI().use(
  'aui-form-validator',
  function(Y) {
    new Y.FormValidator(
      {
        boundingBox: '#myForm',
        rules: {
          email: {
            email: true,
            required: true
          }
        }
      }
    );
  }
);
```

The same can be done for various other inputs.

```javascript
YUI().use(
  'aui-form-validator',
  function(Y) {
    new Y.FormValidator(
      {
        boundingBox: '#myForm',
        rules: {
          age: {
            digits: true,
            required: true
          },
          name: {
            rangeLength: [2,50],
            required: true
          },
          url: {
            required: true,
            url: true
          }
        }
      }
    );
  }
);
```

Further configuration includes creating custom alerts that are displayed when invalid content is entered into a field (this replaces the default "This feild is required" message).

```javascript
YUI().use(
  'aui-form-validator',
  function(Y) {
    new Y.FormValidator(
      {
        boundingBox: '#myForm',
        fieldStrings: {
          name: {
            required: 'We need your name! (Custom message)'
          }
        },
        rules: {
          name: {
            required: true
          }
        }
      }
    );
  }
);
```

Furthermore, the requirements can be customized beyond the default parameters. For example, one input can have the requirement of being equal to the content entered into another field.

```javascript
YUI().use(
  'aui-form-validator',
  function(Y) {
    new Y.FormValidator(
      {
        boundingBox: '#myForm',
        rules: {
          email: {
            email: true,
            required: true
          },
          emailConfirmation: {
            email: true,
            equalTo: '#email',
            required: true
          }
        }
      }
    );
  }
);
```

<div class="alert alert-success">
For more information about configuration, check out our <a href="http://alloyui.com/api/modules/aui-form-validator.html" target="_blank"> Api Docs</a>.
</div>

</article>

<article id="4">

## Basic Example

<form id="auiForm">

  <div class="form-group">
    <label class="control-label" for="name">Name:</label>
    <div class="controls">
      <input name="name" id="name" class="form-control field-required" type="text">
    </div>
  </div>

  <div class="form-group">
    <label class="control-label" for="age">Age:</label>
    <div class="controls">
      <input name="age" id="age" class="form-control field-required field-digits" type="text">
    </div>
  </div>

  <div class="form-group">
    <label class="control-label" for="email">E-mail:</label>
    <div class="controls">
      <input name="email" id="email" class="form-control field-required field-email" type="text">
    </div>
  </div>

  <input class="btn btn-info" type="submit" value="Submit">
  <input class="btn btn-primary" type="reset" value="Reset">

</form>

<script type="text/javascript">
{literal}
  YUI().use(
    'aui-form-validator',
    function(Y) {
      new Y.FormValidator(
        {
          boundingBox: '#auiForm'
        }
      );
    }
  );
{/literal}
</script>
<br>

##### HTML:
```xml
<form id="auiForm">

  <div class="form-group">
    <label class="control-label" for="name">Name:</label>
    <div class="controls">
      <input name="name" id="name" class="form-control field-required" type="text">
    </div>
  </div>

  <div class="form-group">
    <label class="control-label" for="age">Age:</label>
    <div class="controls">
      <input name="age" id="age" class="form-control field-required field-digits" type="text">
    </div>
  </div>

  <div class="form-group">
    <label class="control-label" for="email">E-mail:</label>
    <div class="controls">
      <input name="email" id="email" class="form-control field-required field-email" type="text">
    </div>
  </div>

  <input class="btn btn-info" type="submit" value="Submit">
  <input class="btn btn-primary" type="reset" value="Reset">

</form>
```

##### JavaScript:
```javascript
YUI().use(
  'aui-form-validator',
  function(Y) {
    new Y.FormValidator(
      {
        boundingBox: '#auiForm'
      }
    );
  }
);
```

</article>

<article id="5">

## Real World Example

<form id="myForm">

  <div class="form-group">
    <label class="control-label" for="name">Name:</label>
    <div class="controls">
      <input name="name" id="name" class="form-control" type="text">
    </div>
  </div>

  <div class="form-group">
    <label class="control-label" for="picture">Picture:</label>
    <div class="controls">
      <input name="picture" id="picture" class="form-control" type="file">
    </div>
  </div>

  <div class="form-group">
    <label class="control-label" for="email">E-mail:</label>
    <div class="controls">
      <input name="email" id="email" class="form-control" type="text">
    </div>
  </div>

  <div class="form-group">
    <label class="control-label" for="emailConfirmation">Confirm e-mail:</label>
    <div class="controls">
      <input name="emailConfirmation" id="emailConfirmation" class="form-control" type="text">
    </div>
  </div>

  <div class="form-group">
    <label class="control-label" for="url">Site URL:</label>
    <div class="controls">
      <input name="url" id="url" class="form-control" type="text">
    </div>
  </div>

  <input class="btn btn-info" type="submit" value="Submit">
  <input class="btn btn-primary" type="reset" value="Reset">

</form>

<script type="text/javascript">
{literal}
  YUI().use(
    'aui-form-validator',
    function(Y) {
      var rules = {
        email: {
          email: true,
          required: true
        },
        emailConfirmation: {
          email: true,
          equalTo: '#email',
          required: true
        },
        gender: {
          required: true
        },
        name: {
          rangeLength: [2, 50],
          required: true
        },
        picture: {
          acceptFiles: 'jpg, gif, png',
          required: true
        },
        url: {
          url: true
        }
      };
      var fieldStrings = {
        email: {
          required: 'Type your email in this field.'
        },
        name: {
          required: 'Please provide your name.'
        }
      };
      new Y.FormValidator(
        {
          boundingBox: '#myForm',
          fieldStrings: fieldStrings,
          rules: rules,
          showAllMessages: true
        }
      );
    }
  );
{/literal}
</script>
<br>

##### HTML:
```xml
<form id="myForm">

  <div class="form-group">
    <label class="control-label" for="name">Name:</label>
    <div class="controls">
      <input name="name" id="name" class="form-control" type="text">
    </div>
  </div>

  <div class="form-group">
    <label class="control-label" for="picture">Picture:</label>
    <div class="controls">
      <input name="picture" id="picture" class="form-control" type="file">
    </div>
  </div>

  <div class="form-group">
    <label class="control-label" for="email">E-mail:</label>
    <div class="controls">
      <input name="email" id="email" class="form-control" type="text">
    </div>
  </div>

  <div class="form-group">
    <label class="control-label" for="emailConfirmation">Confirm e-mail:</label>
    <div class="controls">
      <input name="emailConfirmation" id="emailConfirmation" class="form-control" type="text">
    </div>
  </div>

  <div class="form-group">
    <label class="control-label" for="url">Site URL:</label>
    <div class="controls">
      <input name="url" id="url" class="form-control" type="text">
    </div>
  </div>

  <input class="btn btn-info" type="submit" value="Submit">
  <input class="btn btn-primary" type="reset" value="Reset">

</form>
```

##### JavaScript:
```javascript
YUI().use(
  'aui-form-validator',
  function(Y) {
    var rules = {
      email: {
        email: true,
        required: true
      },
      emailConfirmation: {
        email: true,
        equalTo: '#email',
        required: true
      },
      gender: {
        required: true
      },
      name: {
        rangeLength: [2, 50],
        required: true
      },
      picture: {
        acceptFiles: 'jpg, gif, png',
        required: true
      },
      url: {
        url: true
      }
    };

    var fieldStrings = {
      email: {
        required: 'Type your email in this field.'
      },
      name: {
        required: 'Please provide your name.'
      }
    };

    new Y.FormValidator(
      {
        boundingBox: '#myForm',
        fieldStrings: fieldStrings,
        rules: rules,
        showAllMessages: true
      }
    );
  }
);
```

</article>
