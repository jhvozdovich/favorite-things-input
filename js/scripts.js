$(document).ready(function() {
  $("form#favorites").submit(function(event) {
    event.preventDefault();

    var favoriteArray = [];
    var newArray = [];

    var person = $("input#person").val();
    var food = $("input#food").val();
    var color = $("input#color").val();
    var number = parseInt($("input#number").val());
    var quote = $("input#quote").val();

    favoriteArray.push(person, food, color, number, quote);
    console.log(favoriteArray);

    newArray.push(favoriteArray[1], favoriteArray[0], favoriteArray[2]);
    console.log(newArray);

    $(".responses").show();
    $(".list1").text(newArray[0]);
    $(".list2").text(newArray[1]);
    $(".list3").text(newArray[2]);
  });
});