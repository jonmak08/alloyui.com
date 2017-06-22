YUI().use(
  'aui-tooltip',
  function(Y) {
		console.log('tooltip')
    new Y.Tooltip(
      {
        trigger: '#myTooltip',
        position: 'right'
      }
    ).render();
  }
);