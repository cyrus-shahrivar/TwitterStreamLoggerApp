var Twit = require('twit');


// XXX: HIDE your secrets before saving to git
var T = new Twit({
  consumer_key:         process.env.TWITTER_CONSUMER_KEY,
  consumer_secret:      process.env.TWITTER_CONSUMER_SECRET,
  access_token:         process.env.TWITTER_ACCESS_TOKEN,
  access_token_secret:  process.env.TWITTER_ACCESS_SECRET,
  timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
});

var stream = T.stream('statuses/filter', {track: 'cats'})

var arrayOfStamps = [];

stream.on('tweet', function (tweet) {
  var filteredBody = {
    time: tweet.timestamp_ms,
    text: tweet.text,
    location: tweet.user.location
  };

  arrayOfStamps.push(filteredBody);
  console.log(filteredBody);
})
