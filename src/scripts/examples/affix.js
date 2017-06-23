YUI().use(
	'aui-affix',
	function(Y) {
		var boxTop = Y.one('#myAffix').getY();
		new Y.Affix(
			{
				target: '#myAffix',
				offsetTop: boxTop
			}
		);
	}
);