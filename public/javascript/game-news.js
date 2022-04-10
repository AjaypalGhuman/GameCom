var newsContainerEl = document.querySelector('#news-container');

var getNews = function(){

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': 'gaming-news.p.rapidapi.com',
            'X-RapidAPI-Key': 'bea6441369mshab3d42c1c56acf3p1a1f87jsn05ea68899e78'
        }
    };

    // fetch the api data for game news  and display it on the homepage of the blog

    fetch('https://gaming-news.p.rapidapi.com/news', options)
	.then(response => {
        if(response.ok){
            console.log(response);
            response.json().then( data => {
                console.log(data);
                displayNews(data);
            });
        }else {
            alert("Error: " + response.statusText);
        }        
    })	
    // displays alert that the api is unable to load
	.catch(err => {
        console.error(err);
        alert("Unable to connect to Gaming-News API");
    });
};

var displayNews = function(data){
    console.log(data);
    if (data.length === 0){
        newsContainerEl.textContent = "No News Found";
        return;
    }
    for (var i = 0; i < data.length; i++){
        //create a card element to hold the news info
        var newsCard = document.createElement('div');
        newsCard.classList = "card border-primary mb-3";

        // create a link for each new
        var newsUrl = document.createElement("a");
        newsUrl.classList = "card-header";
        newsUrl.setAttribute("href", data[i].url);
        newsUrl.setAttribute("target", "_blank");
        console.log(newsUrl);


        //create card-header element to hold the News's title
        var newsTitle = document.createElement("h5");
        //newsTitle.classList = "card-header";
        newsTitle.textContent = data[i].title;        
        console.log(newsTitle); 

        //append to container
        newsUrl.appendChild(newsTitle);    
               
        //create cardbody container
        var cardBody = document.createElement('div');
        cardBody.classList = "card-body text-primary";

        //create a card-body element to hold the source
        var newsSource = document.createElement("p");
        newsSource.classList = "text";
        newsSource.textContent = "Source:" + data[i].source;
        console.log(newsSource);

        cardBody.appendChild(newsSource);

        newsCard.appendChild(newsUrl); 
        newsCard.appendChild(cardBody);
        console.log(newsCard);

        newsContainerEl.append(newsCard);  
        console.log(newsContainerEl); 
        
    }
};

getNews();