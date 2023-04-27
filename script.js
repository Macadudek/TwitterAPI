
const user1 = {
    userName: '@elonmusk',
    tweetsCount: 13600,
    displayName: 'Elon Musk',
    joinedDate: 'June 2009',
    followingCount: 103,
    followerCount: 47900000,
    avatarURL: 'elonmusk.jpg',
    coverPhotoURL: 'elonmusk-cover.jpeg',
    tweets: [
        {
            text: 'I admit to judging books by their cover',
            timestamp: '2/10/2021 00:01:20'
        },
        {
            text: 'Starship to the moon',
            timestamp: '2/09/2021 18:37:12'
        },
        {
            text: 'Out on launch pad, engine swap underway',
            timestamp: '2/09/2021 12:11:51'
        },
        {
            text: 'Verified accounts are now prioritized',
            timestamp: '4/25/2023 12:11:51'
        }
    ]
};

const user2 = {
    userName: '@BillGates',
    tweetsCount: 9800,
    displayName: 'Bill Gates',
    joinedDate: 'June 2009',
    followingCount: 274,
    followerCount: 53800000,
    avatarURL: 'billgates.jpg',
    coverPhotoURL: 'billgates-cover.jpeg',
    tweets: [
        {
            text: 'Everybody asks, how is the next Windows coming along? But nobody asks how is Bill? :/',
            timestamp: '2/10/2021 00:01:20'
        },
        {
            text: 'Should I start tweeting memes? Let me know in a comment.',
            timestamp: '2/09/2021 18:37:12'
        },
        {
            text: 'In 2020, I read a book every hour.',
            timestamp: '2/09/2021 12:11:51'
        },
        {
            text: 'Everyone should benefit from artificial intelligence, and not just people in rich countries. This is the priority for my own work.',
            timestamp: '3/21/2023 12:11:51'
        }
    ]
};


const urlParams = new URLSearchParams(location.search);
let userInt = 0;

 // function to change URL to user 1
const userElon = function() {
    const urlParams = new URLSearchParams();
    urlParams.set("user", "user1");
    console.log(urlParams);
    window.location.href = "http://127.0.0.1:5500/index.html?" + urlParams.toString();
};

// function to change URL to user 2
const userBill = function() {
    const urlParams = new URLSearchParams();
    urlParams.set("user", "user2");
    console.log(urlParams);
    window.location.href = "http://127.0.0.1:5500/index.html?" + urlParams.toString();
};

// display Bill by default, Elon if user=user1
if(urlParams.toLocaleString() == "user=user1"){
    userInt = 0;
} else {
    userInt = 1;
};



// declare variables

const users = [user1, user2];
const container = document.querySelector('.container');




    container.innerHTML = `
            <div class="top-bar">
                <i class="fa-solid fa-arrow-left"></i>
                <div class="user-info">
                    <div class="user-name">
                        <h5>${users[userInt].userName}</h5>
                        <i class="fa-solid fa-square-check"></i>
                    </div>
                    <p>${(+users[userInt].tweetsCount / 1000).toFixed(1)}K Tweets</p>
                </div>
            </div>
            <div class="background-image" style="background-image: url('${users[userInt].coverPhotoURL}');"></div>
            <div class="profile-img-container" >
                <div class="profile-img" style="background-image: url('${users[userInt].avatarURL}');"></div>
                <button class="follow-btn">Following</button>
            </div>
            <div class="profile-bio">
                <div class="user-name-parent">
                    <div class="user-name">
                        <h5>${users[userInt].displayName}</h5>
                        <i class="fa-solid fa-square-check"></i><br>
                    </div>
                    <p>${users[userInt].userName}</p>
                </div>
                <span><i class="fa-solid fa-calendar-days"></i> Joined ${users[userInt].joinedDate} </span>
                <div class="followers-counts">
                    <span><strong>${users[userInt].followingCount}</strong> Following</span>
                    <span><strong>${(+users[userInt].followerCount / 1000000).toFixed(1)}</strong>M Followers</span>
                </div>
            </div>
            `


// Animated tab selector for feed display types

const feedSelectorBar = document.createElement('div')
feedSelectorBar.classList.add('feed-selector-bar')
feedSelectorBar.innerHTML = `
<p class='tab'>Tweets</p>
<p class='tab'>Tweets & replies</p>
<p class='tab'>Media</p>
<p class='tab'>Likes</p>
`
container.appendChild(feedSelectorBar)

const tabs = document.getElementsByClassName('tab')

Array.from(tabs).forEach((tab) => {
  tab.addEventListener('click', (e) => {
    Array.from(tabs).forEach(tab => tab.classList.remove('active'))
  tab.classList.add('active')
  })
})


// Function that creates tweets

users[userInt].tweets.forEach(function(_, i) {
    
    const tweetsContainer = document.createElement('div')
    tweetsContainer.classList.add('tweets-container')

    tweetsContainer.innerHTML = `
    <div class="tweet">
        <div class="profile-icon" style="background-image: url('${users[userInt].avatarURL}');">
        </div>
        <div class="tweet-content">
            <div class="user-name">
                <h5>${users[userInt].displayName}</h5>
                <i class="fa-solid fa-square-check"></i><br>
                <p>${users[userInt].userName}</p>
                <span>${users[userInt].tweets[i].timestamp.slice(0, 9)}</span>
            </div>
            ${users[userInt].tweets[i].text}
            <div class="tweet-icons-container">
                <div class="tweet-icons">
                    <i class="fa-regular fa-comment"></i>
                    <span></span>
                </div>
                <div class="tweet-icons">
                    <i class="fa-solid fa-retweet"></i>
                    <span></span>
                </div>
                <div class="tweet-icons">
                    <i class="fa-regular fa-heart"></i>
                    <span></span>
                </div>
                <i class="fa-solid fa-arrow-up-from-bracket"></i>
            </div>
        </div>
        <div class="tweet-setting-dots">
            <i class="fa-solid fa-ellipsis tweet-dots-icon"></i>
        </div>
    </div>
`
container.appendChild(tweetsContainer)
})





// Event listener to change between user1(Elon) user2(Bill)

const elonBtn = document.querySelector('#elonbtn')
elonBtn.addEventListener('click', userElon)

const billBtn = document.querySelector('#billbtn')
billBtn.addEventListener('click', userBill)