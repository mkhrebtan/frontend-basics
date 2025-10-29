document.addEventListener('DOMContentLoaded', () => {
    const userContainer = document.getElementById('user-container');
    const fetchButton = document.getElementById('fetch-button');

    fetchButton.addEventListener('click', () => {
        fetch('https://randomuser.me/api')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                const user = data.results[0];
                const name = `${user.name.first} ${user.name.last}`;
                const picture = user.picture.large;
                const country = user.location.country;
                const postcode = user.location.postcode;
                const phone = user.phone;

                const userCard = document.createElement('div');
                userCard.classList.add('user-card');

                const userImage = document.createElement('img');
                userImage.src = picture;
                userImage.alt = `Photo of ${name}`;

                const userInfo = document.createElement('div');
                userInfo.classList.add('user-info');

                const userName = document.createElement('h2');
                userName.textContent = name;

                const userCountry = document.createElement('p');
                userCountry.textContent = `Country: ${country}`;

                const userPostcode = document.createElement('p');
                userPostcode.textContent = `Postcode: ${postcode}`;

                const userPhone = document.createElement('p');
                userPhone.textContent = `Phone: ${phone}`;

                userInfo.appendChild(userName);
                userInfo.appendChild(userCountry);
                userInfo.appendChild(userPostcode);
                userInfo.appendChild(userPhone);

                userCard.appendChild(userImage);
                userCard.appendChild(userInfo);

                userContainer.appendChild(userCard);
            })
            .catch(error => {
                console.error('There has been a problem with your fetch operation:', error);
                userContainer.textContent = 'Failed to load user data.';
            });
    });
});
