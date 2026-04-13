const things_i_like = [
    "How easily you meet new people and make friends - because I sure as hell can't",
    "How chill you are with your family",
    "How you manage to grind out amazing writing in just a couple hours - and apparently that's your 'not that great'???",
    "How much you love cats",
    "How much cats love you",
    "How you always offer up help no matter who asks or what the ask is",
    "How you always humour me and whatever dumb jokes I make",
    "How you always patiently listen to me ramble about gaming or AI or work or courses or whatever",
    "How you always look around and send me reels to improve my style",
    "How you always send me cute reels of cats or us",
    "The way you laugh when I tell you a joke, or the other way you laugh when you've done something silly, or the other laugh when you're thinking of something cutely evil <3",
    "The way you swim so fast through the water with grace",
    "The way you make me smile and with your jokes (and your silliness)",
    "The way you talk about us and our future and things you wanna do with me",
    "The way you don't care about anything except right and wrong",
    "The way you care for those around you no matter what's going on or what you're doing",
    "Your drive and competitiveness - its hot",
    "Your disrespect towards deserving people and things - like narcissists, or mansplainers, or gatekeepers, or whatever all-in-1 nutcase you had to deal with that Tuesday night",
    "How much your friends love you - despite asking me 'why her?' and pitying me or whatever 😂",
    "How your friends always agree with me when I say nice things about you - because I'm right about youuu",
    "How much you love love - makes me happy that I'm with such a sweet person",
    "How you've helped so many people in everything from studies to career to life to relationships... everything",
    "How you always try to make people happy no matter what your own mood is",
    "How selfless you are",
    "How cute you are with your friends - how you fawn over Marjorie, how you talk about Shaivi or Jess like they're your sisters, how you talk to or about your 'wives'...",
    "Your appreciation for cuteness and adorable things and people",
    "Your knowledge about food and drinks of all kinds",
    "Your independence",
    "Your strength - physical, mental, and emotional",
    "Your wit and sense of humour - even if its a bit dark sometimes",
    "Your softness with those who need it",
    "Your love of exploring and trying new things out",
    "Your ability to deal with pressure - no matter how many expletives you throw in response haha",
    "Your attention to detail with me and with everyone around you",
    "How well you know the people around you and the people that matter to you",
    "How you always put in maximum effort for your people",
    "How you never give up on a thing you want to do",
    "How well you're able to assess situations of any kind - social, emotional, professional...",
    "Your singing (yes I've heard it a few times and I genuinely love it)",
    "Your voice in general - how sweet it sounds and how it puts me at peace",
    "The way you say 'I love you' and 'I ammm' and 'That's meee' - its so cuteee and makes me warm and happy",
    "How you're always up for anything I wanna do with you no matter how random it is",
    "How sweetly you hold me in your arms when I wanna rest or nap",
    "How you never give up on other people - unless they push you too far of course",
    "How you "
];

document.addEventListener("DOMContentLoaded", function () {
    const list_of_likes = document.getElementById("things-i-like");
    things_i_like.forEach(thing => {
        console.log(thing);
        const like_item = document.createElement("li");
        like_item.textContent = thing;
        list_of_likes.appendChild(like_item);
    })
})