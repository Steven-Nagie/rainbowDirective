angular.module('app').directive('rainbow', function() {
  return {
    link: function(scope, element, attrs) {
      var words = element.text().split(' ');

      for (var i = Math.floor(Math.random() * (5 - 1)); i < words.length; i) {
        var random = getRandomColor();
        words[i] = "<span style='color:" + random + "'>" + words[i] +"</span>";
        i += Math.floor(Math.random() * (5 - 1));
      }
      words = words.join(" ");
      element.html(words);
    }
  };
});
