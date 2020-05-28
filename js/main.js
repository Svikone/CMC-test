$(document).ready(() => {
    $('#myModal').on('shown.bs.modal', function () {
        $('#myInput').trigger('focus')
    })
    $('.btn').click(()=> {
        $('.modal').modal('hide')

    })
})