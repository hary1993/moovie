$('#btnLogin').on('click', function(e){
    e.preventDefault();
    let $modal=$('.modal');
    const hasModal = $modal.length;

    if(hasModal){
        $modal.modal('show');
        return;
    }else{


$modal=$(`<div class="modal fade confirm-modal" tabindex="-1" role="dialog" id="loginModal">
  <div class="modal-dialog modal-md" role="document">
    <div class="modal-content">
      <div class="modal-header">Belépés</div>
      <div class="modal-body">
        <div class="alert alert-danger"></div>
        <div class="form-area"></div>
      </div>
    </div>
  </div>
</div>`)

$formArea = $modal.find('.form-area');
$formAlert = $modal.find('.alert');


$formArea.load('/login #formLogin', function(){
    $modal.modal('show');
    console.log('SIKER');
    $formAlert.hide();

    $formArea.find('form').on('reset', function(e){
        e.preventDefault();
        $modal.modal('hide');
    })

    $formArea.find('form').on('submit', function(e){
        e.preventDefault();
        const data =$(this).serializeArray();
        const headers = {
            'csrf-token': $('[name="_csrf"]').val()
        }
    Promise.resolve(
        $.ajax({
        url: '/ajax/login',
        method: 'POST',
        dataType: 'json',
        headers,
        data
        })
    ).then(json =>{
        if(json.success){
            location.assign('/');
            //újratölt
        }else{
            $formAlert.show();
            $formAlert.html('<span>Sikertelen bejelentkezés!<span>')
        }
    })

    })

})
	}

})


function deleteask(){
  if (confirm('Biztos, hogy ki szeretne lépni??')){
    return true;
  }else{
    return false;
  }
}