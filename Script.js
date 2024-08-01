// $(document).ready(function() {
//   $('#loginForm').on('submit', function(event) {
//     event.preventDefault();
//
//     const email = $('#email').val();
//     const password = $('#password').val();
//
//     $.post('/login', { email: email, password: password }, function(data) {
//       console.log("Hello")
//       if (data.valid) {
//         alert('Login successful!');
//
//         window.location.href = '/account';
//       } else {
//         alert('Login failed. Please check your credentials.');
//       }
//     });
//   });
// });


    $(() => {
        $("#submitButton").click(function(ev) {
            let form = $("#formId");
            let url = form.attr('action');
            $.ajax({
                type: "POST",
                url: url,
                data: form.serialize(),
                success: function(data) {
                    console.log("succ")
                    // Ajax call completed successfully
                    alert("Form Submited Successfully");
                },
                error: function(data) {


                    alert("some Error");
                }
            });
        });
    });