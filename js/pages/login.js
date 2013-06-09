
function	login_form(event) {
    event.preventDefault();
    var login = $("form #login").val();
    var password = $("form #password").val();
    if (!login || !password) {
	apiDisplayError(clientError_missing_parameter,
			$("#login_form_result"));
	return ;
    }
    var f_success = function(auth) {
        window.location.replace("/");
    }
    var f_error = function(errors) {
	apiDisplayError(errors, $("#login_form_result"));
    }
    apiAuthLogin(login, password, f_success, f_error);
}

function	presetbootstrapjs() {
    $(window).load(function() {
	    $(".alert").prepend("<button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>");
	    $(".alert").alert();
	});
}

$("#login_submit").click(login_form);
presetbootstrapjs();
