'use strict';

(function () {

  var url = 'http://json-data.herokuapp.com/forms';
  var templateString = $('#itemTemplate').text();
  var templateFunction = _.template(templateString);

  // Go fetch data and do something with it
  var promise = $.getJSON(url);
  promise.then(function (res) {
    doSomething(res);
  });

  //Template

  var textInput = function textInput(obj) {

    var template = '\n    <div class="text-input">\n    <input value ="" type="' + obj.type + '" placeholder="' + obj.label + '" id="' + obj.id + '">\n    </div>\n    ';

    return template;
  };

  // Our "do something" function
  var doSomething = function doSomething(arr) {

    _.each(arr, function (item) {
      console.log(item);

      var htmlBlock;

      if (item.type === 'text' || item.type === 'tel' || item.type === 'email' || item.type === 'select') {
        htmlBlock = textInput(item);
      }

      $('form').append(htmlBlock);
    });
  };
})();