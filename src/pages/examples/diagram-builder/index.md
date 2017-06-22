---
title: Diagram Builder
description: Drag and drop diagram elements, create new tasks, draw connectors from node to node.
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

Then initialize AlloyUI and load the Diagram Builder module.

```javascript
YUI().use(
  'aui-diagram-builder',
  function(Y) {
    // code goes here
  }
);
```

</article>

<article id="2">

## Using {$page.title}

Create an HTML element with a container element:

```xml
<div id="myDiagramContainer">
  <div id="myDiagramBuilder"></div>
</div>
```

Now create a new instance of Diagram Builder component by setting `srcNode` to our HTML element's selector and `boundingBox` to our HTML container. We should also populate our new Diagram `fields` with a Diagram field passing it a `name`, `type`, and `xy` location. Finally, let's render it!

```javascript
YUI().use(
  'aui-diagram-builder',
  function(Y) {
    new Y.DiagramBuilder(
      {
        boundingBox: '#myDiagramContainer',
        fields: [
          {
            name: 'StartNode',
            type: 'start',
            xy: [10, 10]
          }
        ],
        srcNode: '#myDiagramBuilder'
      }
    ).render();
  }
);
```

</article>


<article id="3">

## Configuring {$page.title}

There are some other optional parameters that you can pass to your Diagram Builder instance.

You can add available fields for Diagram Builder to use by passing an array of field objects to `availableFields`. These available fields can be dragged onto Diagram Builder, generating new diagram fields.

```javascript
YUI().use(
  'aui-diagram-builder',
  function(Y) {
    var availableFields = [
      {
        iconClass: 'diagram-node-task-icon',
        label: 'Task',
        type: 'task'
      }
    ];

    new Y.DiagramBuilder(
      {
        availableFields: availableFields,
        boundingBox: '#myDiagramContainer',
        fields: [
          {
            name: 'StartNode',
            type: 'start',
            xy: [10, 10]
          }
        ],
        srcNode: '#myDiagramBuilder'
      }
    ).render();
  }
);
```

<div class="alert alert-info">
  <strong>Note: </strong>
  passing an `iconClass` to a new available field is optional. Diagram Builder's active fields have icons automatically supplied, but available fields will need icons passed in through the `iconClass` parameter.
</div>

Using the `connectAll` method, you can set connections between fields. Simply pass the `source` parameter your source field and the `target` parameter your target field. Also, you can pass settings to your `connector` as an object with parameters.

```javascript
YUI().use(
  'aui-diagram-builder',
  function(Y) {
    var diagramBuilder = new Y.DiagramBuilder(
      {
        boundingBox: '#myDiagramContainer',
        fields: [
          {
            name: 'StartNode',
            type: 'start',
            xy: [10, 10]
          },
          {
            name: 'EndNode',
            type: 'end',
            xy: [300, 400]
          }
        ],
        srcNode: '#myDiagramBuilder'
      }
    ).render();

    diagramBuilder.connectAll(
      [
        {
          connector: {
            name: 'TaskConnector'
          },
          source: 'StartNode',
          target: 'EndNode'
        }
      ]
    );
  }
);
```

There are many other field types you can use when constructing Diagram Builder, such as `state`, `join`, `condition` and more! And of course, each of these fields can be connected together afterward when you pass them to Diagram Builder's `fields` parameter and connect them with the `connectAll` method.

```javascript
YUI().use(
  'aui-diagram-builder',
  function(Y) {
    var availableFields = [
      {
        iconClass: 'diagram-node-start-icon',
        label: 'Start',
        type: 'start'
      },
      {
        iconClass: 'diagram-node-task-icon',
        label: 'Task',
        type: 'task'
      },
      {
        iconClass: 'diagram-node-state-icon',
        label: 'State',
        type: 'state'
      },
      {
        iconClass: 'diagram-node-join-icon',
        label: 'Join',
        type: 'join'
      },
      {
        iconClass: 'diagram-node-fork-icon',
        label: 'Fork',
        type: 'fork'
      },
      {
        iconClass: 'diagram-node-condition-icon',
        label: 'Condition',
        type: 'condition'
      },
      {
        iconClass: 'diagram-node-end-icon',
        label: 'End',
        type: 'end'
      }
    ];

    new Y.DiagramBuilder(
      {
        availableFields: availableFields,
        boundingBox: '#myDiagramContainer',
        srcNode: '#myDiagramBuilder'
      }
    ).render();
  }
);
```

