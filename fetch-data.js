// Step 1: Define an async function to fetch and display user data
async function fetchUserData() {
    // Step 2: Define the API URL
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';

    // Step 3: Select the HTML element where data will go
    const dataContainer = document.getElementById('api-data');

    try {
        // Step 4: Fetch the data and convert it to JSON
        const response = await fetch(apiUrl);
        const users = await response.json();

        // Step 5: Clear the "Loading..." message
        dataContainer.innerHTML = '';

        // Step 6: Create a list and populate it with user names
        const userList = document.createElement('ul');

        users.forEach(user => {
            const listItem = document.createElement('li');
            listItem.textContent = user.name;
            userList.appendChild(listItem);
        });

        // Add the list to the page
        dataContainer.appendChild(userList);

    } catch (error) {
        // Step 7: Handle any errors
        dataContainer.innerHTML = 'Failed to load user data.';
        console.error('Error fetching user data:', error);
    }
}

// Step 8: Run the function when the page is fully loaded
document.addEventListener('DOMContentLoaded', fetchUserData);
