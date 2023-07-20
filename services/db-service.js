class DBService {
    static getAllShows() {
        const url = 'https://64b7ae3421b9aa6eb078ca81.mockapi.io/shows';

        return fetch(url).then((resp) => resp.json());
    }

    static updateShow(show) {
        const updateUrl = 'https://64b7ae3421b9aa6eb078ca81.mockapi.io/shows/' + show.id;

        return fetch(updateUrl, {
            method: "put",
            body: JSON.stringify(show),
            headers: {"content-type": "application/json"},
        }).then((resp) => resp.json());
    }

    static upvote(show) {
        show.upVotes++;

        return this.updateShow(show);
    }

    static downvote(show) {
        show.downVotes++;
        
        return this.updateShow(show);
    }
}