<div class="alert alert-success">
For more information about configuration, check out our <a href="http://alloyui.com/api/modules/aui-diagram-builder.html" target="_blank"> Api Docs</a>.
</div>

</article>

<article id="4">

## Basic Example

<div id="aui-diagram-builder-bb">
  <div id="aui-diagram-builder-sn"></div>
</div>

<script type="text/javascript">
{literal}
  YUI().use(
    'aui-diagram-builder',
    function(Y) {
      var availableFields = [
        {
          iconClass: 'diagram-node-task-icon',
          label: 'Task',
          type: 'task'
        }
      ];
      var diagramBuilder = new Y.DiagramBuilder (
        {
          availableFields: availableFields,
          boundingBox: '#aui-diagram-builder-bb',
          fields: [
            {
              name: 'StartNode',
              type: 'start',
              xy: [10, 10]
            },
            {
              name: 'EndNode',
              type: 'end',
              xy: [300, 400]
            }
          ],
          render: true,
          srcNode: '#aui-diagram-builder-sn'
        }
      );
      diagramBuilder.connectAll(
        [
          {
            connector: {
              name: 'TaskConnector'
            },
            source: 'StartNode',
            target: 'EndNode'
          }
        ]
      );
    }
  );
{/literal}
</script>
<br>

##### HTML:
```xml
<div id="diagram-builder-bb">
  <div id="diagram-builder-sn"></div>
</div>
```

##### JavaScript:
```javascript
YUI().use(
  'aui-diagram-builder',
  function(Y) {

    var availableFields = [
      {
        iconClass: 'diagram-node-task-icon',
        label: 'Task',
        type: 'task'
      }
    ];

    var diagramBuilder = new Y.DiagramBuilder (
      {
        availableFields: availableFields,
        boundingBox: '#diagram-builder-bb',
        fields: [
          {
            name: 'StartNode',
            type: 'start',
            xy: [10, 10]
          },
          {
            name: 'EndNode',
            type: 'end',
            xy: [300, 400]
          }
        ],
        render: true,
        srcNode: '#diagram-builder-sn'
      }
    );

    diagramBuilder.connectAll(
      [
        {
          connector: {
            name: 'TaskConnector'
          },
          source: 'StartNode',
          target: 'EndNode'
        }
      ]
    );
  }
);
```

</article>

<article id="5">

## Real World Example

<div id="diagram-builder-bb">
  <div id="diagram-builder-sn"></div>
</div>

<script type="text/javascript">
{literal}
  YUI().use(
    'aui-diagram-builder',
    function(Y) {
      var availableFields = [
        {
          iconClass: 'diagram-node-start-icon',
          label: 'Start',
          type: 'start'
        },
        {
          iconClass: 'diagram-node-task-icon',
          label: 'Task',
          type: 'task'
        },
        {
          iconClass: 'diagram-node-state-icon',
          label: 'State',
          type: 'state'
        },
        {
          iconClass: 'diagram-node-join-icon',
          label: 'Join',
          type: 'join'
        },
        {
          iconClass: 'diagram-node-fork-icon',
          label: 'Fork',
          type: 'fork'
        },
        {
          iconClass: 'diagram-node-condition-icon',
          label: 'Condition',
          type: 'condition'
        },
        {
          iconClass: 'diagram-node-end-icon',
          label: 'End',
          type: 'end'
        }
      ];
      var diagramBuilder = new Y.DiagramBuilder (
        {
          availableFields: availableFields,
          boundingBox: '#diagram-builder-bb',
          fields: [
            {
              name: 'StartNode',
              type: 'start',
              xy: [10, 10]
            },
            {
              name: 'Condition',
              type: 'condition',
              xy: [260, 16]
            },
            {
              name: 'Fork',
              type: 'fork',
              xy: [183, 99]
            },
            {
              name: 'Task1',
              type: 'task',
              xy: [38, 158]
            },
            {
              name: 'Task2',
              type: 'task',
              xy: [262, 221]
            },
            {
              name: 'Join',
              type: 'join',
              xy: [99, 300]
            },
            {
              name: 'State',
              type: 'state',
              xy: [287, 377]
            },
            {
              name: 'Task3',
              type: 'task',
              xy: [100, 444]
            },
            {
              name: 'EndNode',
              type: 'end',
              xy: [326, 500]
            }
          ],
          render: true,
          srcNode: '#diagram-builder-sn'
        }
      );
      diagramBuilder.connectAll(
        [
          {
            connector: {
              name: 'TaskConnector1'
            },
            source: 'StartNode',
            target: 'Condition'
          },
          {
            connector: {
              name: 'TaskConnector2'
            },
            source: 'Condition',
            target: 'Fork'
          },
          {
            connector: {
              name: 'TaskConnector3'
            },
            source: 'Fork',
            target: 'Task1'
          },
          {
            connector: {
              name: 'TaskConnector4'
            },
            source: 'Fork',
            target: 'Task2'
          },
          {
            connector: {
              name: 'TaskConnector5'
            },
            source: 'Task1',
            target: 'Join'
          },
          {
            connector: {
              name: 'TaskConnector6'
            },
            source: 'Task2',
            target: 'Join'
          },
          {
            connector: {
              name: 'TaskConnector7'
            },
            source: 'Join',
            target: 'State'
          },
          {
            connector: {
              name: 'TaskConnector8'
            },
            source: 'State',
            target: 'Task3'
          },
          {
            connector: {
              name: 'TaskConnector9'
            },
            source: 'Task3',
            target: 'EndNode'
          }
        ]
      );
    }
  );
{/literal}
</script>
<br>

