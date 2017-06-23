---
title: Scheduler
description: Allows user to access scheduler widget with built-in calendar.
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

Then initialize AlloyUI and load the Scheduler module.

```javascript
YUI().use(
  'aui-scheduler',
  function(Y) {
    // code goes here
  }
);
```

</article>

<article id="2">

## Using {$page.title}

Create an HTML element with a wrapper div:

```xml
<div id="wrapper">
  <div id="myScheduler"></div>
</div>
```

<div class="alert alert-info">
  <strong>Note: </strong>
  using Scheduler without a "wrapper" `div` may produce undesirable results due to its styling within AlloyUI. Try it with or without a wrapper to see how Scheduler works with surrounding elements.
</div>

Now create a new instance of Scheduler component.

First, let's create an `events` variable where we stored our first calendar event, setting its name via `content` and a start and end date. Then we'll initialize the calendar view we're going to use, `weekView`.

Finally, we'll create a new Scheduler with its `boundingBox` set to our HTML element, its `date` set to when we scheduled our first event, and pass in `events` for `items` and `weekView` for `views`, setting `render` to `true` so that it renders on load.

```javascript
YUI().use(
  'aui-scheduler',
  function(Y) {
    var events = [
      {
        content: 'Partial Lunar Eclipse',
        endDate: new Date(2013, 3, 25, 5),
        startDate: new Date(2013, 3, 25, 1)
      }
    ];

    var weekView = new Y.SchedulerWeekView();

    new Y.Scheduler(
      {
        boundingBox: '#myScheduler',
        date: new Date(2013, 3, 25),
        items: events,
        render: true,
        views: [weekView]
      }
    );
  }
);
```

<div class="alert alert-info">
  <strong>Note: </strong>
  you don't have to set `date` inside your new Scheduler instance, but be forewarned, if you don't supply a date, Scheduler will use the current date as its starting date, sometimes making it hard to find your events!
</div>

</article>


<article id="3">

## Configuring {$page.title}

There are some other optional parameters that you can pass to your Scheduler instance.

For example, you can add other views to your `views` option with the Scheduler View constructors. This will allow you to view your events in different formats. You can also set `activeView` to the view you want Scheduler to start on.

```javascript
YUI().use(
  'aui-scheduler',
  function(Y) {
    var events = [
      {
        content: 'Partial Lunar Eclipse',
        endDate: new Date(2013, 3, 25, 5),
        startDate: new Date(2013, 3, 25, 1)
      }
    ];

    var agendaView = new Y.SchedulerAgendaView();
    var dayView = new Y.SchedulerDayView();
    var weekView = new Y.SchedulerWeekView();
    var monthView = new Y.SchedulerMonthView();

    new Y.Scheduler(
      {
        activeView: weekView,
        boundingBox: '#myScheduler',
        date: new Date(2013, 3, 25),
        items: events,
        render: true,
        views: [dayView, weekView, monthView, agendaView]
      }
    );
  }
);
```

Adding `eventRecorder` to your options via the `NewEventRecorder` constructor allows you change the duration of existing events and create new events directly inside Scheduler, all of which are recorded and saved in Scheduler.

```javascript
YUI().use(
  'aui-scheduler',
  function(Y) {
    var events = [
      {
        content: 'Partial Lunar Eclipse',
        endDate: new Date(2013, 3, 25, 5),
        startDate: new Date(2013, 3, 25, 1)
      }
    ];

    var agendaView = new Y.SchedulerAgendaView();
    var dayView = new Y.SchedulerDayView();
    var weekView = new Y.SchedulerWeekView();
    var monthView = new Y.SchedulerMonthView();

    var eventRecorder = new Y.SchedulerEventRecorder();

    new Y.Scheduler(
      {
        activeView: weekView,
        boundingBox: '#myScheduler',
        date: new Date(2013, 3, 25),
        eventRecorder: eventRecorder,
        items: events,
        render: true,
        views: [dayView, weekView, monthView, agendaView]
      }
    );
  }
);
```

You can even customize your individual events with a number of options, including `color`, `meeting`, `reminder`, and `disabled`. Events can also span multiple days and overlap each other.

```javascript
YUI().use(
  'aui-scheduler',
  function(Y) {
    var events = [
      {
        content: 'Partial Lunar Eclipse',
        endDate: new Date(2013, 3, 25, 5),
        startDate: new Date(2013, 3, 25, 1)
      },
      {
        color: "#8d8",
        content: 'Earth Day Lunch',
        disabled: true,
        endDate: new Date(2013, 3, 22, 13),
        meeting: true,
        reminder: true,
        startDate: new Date(2013, 3, 22, 12)
      },
      {
        content: "Weeklong",
        endDate: new Date(2013, 3, 27),
        startDate: new Date(2013, 3, 21)
      }
    ];

    var agendaView = new Y.SchedulerAgendaView();
    var dayView = new Y.SchedulerDayView();
    var weekView = new Y.SchedulerWeekView();
    var monthView = new Y.SchedulerMonthView();

    var eventRecorder = new Y.SchedulerEventRecorder();

    new Y.Scheduler(
      {
        activeView: weekView,
        boundingBox: '#myScheduler',
        date: new Date(2013, 3, 25),
        eventRecorder: eventRecorder,
        items: events,
        render: true,
        views: [dayView, weekView, monthView, agendaView]
      }
    );
  }
);
```

<div class="alert alert-success">
For more information about configuration, check out our <a href="http://alloyui.com/api/modules/aui-scheduler.html" target="_blank"> Api Docs</a>.
</div>

</article>

<article id="4">

## Basic Example

