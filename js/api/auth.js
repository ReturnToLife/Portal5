
function	apiAuthLogin(login, password, callback_success, callback_error) {
    var f_success = function(auth) {
	$.cookie('auth_token', JSON.stringify(auth));
	callback_success(auth);
    };
    var f_error = function(errors) {
	callback_error(errors);
    };
    apiGo('auth', f_success, 'POST', { login: login, password: password }, f_error);
}

function	apiAuthLogout() {
    $.removeCookie('auth_token');
    window.location.replace("login");
    apiGo('auth/' + auth.token, function() {}, 'DELETE');
}

var global_auth = getAuth(true);

// Get the authentication object or "undefined" if you're not logged in
function	getAuth(from_cookie) {
    from_cookie = typeof from_cookie !== 'undefined' ? from_cookie : false; // default value
    if (from_cookie) {
	var tmp = $.cookie('auth_token');
	if (!tmp)
	    return undefined;
	global_auth = JSON.parse(tmp);
	global_auth.expiration = Date(global_auth.expiration);
    }
    return global_auth;
}

// Check if you're logged in or not
function	isLogged() {
    var auth = getAuth();
    return (typeof(auth) != 'undefined');
    return (typeof(auth) != 'undefined' // todo
	    && auth.expiration < (new Date()));
}
