
var apiURL = '/api/';

// Get a customized error that looks like the error you could get from the API (for generic purpose)
function	clientError(code, message) {
    return ([{error_code: code, error_msg: message}]);
}

// Some common clients error
var clientError_missing_parameter = clientError(7, "MISSING_PARAMETER");
var clientError_network = clientError(5, "NETWORK_ERROR");

// A function you can use to display the errors in cute boxes
function	apiDisplayError(errors, insideElt) {
    insideElt.empty();
    errors.map(function(error) {
	    var elt = ($("#hidden #infoboxes .alert-error").clone()).append("[" + error.error_code + "] " + error.error_msg)
	    insideElt.append(elt);
	    elt.show('fast');
	});
}

// Use this function to handle an API method
function        apiGo(url, callback_success, type, params, callback_error) {
    type = typeof type !== 'undefined' ? type : 'GET'; // default value
    params = typeof params !== 'undefined' ? params : {}; // default value
    callback_error = typeof callback_error !== 'undefined' ?
	callback_error : function() {}; // default value

    var done_wrapper = function() {
	$("content").show();
    };

    var success_wrapper = function(object, request) {
	if (typeof(object.errors) != 'undefined')
	    callback_error(object.errors);
	else
	    callback_success(object, request);
	done_wrapper();
    };

    var error_wrapper = function(event, request) {
	callback_error(clientError(event.status, event.statusText));
	done_wrapper();
    };

    var url = apiURL + url;
    console.log(url);
    console.log(params);

    $.ajax({
	    dataType: "json",
	    type: type,
	    url: url,
            data: params,
	    error: error_wrapper,
	    success: success_wrapper,
	    });
}
