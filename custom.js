$(function () {

    $("#clearButton").click(function () {
        $('#searching').val('');
    });

    $('#searchButton').click(function () {
       $.ajax({
           type: 'GET',
           url: 'https://api.themoviedb.org/3/search/multi',
           data: {'api_key': 'd272326e467344029e68e3c4ff0b4059', 'query': $('#searching').val()},
           success : function (data) {
               if(data.total_results == 0){
                   alert("There is no results!");
               } else {
                   let html = '<h2 style="color: darkred">Movie Data</h2>';
                   $.each(data.results, function (index, data) {
                       html += '<div class="card"><div class="card-header">' + data.title + '</div><div class="card-body">'
                           + '<h5 class="card-title">' + data.overview + '</h5>'
                           + '<p class="card-text">'
                           + '<p style="color: darkred"> Vote average: ' + data.vote_average + '</p>'
                           + '<table class="table">'
                           + '<thead>'
                           + '<tr>'
                           + '<th scope="col">Release Date</th>'
                           + '<th scope="col">Popularity</th>'
                           + '<th scope="col">Vote count</th>'
                           + '<th scope="col">Original language</th>'
                           + '</tr>'
                           + '</thead>'
                           + '<tbody>'
                           + '<tr>'
                           + '<th scope="row">' + data.release_date + '</th>'
                           + '<td>' + data.popularity + '</td>'
                           + '<td>' + data.vote_count + '</td>'
                           + '<td>' + data.original_language + '</td>'
                           + '</tr>'
                           + '</tbody></table>'
                           + '</p>'
                           + '</div>'
                           + '</div></br>';
                   })
                   $('.movieTables').html(html);
               }
           },
           error : function(error){
               console.log(error);
           }
       });
    });
});