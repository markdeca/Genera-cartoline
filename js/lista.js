let dropdown = $('#topic-drop');
dropdown.empty();
const url = 'data/list.json';
$.getJSON(url, function (data) {
$.each(data, function (key, entry) {
dropdown.append($('<option></option>').attr('value', entry.abbreviation).text(entry.name));
 })
	});           
	
