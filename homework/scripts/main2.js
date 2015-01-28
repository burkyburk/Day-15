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

	function onSearchResults(data) {
		console.log(data);
		var i = 0;
		var rowTemplate = _.template('<tr class="created"> <td> <%= Title %> </td> <td><%= Year %> </td> <td> <%= Type %> </td> </tr>');
		for(var key in data.Search)	{ 
			
			i++;

			$('#results').append(rowTemplate(data.Search[i]));

			$('.created').on('click', addToWatchList);


			function addToWatchList() {
				$(this).appendTo($('#watchlist'));
				console.log('you click me');
			}

			$('#watchlist').on('click', addToWatchedList);


			function addToWatchedList() {
				$(this).appendTo($('#watched'));
				console.log('you clicked me');
			}
						 
		}	
			

		
		

	}

}
		
