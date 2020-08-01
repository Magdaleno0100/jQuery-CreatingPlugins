(function() {
  var $shortMessage = $('.js-short-message');


  // options: maxlength?
  // 

  $shortMessage.keyup(function updateCharCounter() {
  	var $me = $(this),
  		charCount = $me.val().length,
        $counter = $me.siblings('.limit');
        
        $counter.text('limit: 2000 characters. remaining: ' + (2000 - charCount))
  });
})();