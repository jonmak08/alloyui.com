YUI().use(
  'aui-video',
  function(Y) {
		console.log('loaded source script called')
    new Y.Video(
      {
        boundingBox: '#myVideo1',
        ogvUrl: 'http://alloyui.com/video/movie.ogg',
        url: 'http://alloyui.com/video/movie.mp4'
      }
    ).render();
  }
);