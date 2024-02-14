var c = 0;

var when = ["let me rest my head on your shoulder", "remember me", "carry the world in your hands", "intertwine your fingers with mine", "offer to take out the trash for me", "go to sleep with me", "listen to me as I talk senseless", "call me new names", "can't wait to share your day with me", "succeed", "smile", "create new things with me", "send me articles you know I'd like", "let your soul shine in what you do", "help others without being asked", "remind me of the chores I need to do", "are with me", "send me something that made you smile", "tuck a piece of your hair behind your ear", "know exactly what to say", "look at me in silence and just see", "are there for me", "loved me, without me asking", "tell me about what you believe in, including me", "carry the light in you", "stumble drunk into my arms", "zone out on the couch with me", "stay with me at the book store for hours", "are honest when you don't know what to say", "sit with me to share your morning coffee", "get the best deals on Facebook marketplace", "do a tiny dance when you're happy", "take pictures of the sky", "look through your camera roll", "tell me about the birds you see", "tag me in memes", "show me that there is always light", "speak, and say 'i love you' so many times without even knowing", "fill myself and other people with love, almost effortlessly", "teach me how to ski", "make goals for our life together", "live aligned with your values", "go to Hawaii with me and drink cocktails on the beach", "feel good about yourself", "bring me along", "invite me explicitly to every little thing", "trust that I can carry this world with you", "mix me drinks", "introduce me to new candy you loved when you were a child", "wait for me", "tell other people about me &mdash; and the love that comes through indirectly", "are loved by all your friends", "defy expectations every single day", "think of yourself as unproductive, listless, lazy – the complete opposite of all these things", "point out all the beautiful houses you'd like to live in one day", "squeeze my hand tighter to nudge me", "say hello to your friends on the phone", "check in on me", "are conscious of me", "hug me and smell like the sun and vanilla", "follow through with all the plans and promises we have", "make me feel all this love, even from a distance", "try to imitate the birdsong", "pull me back in for a little longer when we're about to say goodbye", "send me unsolicited anythings (they are always welcome)", "reveal a secret Spotify playlist you've hidden from your profile", "rewatch the LOTR with me", "send me naughty texts when I'm away", "always seem to have everything we need in your bag", "make dinner for us", "ask ChatGPT about random questions that come to my mind when we're together", "respond to my chaos with your own chaos", "send me voice memos of the world that you know I love", "humor my curiosity", "spot my Twitter memes", "send me things that make you think of me", "tag me and say 'us'", "tell me what a word means", "tell me the lyric that <em>really</em> struck you from the recommendation I sent", "watch those four hour YouTube video essays", "are loving life", "hold the door open for me", "stay hydrated", "tell me about what you were like when you were younger", "buy books for me", "shape me as I shape you", "rank your favorite punctuation marks", "mix the lemon and gin like you're concocting the world's fanciest cocktail", "favorite my shittiest tweets", "make me disregard every prophecy, every warning", "mince the garlic for me", "help me finish the food on my plate", "save quotes that you enjoy and recite them back to me", "prod me about all your book recommendations", "help show me that no bad thing is actually bad", "jump on new hyperfixations", "pause in conversation until you can get your thoughts together", "have your voice shift a little as you speak to me &mdash; and only me", "just know how to sense when I am grieving, and give me the space I need to mourn", "tell me that I can do anything", "talk so deeply and lucidly about the things you care about", "have your influences slowly become mine and vice-versa", "let your body crash into mine", "collapse unto me on the couch", "tell me about your day", "sit with me in silence", "offer to fight other people for me", "get excited about something new", "get angry at movie trailers that spoil too much", "get a bit too tipsy at a bar", "look up the restaurant menu and reviews before we get to the place and advise us on exactly what to get", "are able to comprehend NYC subway directions", "share pieces of your heart with me", "give me love and tell me that it's mine to keep", "are present in any form", "tell me about all your wins, tiny or huge", "quote me on something I've written and forgotten", "know me more than I know myself", "change my view of what love means", "have made me understand parts of this world that I thought I never would", "mark my long-term goals", "send me pictures of what the sky looks like, where you are right now", "show me random things you got at the thrift", "read Mary Oliver with me in spring", "share your tent with me", "cook chilli while camping", "are near me", "let me take the aux cord even if I play the same songs over and over", "share your appetizers with me", "send me something even if you think I've already seen it", "stay up late with me", "make me commit to plans months in the future so you know I won't disappear", "tell me about how other people have loved you, too", "send me nudes", "read inexplicably long essays and discuss those with me", "go on road trips with me in winter (even when we know it's a bad idea)", "and I are the only ones dancing at the party", "look at me in a crowd like you can only see me", "loudly exclaim that you need to go take a piss", "ask me if I wanna hold hands pancake or waffle style", "hike up the mountains and tell me stories", "tell me stories that I've heard a dozen times (and I want to hear them again and again)", "show me your Spotify Wrapped", "tell me about the lines that stood out to you most", "explain your country's political state to me", "look back at me as I drop you off", "feel whole surrounded by the people you love", "trust me with your fears", "sit with me as we attempt to decipher ourselves", "tell me about all the art you make, or want to make, or are trying to make", "bring me the best croissants in Denver", "find new parts of yourself", "send me the link to a show you want to attend with me", "are yourself", "touch me and help me feel that I am real", "run up to hug me even if we've just seen each other hours ago", "tell me about your family", "show me your plans", "are passionate about abortion care for underserved communities", "tell me about the family that you want", "try to dissect why you love the way you do", "soak in influences with me", "tell me about your crazy dreams", "save the best parts of the snack for me", "can sense that something's wrong, you know me", "look at me intently as you play a questionably humorous video, waiting for validation of some form", "tell me that you know me (and actually do)", "witness that we're becoming something greater", "make me playlists", "always come back to me", "make me feel secure instead of desperate", "start liking turmeric drinks", "wear your grandmother's clothes", "go on walks that change our way of looking at the world", "sit with me", "embrace the most banal parts of life with me", "wear sunscreen and remind me to do so too", "know which days are hardest, stand with me through it all", "build furniture with me"];


function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

// shuffle on start
document.addEventListener("DOMContentLoaded", function() {
  shuffle(when);
});


document.addEventListener('click', function (e) {

  if (e.button == 0) {

    var newParagraph = document.createElement("p");
    var textNode = document.createTextNode(when[c]);
    newParagraph.appendChild(textNode);
    newParagraph.style.display = "none";
    document.querySelector("#when-you").prepend(newParagraph);
    $(newParagraph).fadeIn(2000);

    c++;

    if (c == when.length) {

      var finalParagraph = document.createElement("p");
      var finalTextNode = document.createTextNode("love me too ");
      finalParagraph.appendChild(finalTextNode);
      finalParagraph.style.display = "none";
      document.querySelector("#when-you").prepend(finalParagraph);
      $(finalParagraph).fadeIn(2000);

      document.querySelector("body").style.background = '#000';
      document.querySelectorAll("#g p").forEach(function(p) {
        p.style.color = '#fff';
      });

      document.removeEventListener('click', arguments.callee);

    }

  }
});
