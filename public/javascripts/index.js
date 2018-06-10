 $(document).ready(function () {
    $(document).on('click', '#addNewUser', function (event) {
        event.preventDefault();
        var name = document.getElementById('name').value;
        var password = document.getElementById('password').value;
       
        if (name == ''||password == ''){
            alert('Enter the required fields!');
            return false;
        }


        else {
            $.ajax({
                url: '/addUser',
                method: 'POST',
                data: JSON.stringify({
                    name : name,
                    password : password
                }),
                contentType: "application/json",
                dataType: "json",
                error: function(data) {
                    alert("Error submitting the form!.");
                },
                success: function(data, status) {
                    alert(data.msg);
                    $('#name').val('');
                    $('#password').val('');
                }
            });
        }
    });
     $(document).on('click', '#login', function (event) {
        event.preventDefault();
        window.location.href = '/login';
    });

});
