---
title: Ace Editor
description: An embeddable code editor that matches the features of native editors.
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

First load the seed and CSS files, if you have not yet.

```xml
<script src="http://cdn.alloyui.com/3.0.1/aui/aui-min.js"></script>
<link href="http://cdn.alloyui.com/3.0.1/aui-css/css/bootstrap.min.css" rel="stylesheet"></link>
```

Then initialize AlloyUI and load the Ace Editor module.

```javascript
YUI().use(
	'aui-ace-editor',
	function(Y) {
		// code goes here
	}
);
```

</article>

<article id="2">

## Using {$page.title}

Create an HTML element for the Ace Editor.

```xml
<div id="myEditor"></div>
```

Now create a new instance of Ace Editor with the newly created element.

```javascript
YUI().use(
	'aui-ace-editor',
	function(Y) {
		new Y.AceEditor(
			{
				boundingBox: '#myEditor'
			}
		).render();
	}
);
```

</article>

<article id="3">

## Configuring {$page.title}

Once a new instance of Ace Editor is created, the mode can be set to correspond to the language being typed.

```javascript
YUI().use(
	'aui-ace-editor',
	function(Y) {
		new Y.AceEditor(
			{
				boundingBox: '#myEditor',
				mode: 'javascript'
			}
		).render();
	}
);
```

The editor can also be set to load with content/code already written.

```javascript
YUI().use(
	'aui-ace-editor',
	function(Y) {
		new Y.AceEditor(
			{
				boundingBox: '#myEditor',
				mode: 'xml',
				value: '<body id="content"></body>'
			}
		).render();
	}
);
```

<div class="alert alert-success">
	For more information about configuration, check out our <a href="http://alloyui.com/api/modules/aui-ace-editor.html" target="_blank"> Api Docs</a>.
</div>

</article>

<article id="4">

## Basic Example


<div id="myWrapper">
  <div id="auiEditor"></div>
</div>

<style>
{literal}
	#myWrapper {
	  margin-bottom: 20px;
	}
	#auiEditor {
	  z-index: 2;
	}
{/literal}
</style>

<script type="text/javascript">
{literal}
	YUI().use(
		'aui-ace-editor',
		function(Y) {
			new Y.AceEditor(
				{
					boundingBox: '#auiEditor',
					height: '200',
					value: 'Write something here...',
					width: '700'
				}
			).render();
		}
	);
{/literal}
</script>
<br>

##### HTML:
```xml
<div id="myWrapper">
  <div id="auiEditor"></div>
</div>
```

##### JavaScript:
```javascript
YUI().use(
  'aui-ace-editor',
  function(Y) {
    new Y.AceEditor(
      {
        boundingBox: '#auiEditor',
        height: '200',
        value: 'Write something here...',
        width: '700'
      }
    ).render();
  }
);
```

</article>

<article id="5">

## Real World Example


<div id="myWrapper">
  <form class="form">
    <div class="form-group">
      <label for="mode" class="control-label">Language Mode:</label>
      <select id="mode" class="form-control">
        <option>javascript</option>
        <option>json</option>
        <option>xml</option>
        <option>php</option>
      </select>
    </div>
  </form>
  <div id="myEditor"></div>
</div>

<script type="text/javascript">
{literal}
	YUI().use(
		'aui-ace-editor',
		function(Y) {
			var editor = new Y.AceEditor(
				{
					boundingBox: '#myEditor',
					height: '200',
					mode: 'javascript',
					value: 'alert("Write something here...");',
					width: '700'
				}
			).render();
			var mode = Y.one('#mode');
			if (mode) {
				var contents = {
					javascript: 'alert("Write something here...");',
					json: '{"value": "Write something here..."}',
					php: '<?php echo "Write something here..."; ?>',
					xml: '<value attr="something">Write something here...</value>'
				};
				var currentMode = 'javascript';
				var updateValue = function() {
					editor.set('value', contents[currentMode]);
				};
				mode.on(
					'change',
					function(event) {
						currentMode = this.val();
						editor.set('mode', currentMode);
						updateValue();
					}
				);
			}
		}
	);
{/literal}
</script>
<br>

##### HTML:
```xml
<div id="myWrapper">
  <form class="form">
    <div class="form-group">
      <label for="mode" class="control-label">Language Mode:</label>
      <select id="mode" class="form-control">
        <option>javascript</option>
        <option>json</option>
        <option>xml</option>
        <option>php</option>
      </select>
    </div>
  </form>
  <div id="myEditor"></div>
</div>
```

##### JavaScript:
```javascript
YUI().use(
  'aui-ace-editor',
  function(Y) {
    var editor = new Y.AceEditor(
      {
        boundingBox: '#myEditor',
        height: '200',
        mode: 'javascript',
        value: 'alert("Write something here...");',
        width: '700'
      }
    ).render();

    var mode = Y.one('#mode');

    if (mode) {
      var contents = {
        javascript: 'alert("Write something here...");',
        json: '{"value": "Write something here..."}',
        php: '<?php echo "Write something here..."; ?>',
        xml: '<value attr="something">Write something here...</value>'
      };

      var currentMode = 'javascript';

      var updateValue = function() {
        editor.set('value', contents[currentMode]);
      };

      mode.on(
        'change',
        function(event) {
          currentMode = this.val();
          editor.set('mode', currentMode);
          updateValue();
        }
      );
    }
  }
);
```

</article>
