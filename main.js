$(function(){
  var koma = null; // holded koma
  var bmasu = null; // before masu
  $(".koma").click(function(){
    $(bmasu).css('background','');
    koma = this; // set clicked koma
  })
  $(".masu").click(function(){
    if ($(this).children().length > 0){
      if (koma) {
        $(this).css('background-color','');
      }
        $(this).css('background-color','#e0fafd');
      bmasu = this;
      return; //if this masu has some child, then do nothing
    }
    if (koma) { // if holded koma exisits
      $(koma).appendTo(this);
      $(bmasu).css('background','');
      koma = null;
      bmasu = null;
    }
  })
})