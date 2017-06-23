---
title: Datepicker
description: Create a dynamic datepicker that allows users to select the date with a calendar.
layout: "examples"
weight: 100
---

###### {$page.description}

- [Getting Started](#1)
- [Using {$page.title}](#2)
- [Configuring {$page.title}](#3)
- [Basic Example](#4)
- [Multiple Example](#5)
- [Real World Example](#6)

<article id="1">

## Getting Started

First load the seed and CSS files, if you haven't yet.

```xml
<script src="http://cdn.alloyui.com/3.0.1/aui/aui-min.js"></script>
<link href="http://cdn.alloyui.com/3.0.1/aui-css/css/bootstrap.min.css" rel="stylesheet"></link>
```

Then initialize AlloyUI and load the Datepicker module.

```javascript
YUI().use(
  'aui-datepicker',
  function(Y) {
    // code goes here
  }
);
```

</article>

<article id="2">

## Using {$page.title}

Create an element to trigger a Datepicker:

```xml
<button class="btn">Select the date</button>
```

Now create a new instance of Datepicker component and define your `trigger`.

```javascript
YUI().use(
  'aui-datepicker',
  function(Y) {
    new Y.DatePicker(
      {
        trigger: 'button'
      }
    );
  }
);
```

</article>


<article id="3">

## Configuring {$page.title}

There are some other options that you can pass to your Datepicker instance.

For example, you can set a specific `mask` for the date using a pattern called `strftime`. If you are familiar with PHP you probably played with it.

```javascript
YUI().use(
  'aui-datepicker',
  function(Y) {
    new Y.DatePicker(
      {
        trigger: 'button',
        mask: '%m/%d/%y'
      }
    );
  }
);
```

Besides that, you can define which date format you prefer. Let's say you are from Japan, go ahead and define `lang` attribute on `YUI()`.

```javascript
YUI({ lang: 'ja' }).use(
  'aui-datepicker',
  function(Y) {
    new Y.DatePicker(
      {
        trigger: 'button'
      }
    );
  }
);
```

Also, you can increase the number of calendars by defining `panes` and `selectionMode` attributes.

```javascript
YUI().use(
  'aui-datepicker',
  function(Y) {
    new Y.DatePicker(
      {
        trigger: 'button',
        calendar: {
          selectionMode: 'multiple'
        },
        panes: 2
      }
    );
  }
);
```

<div class="alert alert-success">
For more information about configuration, check out our <a href="http://alloyui.com/api/modules/aui-datepicker.html" target="_blank"> Api Docs</a>.
</div>

</article>

<article id="4">

## Basic Example

<button class="btn btn-primary" id="basic"><i class="icon-calendar icon-white"></i> Select the date</button>

<script type="text/javascript">
{literal}
  YUI().use(
    'aui-datepicker',
    function(Y) {
      new Y.DatePicker(
        {
          trigger: '#basic',
          popover: {
            zIndex: 1
          },
          on: {
            selectionChange: function(event) {
              console.log(event.newSelection)
            }
          }
        }
      );
    }
  );
{/literal}
</script>
<br>

##### HTML:
```xml
<button class="btn btn-primary"><i class="icon-calendar icon-white"></i> Select the date</button>
```

##### JavaScript:
```javascript
YUI().use(
  'aui-datepicker',
  function(Y) {
    new Y.DatePicker(
      {
        trigger: 'button',
        popover: {
          zIndex: 1
        },
        on: {
          selectionChange: function(event) {
            console.log(event.newSelection)
          }
        }
      }
    );
  }
);
```

</article>

<article id="5">

## Multiple Example

<textarea class="form-control" id="multiple" type="text" placeholder="mm/dd/yy">01/07/14 — 01/08/14 — 01/19/14</textarea>

<script type="text/javascript">
{literal}
  YUI().use(
    'aui-datepicker',
    function(Y) {
      new Y.DatePicker(
        {
          trigger: '#multiple',
          mask: '%m/%d/%y',
          calendar: {
            selectionMode: 'multiple'
          },
          popover: {
            zIndex: 1
          },
          panes: 2
        }
      );
    }
  );
{/literal}
</script>
<br>

##### HTML:
```xml
<textarea class="form-control" type="text" placeholder="mm/dd/yy">01/07/14 — 01/08/14 — 01/19/14</textarea>
```

##### JavaScript:
```javascript
YUI().use(
  'aui-datepicker',
  function(Y) {
    new Y.DatePicker(
      {
        trigger: 'textarea',
        mask: '%m/%d/%y',
        calendar: {
          selectionMode: 'multiple'
        },
        popover: {
          zIndex: 1
        },
        panes: 2
      }
    );
  }
);
```

</article>

<article id="6">

## Real World Example

<input class="form-control" id="realWorld" type="text" placeholder="Day, Mon dd, yyyy" value="水, 9月 04, 2014">

<script type="text/javascript">
{literal}
  YUI({ lang: 'ja' }).use(
    'aui-datepicker',
    function(Y) {
      var datepicker = new Y.DatePicker(
        {
          trigger: '#realWorld',
          mask: '%a, %b %d, %Y',
          popover: {
            toolbars: {
              header: [[
                {
                  icon:'icon-trash',
                  label: 'Clear',
                  on: {
                    click: function() {
                      datepicker.clearSelection();
                    }
                  }
                },
                {
                  icon:'icon-globe',
                  label: 'Travel date',
                  on: {
                    click: function() {
                      datepicker.clearSelection();
                      datepicker.selectDates(new Date());
                    }
                  }
                }
              ]]
            },
            zIndex: 1
          }
        }
      );
    }
  );
{/literal}
</script>
<br>

##### HTML:
```xml
<input class="form-control" type="text" placeholder="Day, Mon dd, yyyy" value="水, 9月 04, 2014">
```

##### JavaScript:
```javascript
YUI({ lang: 'ja' }).use(
  'aui-datepicker',
  function(Y) {
    var datepicker = new Y.DatePicker(
      {
        trigger: 'input',
        mask: '%a, %b %d, %Y',
        popover: {
          toolbars: {
            header: [[
              {
                icon:'icon-trash',
                label: 'Clear',
                on: {
                  click: function() {
                    datepicker.clearSelection();
                  }
                }
              },
              {
                icon:'icon-globe',
                label: 'Travel date',
                on: {
                  click: function() {
                    datepicker.clearSelection();
                    datepicker.selectDates(new Date());
                  }
                }
              }
            ]]
          },
          zIndex: 1
        }
      }
    );
  }
);
```

</article>
