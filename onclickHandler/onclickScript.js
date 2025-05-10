function onClickHandler(platform) {
    const userResponse = confirm(`Do you want to visit ${platform}?`);
    if (userResponse) {
        if (platform === 'Facebook') {
            window.location.href = 'https://www.facebook.com';
        } else if (platform === 'Instagram') {
            window.location.href = 'https://www.instagram.com';
        }
    }
}

// Example usage
document.getElementById('facebookButton').onclick = function() {
    onClickHandler('Facebook');
};

document.getElementById('instagramButton').onclick = function() {
    onClickHandler('Instagram');
};