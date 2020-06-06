let dropdown = $('#topic-drop');
dropdown.empty();
const url = 'data/list.json';
$.getJSON(url, function (data) {
$.each(data, function (key, entry) {
dropdown.append($('<option></option>').attr('value', entry.abbreviation).text(entry.name));
 })
	});

$(document).on("keydown", "form", function(event) { 
    return event.key != "Enter";
});           
	
