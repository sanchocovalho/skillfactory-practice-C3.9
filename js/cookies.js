function clearMessage(){
  $('.message').text("");
}

function initPage(){
  let cityname = localStorage.getItem('city');
  if (cityname != null)
    $('#localcity').placeholder("Ваш город - " + cityname);
  let status;
  for (let i = 0; i < 6; i++) {
    status = localStorage.getItem('checkbox' + i);
    if (status != null)
    {
      $('#checkbox' + i).check((status == 'true') ? true : false);
      $('#checkbox' + i).disable(true);
    }
  }
  if ((cityname != null)  || (status != null))
    $('#remove').show();
}

$('#save').click(() => {
  let cityname = $('#localcity').val();
  if (cityname)
  {
    localStorage.setItem('city', cityname);
	$('#localcity').val('');
	$('#localcity').placeholder("Ваш город - " + cityname);
  }
  for (let i = 0; i < 6; i++) {
    let status = $('#checkbox' + i).check();
    localStorage.setItem('checkbox' + i, status);
    $('#checkbox' + i).disable(true);
  }
  $('.message').text("Cookie записаны");
  setTimeout(clearMessage, 3000);
});

$('#remove').click(() => {
  localStorage.removeItem('city');
  $('#localcity').val('');
  $('#localcity').placeholder('Введите название вашего города');
  for (let i = 0; i < 6; i++) {
    $('#checkbox' + i).check(false);
    $('#checkbox' + i).disable(false);
    localStorage.removeItem('checkbox' + i);
  }
  $('.message').text("Cookie очищены");
  setTimeout(clearMessage, 3000);
});

initPage();