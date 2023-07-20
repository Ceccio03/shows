DBService.getAllShows().then(shows => console.log(shows));

const show1 = {
    "title": "rick and morty",
    "author": "justin roiland",
    "imageUrl": "https://fumettologica.it/wp-content/uploads/2023/01/rick-and-morty-670x377.jpg",
    "isOver": false,
    "upVotes": 1,
    "downVotes": 0,
    "id": "1"
}

show1.upVotes++;

updateShow(show1).then();