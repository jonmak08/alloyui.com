---
title: Data Table
description: Provides the user with a method of organizing, arranging, and editing tables of information.
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

Then initialize AlloyUI and load the Data Table module.

```javascript
YUI().use(
  'aui-datatable',
  function(Y) {
    // code goes here
  }
);
```

</article>

<article id="2">

## Using {$page.title}

Create an HTML element to house the Data Table.

```xml
<div id="myDataTable"></div>
```

The most basic of tables require two kinds of information, table columns and data. Pass both into your Data Table after `columns` and `data`, and don't forget to render it!

```javascript
YUI().use(
  'aui-datatable',
  function(Y) {
    var columns = [
      name,
      age
    ];

    var data = [
      {
        name: 'Bob',
        age: '28'
      },
      {
        name: 'Joe',
        age: '72'
      },
      {
        name: 'Sarah',
        age: '35'
      }
    ];

    new Y.DataTable(
      {
        columns: columns,
        data: data
      }
    ).render("#myDataTable");
  }
);
```

</article>


<article id="3">

## Configuring {$page.title}

A plugin can be utilized to allow the highlighting of table cells.

```javascript
YUI().use(
  'aui-datatable',
  function(Y) {
    new Y.DataTable(
      {
        columns: columns,
        data: data,
        plugins: [
          {
            fn: Y.Plugin.DataTableHighlight
          }
        ]
      }
    ).render("#myDataTable");
  }
);
```

Table cells can also be edited when permitted in the columns object. Here, `key` refers to the value displayed in the column head.

```javascript
YUI().use(
  'aui-datatable',
  function(Y) {
    var columns = [
      {
        editor: new Y.TextAreaCellEditor(),
        key: 'name'
      },
      {
        editor: new Y.DateCellEditor(),
        key: 'date'
      }
    ];

    new Y.DataTable(
      {
        columns: columns,
        data: data
      }
    ).render("#myDataTable");
  }
);
```

<div class="alert alert-info">
  <strong>Note: </strong>
  more editors are available for different types of data, such as drop down selectors, and readio buttons. See Data Table examples for available editors.
</div>

Columns can also be set to sort when the component `datatable-sort` is passed in, and `sortable` is set to `true` in the columns object.

```javascript
YUI().use(
  'aui-datatable',
  'datatable-sort',
  function(Y) {
    var columns = [
      {
        key: 'name',
        sortable: true
      },
      {
        key: 'date',
        sortable: true
      }
    ];

    new Y.DataTable(
      {
        columns: columns,
        data: data
      }
    ).render("#myDataTable");
  }
);
```

<div class="alert alert-success">
For more information about configuration, check out our <a href="http://alloyui.com/api/modules/aui-datatable.html" target="_blank"> Api Docs</a>.
</div>

</article>

<article id="4">

## Basic Example

<div id="auiDataTable"></div>

<script type="text/javascript">
{literal}
  YUI().use(
    'aui-datatable',
    function(Y) {
      var columns = ['name', 'address', 'city', 'state'];
      var data = [
        {address: '1236 Some Street', city: 'San Francisco', name: 'John A. Smith', state: 'CA'},
        {address: '3271 Another Ave', city: 'New York', name: 'Joan B. Jones', state: 'NY'},
        {address: '9996 Random Road', city: 'Los Angeles', name: 'Bob C. Uncle', state: 'CA'},
        {address: '1623 Some Street', city: 'San Francisco', name: 'John D. Smith', state: 'CA'},
        {address: '9899 Random Road', city: 'Los Angeles', name: 'Bob F. Uncle', state: 'CA'}
      ];
      new Y.DataTable.Base(
        {
          columnset: columns,
          recordset: data
        }
      ).render('#auiDataTable');
    }
  );
{/literal}
</script>
<br>

##### HTML:
```xml
<div id="auiDataTable"></div>
```

##### JavaScript:
```javascript
YUI().use(
  'aui-datatable',
  function(Y) {
    var columns = ['name', 'address', 'city', 'state'];

    var data = [
      {address: '1236 Some Street', city: 'San Francisco', name: 'John A. Smith', state: 'CA'},
      {address: '3271 Another Ave', city: 'New York', name: 'Joan B. Jones', state: 'NY'},
      {address: '9996 Random Road', city: 'Los Angeles', name: 'Bob C. Uncle', state: 'CA'},
      {address: '1623 Some Street', city: 'San Francisco', name: 'John D. Smith', state: 'CA'},
      {address: '9899 Random Road', city: 'Los Angeles', name: 'Bob F. Uncle', state: 'CA'}
    ];

    new Y.DataTable.Base(
      {
        columnset: columns,
        recordset: data
      }
    ).render('#auiDataTable');
  }
);
```

</article>

<article id="5">

## Real World Example

<div id="myDataTable"></div>

