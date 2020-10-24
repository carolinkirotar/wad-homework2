let profiles = null;

$(function () {

    $('.avatar-container').click(function () {
        $('#information-container').toggle();
    })

    $(".follow").click(function(){
        $(this).css("background-color","grey");
    });

    $(".like-button").click(function(){
        $(this).css("background-color","red");
    });

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

});

function displayProfilesInfo(profiles){
    $('.avatar1 #name1').text(profiles[0].firstname + " " + profiles[0].lastname)
    $('.profile #pic1').attr('src', profiles[0].avatar)

    $('.avatar1 #name2').text(profiles[1].firstname + " " + profiles[1].lastname)
    $('.profile #pic2').attr('src', profiles[1].avatar)

    $('.avatar1 #name3').text(profiles[2].firstname + " " + profiles[2].lastname)
    $('.profile #pic3').attr('src', profiles[2].avatar)

    $('.avatar1 #name4').text(profiles[3].firstname + " " + profiles[3].lastname)
    $('.profile #pic4').attr('src', profiles[3].avatar)
}

function displayUserInfo(user) {
    $('.avatar-container #user-name').text(user.firstname + " " + user.lastname)
    $('.avatar-container #email').text(user.email)
    $('.avatar-container .avatar').attr('src', user.avatar)
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
    return $.get (
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