##### HTML:
```xml
<div id="diagram-builder-bb">
  <div id="diagram-builder-sn"></div>
</div>
```

##### JavaScript:
```javascript
YUI().use(
  'aui-diagram-builder',
  function(Y) {

    var availableFields = [
      {
        iconClass: 'diagram-node-start-icon',
        label: 'Start',
        type: 'start'
      },
      {
        iconClass: 'diagram-node-task-icon',
        label: 'Task',
        type: 'task'
      },
      {
        iconClass: 'diagram-node-state-icon',
        label: 'State',
        type: 'state'
      },
      {
        iconClass: 'diagram-node-join-icon',
        label: 'Join',
        type: 'join'
      },
      {
        iconClass: 'diagram-node-fork-icon',
        label: 'Fork',
        type: 'fork'
      },
      {
        iconClass: 'diagram-node-condition-icon',
        label: 'Condition',
        type: 'condition'
      },
      {
        iconClass: 'diagram-node-end-icon',
        label: 'End',
        type: 'end'
      }
    ];

    var diagramBuilder = new Y.DiagramBuilder (
      {
        availableFields: availableFields,
        boundingBox: '#diagram-builder-bb',
        fields: [
          {
            name: 'StartNode',
            type: 'start',
            xy: [10, 10]
          },
          {
            name: 'Condition',
            type: 'condition',
            xy: [260, 16]
          },
          {
            name: 'Fork',
            type: 'fork',
            xy: [183, 99]
          },
          {
            name: 'Task1',
            type: 'task',
            xy: [38, 158]
          },
          {
            name: 'Task2',
            type: 'task',
            xy: [262, 221]
          },
          {
            name: 'Join',
            type: 'join',
            xy: [99, 300]
          },
          {
            name: 'State',
            type: 'state',
            xy: [287, 377]
          },
          {
            name: 'Task3',
            type: 'task',
            xy: [100, 444]
          },
          {
            name: 'EndNode',
            type: 'end',
            xy: [326, 500]
          }
        ],
        render: true,
        srcNode: '#diagram-builder-sn'
      }
    );

    diagramBuilder.connectAll(
      [
        {
          connector: {
            name: 'TaskConnector1'
          },
          source: 'StartNode',
          target: 'Condition'
        },
        {
          connector: {
            name: 'TaskConnector2'
          },
          source: 'Condition',
          target: 'Fork'
        },
        {
          connector: {
            name: 'TaskConnector3'
          },
          source: 'Fork',
          target: 'Task1'
        },
        {
          connector: {
            name: 'TaskConnector4'
          },
          source: 'Fork',
          target: 'Task2'
        },
        {
          connector: {
            name: 'TaskConnector5'
          },
          source: 'Task1',
          target: 'Join'
        },
        {
          connector: {
            name: 'TaskConnector6'
          },
          source: 'Task2',
          target: 'Join'
        },
        {
          connector: {
            name: 'TaskConnector7'
          },
          source: 'Join',
          target: 'State'
        },
        {
          connector: {
            name: 'TaskConnector8'
          },
          source: 'State',
          target: 'Task3'
        },
        {
          connector: {
            name: 'TaskConnector9'
          },
          source: 'Task3',
          target: 'EndNode'
        }
      ]
    );
  }
);
```

</article>
