let profiles = null;
let posts = null;
$(function () {
    $('.avatar-container').click(function () {
        $('#information-container').toggle();
    })
    loadUserInfo()
        .then(function (user) {
            displayUserInfo(user)
        })
        .catch(function () {
            alert('Error loading user info')
        });
    loadProfilesInfo()
        .then(function (profiles) {
            displayProfilesInfo(profiles);
        })
        .catch(function () {
            alert('Error loading profiles info')
        });
    loadPostsInfo()
        .then(function (posts) {
            displayPostsInfo(posts)
        })
        .catch(function () {
            alert('Error loading post info')
        });
});
function displayProfilesInfo(profiles){
    $.each(profiles, function (i, profiles){
        let name = profiles.firstname + " " + profiles.lastname
        let url = profiles.avatar
        $('.profile').append(
            '<div class="avatar1">\n' +
            '            <img src="' + url + '" alt = "" class="profile-img" id="pic1">\n' +
            '            <p>' + name + '</p>\n' +
            '            <button class="follow"> Follow </button>\n' +
            '        </div>'
        )
        $(".follow").click(function(){
            $(this).css("background-color","grey");
        });
    })
}
function displayUserInfo(user) {
    $('.avatar-container #user-name').text(user.firstname + " " + user.lastname)
    $('.avatar-container #email').text(user.email)
    $('.avatar-container .avatar').attr('src', user.avatar)
}
function displayPostsInfo(posts) {
    $.each(posts, function (i, posts){
        let postText = ""
        if (posts.text !== null){
            postText = posts.text
        }
        let createTime = posts.createTime
        let likes = posts.likes
        let authorPicture = posts.author.avatar
        let authorName = posts.author.firstname + " " + posts.author.lastname
        let mediaUrl = ""
        if (posts.media && posts.media.type) {
            if (posts.media.type === 'image') {
                mediaUrl = '<img src="' + posts.media.url + '"alt = ""'
            }
            if (posts.media.type === 'video') {
                mediaUrl = '<video controls> <source src="' + posts.media.url +  '" type="video/mp4"> </video>'
            }
        }
        $('.main-container').append(
            '<div class="post">\n' +
            '        <div class="post-author">\n' +
            '          <span class="post-author-info">\n' +
            '            <img src="' + authorPicture + '" alt="Post author">\n' +
            '            <small>' + authorName + '</small>\n' +
            '          </span>\n' +
            '          <small>' + createTime + '</small>\n' +
            '        </div>' +
            '<div class="post-image">\n' + mediaUrl +
            '        </div>\n' +
            '        <div class="post-title">\n' +
            '          <h3>' + postText + '</h3>\n' +
            '        </div>\n' +
            '        <div class="post-actions">\n' +
            '          <button type="button" name="like" class="like-button"> ' + likes + '</button>\n' +
            '        </div>\n' +
            '      </div>'
        )
    })
    $(".like-button").click(function(){
        $(this).css("background-color","red");
    })
}
function loadUserInfo() {
    return $.get (
        {
            url: 'https://private-anon-6f9e84f7e6-wad20postit.apiary-mock.com/users/1',
            success: function (response) {
                return response;
            },
            error: function () {
                alert('error')
            }
        }
    );
}
function loadProfilesInfo() {
    return $.get(
        {
            url: 'https://private-anon-118a285ef7-wad20postit.apiary-mock.com/profiles',
            success: function (response) {
                return response;
            },
            error: function () {
                alert('error')
            }
        }
    );
}
function loadPostsInfo() {
    return $.get (
        {
            url: 'https://private-anon-22c2470044-wad20postit.apiary-mock.com/posts',
            success: function (response) {
                return response;
            },
            error: function () {
                alert('error')
            }
        }
    );
}