function active(){
	let searchBar = document.getElementById('searchBar');
	if(searchBar.value == 'Search...'){
		searchBar.value = ''
		searchBar.placeholder = 'Search...'
	}
}
function inactive(){
	let searchBar = document.getElementById('searchBar');
	if(searchBar.value == ''){
		searchBar.value = 'Search...'
		searchBar.placeholder = ''
	}
}