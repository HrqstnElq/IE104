loadHomePage();

function loadHomePage() {
	$.ajax({
		url: "./pages/home.html",
		success: function (result) {
			$("#body").html(result);
		},
	});
}

function loadBXHpage() {
	$.ajax({
		url: "./pages/bxh.html",
		success: function (result) {
			$("#body").html(result);
		},
	});
}
