function loadHomePage() {
	$.ajax({
		url: "./pages/home.html",
		success: function (result) {
			$("#body").html(result);
		},
	});
}

loadHomePage();
