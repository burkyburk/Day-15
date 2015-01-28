$(document).ready(onReady);

function onReady() {
	$('#searchbutton').on('click', onSearchButtonClick);

	
	function onSearchButtonClick() {
		imdbSearch($('#search-box').val());
		$('.created').html('');
	}	

	function imdbSearch(query)	{
		$.get(
			'http://www.omdbapi.com',
			{s: query,
				},
			onSearchResults, 
			'json'
			);
	}

	function onSearchResults(data){
		
		var i = 0;
		
		for(var key in data.Search)	{ 
			$('#results').append('<tr class="created"><td>'+data.Search[i].Title+'</td> <td>'+data.Search[i].Year+'</td><td>'+data.Search[i].Type+'</td></tr>');
			i++;
		}
	}

}