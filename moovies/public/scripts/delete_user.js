
function showConfirm(message){
  $modal = $('.confirm-modal')
  $modal.modal('show')
  let _reject, _resolve

  $('.modal-ok').on('click', function(){
    _resolve(true);
  })
  
  $('.modal-cancel').on('click', function(){
    _resolve(false);
  })

  return new Promise(function(resolve,reject){
    _reject = reject;
    _resolve = resolve;
  })
}

$('#btnDelete').on('click', function(e){
    e.preventDefault();
    console.log('klikk');

    showConfirm().then(resolve =>{
      if(resolve){
          var url = '/ajax' + $(this).attr('href')
          console.log(url)
    ajaxDelete(url).then(function(data){
        console.log('s');
        console.log(data);
        location.assign('/users/list');
    })
    .catch(function(error){
        console.log('e');
        console.log(error);
    });
      }

    })
    // /

    
})

function ajaxDelete(url) {
  const headers = {
    'csrf-token': $('[name="_csrf"]').val()
  }
  console.log($('[name="_csrf"]').val())
  return Promise.resolve(
    $.ajax({
      url,
      method: 'DELETE',
      dataType: 'json',
      headers
    })
  )
}

