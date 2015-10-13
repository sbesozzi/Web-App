(function () {

 let url ='http://json-data.herokuapp.com/forms';
 var templateString = $('#itemTemplate').text();
  var templateFunction = _.template(templateString);


// Go fetch data and do something with it
 let promise = $.getJSON(url);
 promise.then(function(res) {
  doSomething(res);
 });


 //Template

 let textInput = function (obj) {

  let template = `
    <div class="text-input">
    <input value ="" type="${ obj.type }" placeholder="${ obj.label }" id="${ obj.id }">
    </div>
    `;


    return template;


 }
  

// Our "do something" function
let doSomething = function (arr) {

    _.each(arr, function (item) {
      console.log(item);

      var htmlBlock;

      if (item.type === 'text' || item.type === 'tel' || item.type === 'email' || item.type === 'select') {
        htmlBlock = textInput(item);
      }

      $('form').append(htmlBlock);

    });
};

}());

