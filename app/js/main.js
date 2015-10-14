'use strict';

(function () {

  var makeFormField = function makeFormField(obj) {

    var templateStr = '<div class="text-input">';

    switch (obj.type) {
      case 'select':
        templateStr = '\n        <select name="' + obj.id + '" id="' + obj.id + '">\n        <option val="">--- ' + obj.label + ' ---</option>\n        ';
        obj.options.forEach(function (option) {
          templateStr += '<option value="' + option.value + '">' + option.label + '</option>';
        });
        templateStr += '\n        </select>\n        </div>\n        ';
        break;
      case 'textarea':
        templateStr += '\n        <textarea rows="4" cols="50" name="' + obj.id + '" id="' + obj.id + '" placeholder="' + obj.label + '"></textarea>\n        ';
        break;
      default:
        templateStr += '\n        <input value ="" type="' + obj.type + '" placeholder="' + obj.label + '" id="' + obj.id + '">\n        ';
    }

    templateStr += '</div>';

    return templateStr;
  };

  // Our "do something" function
  var makeFormFields = function makeFormFields(arr) {

    _.each(arr, function (item) {
      console.log(item);
      $('form').append(makeFormField(item));
    });
  };

  var url = 'http://json-data.herokuapp.com/forms';

  // Go fetch data and do something with it
  var promise = $.getJSON(url);
  promise.then(function (res) {
    makeFormFields(res);
  });
})();
