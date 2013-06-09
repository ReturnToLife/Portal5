
///////////////////////////////////////////
// Set actions on the menu buttons
///////////////////////////////////////////

$(".button_logout").click(function(event) {
	event.preventDefault();
	apiAuthLogout();
    });


///////////////////////////////////////////
// Auto-resize the menu
///////////////////////////////////////////

function        getwidth() {
    return width = window.innerWidth
        || html.clientWidth
        || body.clientWidth
        || screen.availWidth;
}

function        getheight() {
    return height = window.innerHeight
        || html.clientHeight
        || body.clientHeight
        || screen.availHeight;
}

function        setheight() {
    $("#side").css('min-height', getheight());
}

function        fontsizefromwidth(width) {
    return (width/(130/1.2)) + 'em';
}

function        menusettings() {
    // display text on buttons or not?
    if ($("#menu").width() < 100) {
        $("#me nav").hide();
        $(".content").hide();
        $(".separator").hide();
        $(".button").width($(".button").height());
        $(".button").css('margin-left', ($("#menu").width() / 2) - ($(".button").outerWidth() / 2));
    } else {
        $("#me nav").show();
	$(".content").show();
        $(".separator").show();
        $(".button").width('');
        $(".button").css('margin-left', '');
    }
    // change button font
    var fontsize = fontsizefromwidth($(".button").width());
    $(".button").css('font-size', fontsize);
    $(".separator").css('font-size', fontsize);
}

function        resetsizes() {
    $(document).hide();
    setheight();
    menusettings();
    $(document).show();
    // at the very end, change the menu size
    $("#menu").css('min-height', $(document).height());
}

function        presetsizes() {
    window.onresize = resetsizes;
    resetsizes();
}

presetsizes();

///////////////////////////////////////////
// Turn on bootstrap features
///////////////////////////////////////////

function	presetbootstrapjs() {
    $(window).load(function() {
	    $('.badge-tooltip').tooltip({
		    html: true,
			});
	    $(".alert").prepend("<button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>");
	    $(".alert").alert();
	});
}

presetbootstrapjs();
