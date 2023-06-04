$(document).ready(onReady);

let counter = 0;

function onReady() {
  $('.submit-button').on('click', handleInput);
  $('div').on('click', '.to-yellow', yellowBackground);
  $('div').on('click', '.delete-button', deleteDiv);
}

function handleInput() {
  counter++;

  $('.add-here').append(
    `<div class="container">
      <p>${counter}</p>
      <button class="to-yellow">Yellow</button>
      <button class="delete-button">Delete</button>
    </div>`
  );
}

function yellowBackground() {
  $(this).parent().css('background-color', 'yellow');
}

function deleteDiv() {
  $(this).parent().remove();
}