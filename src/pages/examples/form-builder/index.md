---
title: Form Builder
description: Provides a graphic user interface method for contructing forms.
layout: "examples"
weight: 100
---

###### {$page.description}

- [Getting Started](#1)
- [Using {$page.title}](#2)
- [Configuring {$page.title}](#3)
- [Basic Example](#4)

<article id="1">

## Getting Started

First load the seed and CSS files, if you haven't yet.

```xml
<script src="http://cdn.alloyui.com/3.0.1/aui/aui-min.js"></script>
<link href="http://cdn.alloyui.com/3.0.1/aui-css/css/bootstrap.min.css" rel="stylesheet"></link>
```

Then initialize AlloyUI and load the Form Builder module.

```javascript
YUI().use(
  'aui-form-builder',
  function (Y) {
    // code goes here
  }
);
```

</article>

<article id="2">

## Using {$page.title}

Create an HTML element to house your Form Builder.

```xml
<div id="myFormBuilder"></div>
```

Then initialize a new instance of Form Builder using your element as the `boundingBox` and render it.

```javascript
YUI().use(
  'aui-form-builder',
  function(Y) {
    new Y.FormBuilder(
      {
        boundingBox: '#myFormBuilder'
      }
    ).render();
  }
);
```

When Form Builder is first initialized, it contains no available fields, such elements must be specified in the Form Builder under `availableFields`. Let's make text fields and checkboxes available.

```javascript
YUI().use(
  'aui-form-builder',
  function(Y) {
    new Y.FormBuilder(
      {
        availableFields: [
          {
            iconClass: 'form-builder-field-icon-text',
            label: 'Text',
            type: 'text'
          },
          {
            iconClass: 'form-builder-field-icon-checkbox',
            lebel: 'Checkbox',
            type: 'checkbox'
          }
        ],
        boundingBox: '#myFormBuilder'
      }
    ).render();
  }
);
```

<div class="alert alert-info">
  <strong>Note: </strong>
  Many other field types are available, please see example for other available types.
</div>

</article>


<article id="3">

## Configuring {$page.title}

Additional configuration includes setting a field type to unique (making that field type only usable once), setting the width of the element, and specifying which attributes of the element are read only.

```javascript
YUI().use(
  'aui-form-builder',
  function(Y) {
    new Y.FormBuilder(
      {
        availableFields: [
          {
            iconClass: 'form-builder-field-icon-text',
            label: 'Text',
            readOnlyAttributes: ['name'],
            type: 'text',
            unique: true,
            width: 100
          }
        ],
        boundingBox: '#myFormBuilder'
      }
    ).render();
  }
);
```

Predefined fields can be specified in the Form Builder so that fields are already included in the form on load.

```javascript
YUI().use(
  'aui-form-builder',
  function(Y) {
    new Y.FormBuilder(
      {
        boundingBox: '#myFormBuilder',
        fields: {
          {
            label: 'City',
            predefinedValue: 'Chicago',
            type: 'text'
          }
        }
      }
    ).render();
  }
);
```

<div class="alert alert-success">
For more information about configuration, check out our <a href="http://alloyui.com/api/modules/aui-form-builder.html" target="_blank"> Api Docs</a>.
</div>

</article>

<article id="4">

## Basic Example

<style>
{literal}
.diagram-builder-drop-container, .diagram-builder-canvas, .diagram-builder-content-container {
	height: auto;
	min-height: 600px;
}
.icon {
  background-repeat: no-repeat;
}
.nav {
  cursor: pointer;
}
@media (min-width: 992px) {
	.col-md-4 {
		width: 33.33333333%;
	}
	.col-md-8 {
		width: 66.66666667%;
	}
}
@media (min-width: 768px) {
	.col-sm-6 {
		width: 50%;
	}
}
.col-xs-12 {
  width: 100%;
}
{/literal}
</style>

<div id="myFormBuilder"></div>

<script type="text/javascript">
{literal}
  YUI().use(
    'aui-form-builder',
    function(Y) {
      new Y.FormBuilder(
        {
          availableFields: [
            {
              iconClass: 'form-builder-field-icon-text',
              id: 'uniqueTextField',
              label: 'Text',
              readOnlyAttributes: ['name'],
              type: 'text',
              unique: true,
              width: 75
            },
            {
              hiddenAttributes: ['tip'],
              iconClass: 'form-builder-field-icon-textarea',
              label: 'Textarea',
              type: 'textarea'
            },
            {
              iconClass: 'form-builder-field-icon-checkbox',
              label: 'Checkbox',
              type: 'checkbox'
            },
            {
              iconClass: 'form-builder-field-icon-button',
              label: 'Button',
              type: 'button'
            },
            {
              iconClass: 'form-builder-field-icon-select',
              label: 'Select',
              type: 'select'
            },
            {
              iconClass: 'form-builder-field-icon-radio',
              label: 'Radio Buttons',
              type: 'radio'
            },
            {
              iconClass: 'form-builder-field-icon-fileupload',
              label: 'File Upload',
              type: 'fileupload'
            },
            {
              iconClass: 'form-builder-field-icon-fieldset',
              label: 'Fieldset',
              type: 'fieldset'
            }
          ],
          boundingBox: '#myFormBuilder',
          fields: [
            {
              label: 'City',
              options: [
                {
                  label: 'Ney York',
                  value: 'new york'
                },
                {
                  label: 'Chicago',
                  value: 'chicago'
                }
              ],
              predefinedValue: 'chicago',
              type: 'select'
            },
            {
              label: 'Colors',
              options: [
                {
                  label: 'Red',
                  value: 'red'
                },
                {
                  label: 'Green',
                  value: 'green'
                },
                {
                  label: 'Blue',
                  value: 'blue'
                }
              ],
              type: 'radio'
            }
          ]
        }
      ).render();
    }
  );
{/literal}
</script>
<br>

##### HTML:
```xml
<div id="myFormBuilder"></div>
```

##### JavaScript:
```javascript
YUI().use(
  'aui-form-builder',
  function(Y) {
    new Y.FormBuilder(
      {
        availableFields: [
          {
            iconClass: 'form-builder-field-icon-text',
            id: 'uniqueTextField',
            label: 'Text',
            readOnlyAttributes: ['name'],
            type: 'text',
            unique: true,
            width: 75
          },
          {
            hiddenAttributes: ['tip'],
            iconClass: 'form-builder-field-icon-textarea',
            label: 'Textarea',
            type: 'textarea'
          },
          {
            iconClass: 'form-builder-field-icon-checkbox',
            label: 'Checkbox',
            type: 'checkbox'
          },
          {
            iconClass: 'form-builder-field-icon-button',
            label: 'Button',
            type: 'button'
          },
          {
            iconClass: 'form-builder-field-icon-select',
            label: 'Select',
            type: 'select'
          },
          {
            iconClass: 'form-builder-field-icon-radio',
            label: 'Radio Buttons',
            type: 'radio'
          },
          {
            iconClass: 'form-builder-field-icon-fileupload',
            label: 'File Upload',
            type: 'fileupload'
          },
          {
            iconClass: 'form-builder-field-icon-fieldset',
            label: 'Fieldset',
            type: 'fieldset'
          }
        ],
        boundingBox: '#myFormBuilder',
        fields: [
          {
            label: 'City',
            options: [
              {
                label: 'Ney York',
                value: 'new york'
              },
              {
                label: 'Chicago',
                value: 'chicago'
              }
            ],
            predefinedValue: 'chicago',
            type: 'select'
          },
          {
            label: 'Colors',
            options: [
              {
                label: 'Red',
                value: 'red'
              },
              {
                label: 'Green',
                value: 'green'
              },
              {
                label: 'Blue',
                value: 'blue'
              }
            ],
            type: 'radio'
          }
        ]
      }
    ).render();
  }
);
```

</article>
