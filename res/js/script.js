let profiles = [];

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
        .then(function () {
            displayProfiles(profiles);
        })
        .catch(function () {
            alert('Error loading profiles info')
        });

});

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
            url: 'https://private-anon-6f9e84f7e6-wad20postit.apiary-mock.com/profiles',
            success: function (response) {
                return response;
            },
            error: function () {
                alert('error')
            }
        }
    );

}