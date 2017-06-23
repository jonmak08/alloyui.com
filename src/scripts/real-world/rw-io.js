YUI().use(
  'aui-io-request',
  'node',
  function(Y) {
    Y.io.request(
      '/files/io/states.json',
      {
        dataType: 'json',
        on: {
          success: function() {
            var data = this.get('responseData');
            states = data.states;

            for (i = 0; i < states.length; i++) {
              Y.one('#state').append('<option value="' + states[i].code + '">' + states[i].name + '</option>');
            }
          }
        }
      }
    );

    Y.one('#state').on(
      'change',
      function() {
        var cityCode = this.get('value');

        if (cityCode !== '') {
          Y.io.request(
            '/files/io/' + cityCode + '.json',
            {
              dataType: 'json',
              on: {
                success: function() {
                  var data = this.get('responseData');
                  cities = data.cities;
                  options = '';

                  for (i = 0; i < cities.length; i++) {
                    options += '<option value="' + cities[i].name + '">' + cities[i].name + '</option>';
                  }

                  Y.one('#city').setHTML(options);
                }
              }
            }
          );
        }
      }
    );
  }
);