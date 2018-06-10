 $(document).ready(function () {
   
      $(document).on('click', '#login2', function (event) {
        event.preventDefault();
        var name = document.getElementById('name').value;
        var password = document.getElementById('password').value;
       
        if (name == ''||password == ''){
            alert('Enter the required fields!');
            return false;
        }


        else {
            $.ajax({
                url: '/userLogin',
                method: 'POST',
                data: JSON.stringify({
                    name : name,
                    password : password
                }),
                contentType: "application/json",
                dataType: "json",
                error: function(data) {
                    alert("Error submitting the form!LOL.");
                },
                success: function(data, status) {
                    alert(data.msg);
                    $('#name').val('');
                    $('#password').val('');
                }
            });
        }
    });


});
