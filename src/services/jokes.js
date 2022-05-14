const https = require('https');

const getRandomJoke = (_callback) => {
    https.get('https://icanhazdadjoke.com/', res => {
        let data = '';

        res.on('data', chunk => {
            data += chunk;
        });
        res.on('end', () => {
            if (res.statusCode === 200) {
                const idx = data.indexOf('<p class="subtitle">');
                const jokeWithHTMLTags = data.substring(idx, data.indexOf('</p>', idx));
                const jokeTextContent = jokeWithHTMLTags.replace(/<[^>]+>/g, '');

                _callback({type: 'success', message: jokeTextContent });
            } else {
                _callback({type: 'error', message: res.statusCode });
            }
        });
    }).on('error', err => {
       _callback({ type: 'error', message: err.message });
    });
}

module.exports = getRandomJoke;