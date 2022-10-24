$(function(){
  $("[data-toggle='tooltip']").tooltip();
  $("[data-toggle='popover']").popover();
});

$(".paises").on('show.bs.modal', function(e){
    console.log('Se muestra el modal');
    $( ".reservarBtn" ).prop('disabled', true);
    $( ".reservarBtn" ).removeClass('btn-primary').addClass('btn-secondary');
  });
  
  $(".paises").on('shown.bs.modal', function(e){
    console.log('Se mostró el modal');
  });

  $(".paises").on('hide.bs.modal', function(e){
    console.log('Se cierra el modal');
    $( ".reservarBtn" ).removeClass('btn-secondary').addClass('btn-primary');
    $( ".reservarBtn" ).prop('disabled', false);
  });

  $(".paises").on('hidden.bs.modal', function(e){
    console.log('Se cerró el modal');
  });