<style>
{literal}
#myScheduler {
  margin: 15px 0;
}
.btn {
  font-size: 14px;
  line-height: 1.42857;
  padding: 6px 12px;
}
.docs .guide-content table tr th, .docs .guide-content table tr td {
    border-width: initial;
    font-size: initial;
    line-height: initial;
    padding: initial;
    vertical-align: initial;
    height: initial;
}
.docs .guide-content table * {
    border-width: initial !important;
}
{/literal}
</style>

<div id="auiScheduler"></div>

<script type="text/javascript">
{literal}
  YUI().use(
    'aui-scheduler',
    function(Y) {
      var events = [
        {
          content: 'Event1',
          endDate: new Date(2013, 1, 4, 5),
          startDate: new Date(2013, 1, 4, 1)
        }
      ];
      var eventRecorder = new Y.SchedulerEventRecorder();
      var weekView = new Y.SchedulerWeekView();
      new Y.Scheduler(
        {
          boundingBox: '#auiScheduler',
          date: new Date(2013, 1, 4),
          eventRecorder: eventRecorder,
          items: events,
          render: true,
          views: [weekView]
        }
      );
    }
  );
{/literal}
</script>
<br>

##### HTML:
```xml
<div id="auiScheduler"></div>
```

##### JavaScript:
```javascript
YUI().use(
  'aui-scheduler',
  function(Y) {
    var events = [
      {
        content: 'Event1',
        endDate: new Date(2013, 1, 4, 5),
        startDate: new Date(2013, 1, 4, 1)
      }
    ];

    var eventRecorder = new Y.SchedulerEventRecorder();
    var weekView = new Y.SchedulerWeekView();

    new Y.Scheduler(
      {
        boundingBox: '#auiScheduler',
        date: new Date(2013, 1, 4),
        eventRecorder: eventRecorder,
        items: events,
        render: true,
        views: [weekView]
      }
    );
  }
);
```

</article>

<article id="5">

## Real World Example

<div id="myScheduler"></div>

<script type="text/javascript">
{literal}
  YUI().use(
    'aui-scheduler',
    function(Y) {
      var events = [
        {
          content: 'AllDay',
          endDate: new Date(2013, 1, 5, 23, 59),
          startDate: new Date(2013, 1, 5, 0)
        },
        {
          color: '#8D8',
          content: 'Colorful',
          endDate: new Date(2013, 1, 6, 6),
          startDate: new Date(2013, 1, 6, 2)
        },
        {
          content: 'MultipleDays',
          endDate: new Date(2013, 1, 8),
          startDate: new Date(2013, 1, 4)
        },
        {
          content: 'Disabled',
          disabled: true,
          endDate: new Date(2013, 1, 8, 5),
          startDate: new Date(2013, 1, 8, 1)
        },
        {
          content: 'Meeting',
          endDate: new Date(2013, 1, 7, 7),
          meeting: true,
          startDate: new Date(2013, 1, 7, 3)
        },
        {
          color: '#88D',
          content: 'Overlap',
          endDate: new Date(2013, 1, 5, 4),
          startDate: new Date(2013, 1, 5, 1)
        },
        {
          content: 'Reminder',
          endDate: new Date(2013, 1, 4, 4),
          reminder: true,
          startDate: new Date(2013, 1, 4, 0)
        }
      ];
      var agendaView = new Y.SchedulerAgendaView();
      var dayView = new Y.SchedulerDayView();
      var eventRecorder = new Y.SchedulerEventRecorder();
      var monthView = new Y.SchedulerMonthView();
      var weekView = new Y.SchedulerWeekView();
      new Y.Scheduler(
        {
          activeView: weekView,
          boundingBox: '#myScheduler',
          date: new Date(2013, 1, 4),
          eventRecorder: eventRecorder,
          items: events,
          render: true,
          views: [dayView, weekView, monthView, agendaView]
        }
      );
    }
  );
{/literal}
</script>
<br>

##### HTML:
```xml
<div id="myScheduler"></div>
```

##### JavaScript:
```javascript
YUI().use(
  'aui-scheduler',
  function(Y) {
    var events = [
      {
        content: 'AllDay',
        endDate: new Date(2013, 1, 5, 23, 59),
        startDate: new Date(2013, 1, 5, 0)
      },
      {
        color: '#8D8',
        content: 'Colorful',
        endDate: new Date(2013, 1, 6, 6),
        startDate: new Date(2013, 1, 6, 2)
      },
      {
        content: 'MultipleDays',
        endDate: new Date(2013, 1, 8),
        startDate: new Date(2013, 1, 4)
      },
      {
        content: 'Disabled',
        disabled: true,
        endDate: new Date(2013, 1, 8, 5),
        startDate: new Date(2013, 1, 8, 1)
      },
      {
        content: 'Meeting',
        endDate: new Date(2013, 1, 7, 7),
        meeting: true,
        startDate: new Date(2013, 1, 7, 3)
      },
      {
        color: '#88D',
        content: 'Overlap',
        endDate: new Date(2013, 1, 5, 4),
        startDate: new Date(2013, 1, 5, 1)
      },
      {
        content: 'Reminder',
        endDate: new Date(2013, 1, 4, 4),
        reminder: true,
        startDate: new Date(2013, 1, 4, 0)
      }
    ];

    var agendaView = new Y.SchedulerAgendaView();
    var dayView = new Y.SchedulerDayView();
    var eventRecorder = new Y.SchedulerEventRecorder();
    var monthView = new Y.SchedulerMonthView();
    var weekView = new Y.SchedulerWeekView();

    new Y.Scheduler(
      {
        activeView: weekView,
        boundingBox: '#myScheduler',
        date: new Date(2013, 1, 4),
        eventRecorder: eventRecorder,
        items: events,
        render: true,
        views: [dayView, weekView, monthView, agendaView]
      }
    );
  }
);
```

</article>
