'use strict';

const setAPIOrigin = require('../../lib/set-api-origin');
const config = require('./config');



$(() => {
  setAPIOrigin(location, config);


  const saveChanges = function (event) {
    event.preventDefault();
    let input = $("#name").val();
    console.log(input);
  };
    $('#saveChange').on('save-changes', saveChanges);
});

// use require with a reference to bundle the file and use it in this file
// const example = require('./example');
