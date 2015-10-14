(function () {

  let makeFormField = function (obj) {

    let templateStr = '<div class="text-input">';

    switch (obj.type) {
      case 'select':
        templateStr = `
        <select name="${obj.id}" id="${obj.id}">
        <option val="">--- ${obj.label} ---</option>
        `;
        obj.options.forEach(function(option){
          templateStr += `<option value="${option.value}">${option.label}</option>`;
        });
        templateStr += `
        </select>
        </div>
        `;
        break;
      case 'textarea':
        templateStr += `
        <textarea rows="4" cols="50" name="${obj.id}" id="${obj.id}" placeholder="${obj.label}"></textarea>
        `;
        break;
      default:
        templateStr += `
        <input value ="" type="${ obj.type }" placeholder="${ obj.label }" id="${ obj.id }">
        `;
      }

    templateStr += '</div>';

    return templateStr;
  };

  // Our "do something" function
  let makeFormFields = function (arr) {

    _.each(arr, function (item) {
      console.log(item);
      $('form').append(makeFormField(item));
    });
  };

  let url ='http://json-data.herokuapp.com/forms';

  // Go fetch data and do something with it
  let promise = $.getJSON(url);
  promise.then(function(res) {
    makeFormFields(res);
  });

}());
