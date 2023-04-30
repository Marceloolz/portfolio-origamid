$(window).on('load', function() {
    if ($('.preloader').length) {
        $('.preloader').fadeOut('slow');
    }
  });

  $('.Container_Galeria_Item').click(function(){
    var ItemGaleriaPortfolio = $(this);
    ItemGaleriaPortfolio.toggleClass( "__CodePenActive");
  });

  $('.Item_ModalCode_CloseBTN').click(function(){
    $('.Container_Galeria_Item').removeClass( "__CodePenActive");
    event.stopPropagation();
  });

  $('.SeletorDayNight').click(function(){
    $('body').toggleClass( '__Is-Day');
  });