<script type="text/javascript">
{literal}
YUI().use(
  'aui-datatable',
  'aui-datatype',
  'datatable-sort',
  function(Y) {
    var remoteData = [
      {active: 'yes', address: '1236 Some Street', amount: 5, city: 'San Francisco', colors:['red'], fruit:['banana','cherry'], last_login: '4/19/2007', name: 'John A. Smith', state: 'CA'},
      {active: 'maybe', address: '9996 Random Road', amount: 0, city: 'Los Angeles', colors:['green'], fruit:['cherry'], last_login:['4/10/2007'], name: 'Bob C. Uncle', state: 'CA'},
      {active: 'yes', address: '1623 Some Street', amount: 5, city: 'San Francisco', colors:['red'], fruit:['cherry'], last_login: '4/19/2007', name: 'John D. Smith', state: 'CA'},
      {active: 'no', address: '3217 Another Ave', amount: 3, city: 'New York', colors:['red','blue'], fruit:['apple','cherry'], last_login: '2/15/2006', name: 'Joan E. Jones', state: 'NY'},
      {active: 'maybe', address: '9899 Random Road', amount: 0, city: 'Los Angeles', colors:['green'], fruit:['banana'], last_login: '1/23/2004', name: 'Bob F. Uncle', state: 'CA'},
      {active: 'yes', address: '1723 Some Street', amount: 5, city: 'San Francisco', colors:['red'], fruit:['apple'], last_login: '4/19/2007', name: 'John G. Smith', state: 'CA'},
      {active: 'no', address: '3241 Another Ave', amount: 3, city: 'New York', colors:['red','blue'], fruit:['kiwi'], last_login: '2/15/2006', name: 'Joan H. Jones', state: 'NY'},
      {active: 'maybe', address: '9909 Random Road', amount: 0, city: 'Los Angeles', colors:['green'], fruit:['apple','banana'], last_login: '1/23/2004', name: 'Bob I. Uncle', state: 'CA'},
      {active: 'yes', address: '1623 Some Street', amount: 5, city: 'San Francisco', colors:['red'], fruit:['apple','cherry'], last_login: '4/19/2007', name: 'John J. Smith', state: 'CA'},
      {active: 'no', address: '3721 Another Ave', amount: 3, city: 'New York', colors:['red','blue'], fruit:['banana'], last_login: '2/15/2006', name: 'Joan K. Jones', state: 'NY'}
    ];
    var states = ['AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY'];
    var nameEditor = new Y.TextAreaCellEditor(
      {
        validator: {
          rules: {
            name: {
              email: true,
              required: true
            }
          }
        }
      }
    );
    var fruitEditor = new Y.DropDownCellEditor(
      {
        editable: true,
        multiple: true,
        options: {
          apple: 'Apple',
          banana: 'Banana',
          cherry: 'Cherry',
          kiwi: 'Kiwi'
        },
        validator: {
          rules: {
            value: {
              required: true
            }
          }
        }
      }
    );
    var nestedCols = [
      {
        editor: nameEditor,
        key: 'name',
        sortable: true
      },
      {
        editor: new Y.TextAreaCellEditor(),
        key: 'address',
        sortable: true
      },
      {
        editor: new Y.TextAreaCellEditor(),
        key: 'city'
      },
      {
        editor: new Y.DropDownCellEditor(
          {
            editable: true,
            options: states
          }
        ),
        key: 'state'
      },
      {
        editor: new Y.TextCellEditor(
          {
            inputFormatter: Y.DataType.String.evaluate,
            validator: {
              rules: {
                value: {
                  number: true,
                  required: true
                }
              }
            }
          }
        ),
        key: 'amount'
      },
      {
        editor: new Y.RadioCellEditor(
          {
            editable: true,
            options: {
              yes: 'Yes',
              no: 'No',
              maybe: 'Maybe'
            }
          }
        ),
        key: 'active'
      },
      {
        editor: new Y.CheckboxCellEditor(
          {
            editable: true,
            multiple: true,
            options: {
              red: 'Red',
              green: 'Green',
              blue: 'Blue'
            }
          }
        ),
        key: 'colors'
      },
      {
        editor: new Y.DateCellEditor(
          {
            calendar: {
              selectionMode: 'multiple',
              showNextMonth: false,
              showPrevMonth: false,
              width: '250px'
            },
            dateFormat: '%m/%d/%Y',
            validator: {
              rules: {
                value: {
                  required: true
                }
              }
            }
          }
        ),
        key: 'last_login'
      },
      {
        editor: fruitEditor,
        key: 'fruit'
      }
    ];
    var dataTable = new Y.DataTable(
      {
        columns: nestedCols,
        data: remoteData,
        editEvent: 'dblclick',
        plugins: [
          {
            cfg: {
              highlightRange: false
            },
            fn: Y.Plugin.DataTableHighlight
          }
        ]
      }
    ).render('#myDataTable');
    dataTable.get('boundingBox').unselectable();
  }
);
{/literal}
</script>
<br>

##### HTML:
```xml
<div id="myDataTable"></div>
```

