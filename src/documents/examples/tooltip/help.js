YUI().use(
  'aui-tooltip',
  function(Y) {
    new Y.Tooltip(
      {
        cssClass: 'tooltip-help',
        opacity: 1,
        position: 'right',
        trigger: '#myTooltipHelp'
      }
    ).render();
  }
);