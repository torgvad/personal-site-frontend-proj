function change_displayed_file(selected_file) {
	if (selected_file.includes("..") == false) {
		document.getElementById("file_display").data = selected_file;
	}
}
