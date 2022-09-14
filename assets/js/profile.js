const profileStories = document.querySelector('.profile-stories'),
      profilePublications = document.querySelector('.profile-publications'),
      profileStoriesBtn = document.querySelector('.profile-stories__btn'),
      profilePublicationsBtn = document.querySelector('.profile-publications__btn');



profileStoriesBtn.addEventListener('click', () => {
    profileStoriesBtn.classList.add('active_btn');
    profilePublicationsBtn.classList.remove('active_btn');
    profileStories.classList.remove('d-none');
    profilePublications.classList.add('d-none');
});
profilePublicationsBtn.addEventListener('click', () => {
    profileStoriesBtn.classList.remove('active_btn');
    profilePublicationsBtn.classList.add('active_btn');
    profileStories.classList.add('d-none');
    profilePublications.classList.remove('d-none');
});