##### JavaScript:
```javascript
YUI().use(
  'aui-datatable',
  'aui-datatype',
  'datatable-sort',
  function(Y) {
    var remoteData = [
      {active: 'yes', address: '1236 Some Street', amount: 5, city: 'San Francisco', colors:['red'], fruit:['banana','cherry'], last_login: '4/19/2007', name: 'John A. Smith', state: 'CA'},
      {active: 'maybe', address: '9996 Random Road', amount: 0, city: 'Los Angeles', colors:['green'], fruit:['cherry'], last_login:['4/10/2007'], name: 'Bob C. Uncle', state: 'CA'},
      {active: 'yes', address: '1623 Some Street', amount: 5, city: 'San Francisco', colors:['red'], fruit:['cherry'], last_login: '4/19/2007', name: 'John D. Smith', state: 'CA'},
      {active: 'no', address: '3217 Another Ave', amount: 3, city: 'New York', colors:['red','blue'], fruit:['apple','cherry'], last_login: '2/15/2006', name: 'Joan E. Jones', state: 'NY'},
      {active: 'maybe', address: '9899 Random Road', amount: 0, city: 'Los Angeles', colors:['green'], fruit:['banana'], last_login: '1/23/2004', name: 'Bob F. Uncle', state: 'CA'},
      {active: 'yes', address: '1723 Some Street', amount: 5, city: 'San Francisco', colors:['red'], fruit:['apple'], last_login: '4/19/2007', name: 'John G. Smith', state: 'CA'},
      {active: 'no', address: '3241 Another Ave', amount: 3, city: 'New York', colors:['red','blue'], fruit:['kiwi'], last_login: '2/15/2006', name: 'Joan H. Jones', state: 'NY'},
      {active: 'maybe', address: '9909 Random Road', amount: 0, city: 'Los Angeles', colors:['green'], fruit:['apple','banana'], last_login: '1/23/2004', name: 'Bob I. Uncle', state: 'CA'},
      {active: 'yes', address: '1623 Some Street', amount: 5, city: 'San Francisco', colors:['red'], fruit:['apple','cherry'], last_login: '4/19/2007', name: 'John J. Smith', state: 'CA'},
      {active: 'no', address: '3721 Another Ave', amount: 3, city: 'New York', colors:['red','blue'], fruit:['banana'], last_login: '2/15/2006', name: 'Joan K. Jones', state: 'NY'}
    ];

    var states = ['AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY'];

    var nameEditor = new Y.TextAreaCellEditor(
      {
        validator: {
          rules: {
            name: {
              email: true,
              required: true
            }
          }
        }
      }
    );

    var fruitEditor = new Y.DropDownCellEditor(
      {
        editable: true,
        multiple: true,
        options: {
          apple: 'Apple',
          banana: 'Banana',
          cherry: 'Cherry',
          kiwi: 'Kiwi'
        },
        validator: {
          rules: {
            value: {
              required: true
            }
          }
        }
      }
    );

    var nestedCols = [
      {
        editor: nameEditor,
        key: 'name',
        sortable: true
      },
      {
        editor: new Y.TextAreaCellEditor(),
        key: 'address',
        sortable: true
      },
      {
        editor: new Y.TextAreaCellEditor(),
        key: 'city'
      },
      {
        editor: new Y.DropDownCellEditor(
          {
            editable: true,
            options: states
          }
        ),
        key: 'state'
      },
      {
        editor: new Y.TextCellEditor(
          {
            inputFormatter: Y.DataType.String.evaluate,
            validator: {
              rules: {
                value: {
                  number: true,
                  required: true
                }
              }
            }
          }
        ),
        key: 'amount'
      },
      {
        editor: new Y.RadioCellEditor(
          {
            editable: true,
            options: {
              yes: 'Yes',
              no: 'No',
              maybe: 'Maybe'
            }
          }
        ),
        key: 'active'
      },
      {
        editor: new Y.CheckboxCellEditor(
          {
            editable: true,
            multiple: true,
            options: {
              red: 'Red',
              green: 'Green',
              blue: 'Blue'
            }
          }
        ),
        key: 'colors'
      },
      {
        editor: new Y.DateCellEditor(
          {
            calendar: {
              selectionMode: 'multiple',
              showNextMonth: false,
              showPrevMonth: false,
              width: '250px'
            },
            dateFormat: '%m/%d/%Y',
            validator: {
              rules: {
                value: {
                  required: true
                }
              }
            }
          }
        ),
        key: 'last_login'
      },
      {
        editor: fruitEditor,
        key: 'fruit'
      }
    ];

    var dataTable = new Y.DataTable(
      {
        columns: nestedCols,
        data: remoteData,
        editEvent: 'dblclick',
        plugins: [
          {
            cfg: {
              highlightRange: false
            },
            fn: Y.Plugin.DataTableHighlight
          }
        ]
      }
    ).render('#myDataTable');

    dataTable.get('boundingBox').unselectable();
  }
);
```
</article>
