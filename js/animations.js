//Just practice to see if I can get some of the functionality before I create the directive.

// $('.button').click(function() {
// var random = getRandomColor();
// $('.rainbow').html(
//   function(i, h) {
//     return h.replace(/\w/g, '<span style="color: ' + random + '" >$1</span>');
//   }
// );
// });

// $('.button').click(function() {
//   $('.rainbow').html("<span style='color: red'>this</span> is a test");
// });




  // console.log($('.rainbow').text().charAt(3));

  function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters.charAt(Math.floor(Math.random() * 16));
    }
    return color;
  }


  $('p').click(function() {
    var words = $(this).text().split(' ');

    for (var i = Math.floor(Math.random() * (5 - 1)); i < words.length; i) {
      var random = getRandomColor();
      words[i] = "<span style='color:" + random + "'>" + words[i] +"</span>";
      i += Math.floor(Math.random() * (5 - 1));
    }
    words = words.join(" ");
    $(this).html(words);
  });


  $('.button').click(function() {
    var words = $('.rainbow').text().split(' ');

    for (var i = Math.floor(Math.random() * (5 - 1)); i < words.length; i) {
      var random = getRandomColor();
      words[i] = "<span style='color:" + random + "'>" + words[i] +"</span>";
      i += Math.floor(Math.random() * (5 - 1));
    }
    words = words.join(" ");
    $('.rainbow').html(words);
  });
