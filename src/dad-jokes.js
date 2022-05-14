const getRandomJoke = require('./services/jokes');

const displayDadJokes = () => {
    getRandomJoke((res) => {
        if (res.type === 'success') {
            console.log(res.message);
        } else {
            console.log(res.message);
        }
    });
}

displayDadJokes();