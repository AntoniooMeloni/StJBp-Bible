// JavaScript Example: Reading Entities
// Filterable fields: name, content, category, audio_url
async function fetchPrayerEntities() {
    const response = await fetch(`https://app.base44.com/api/apps/68a3cb7d7f79c93e97a4d538/entities/Prayer`, {
        headers: {
            'api_key': '008bf7c950294d1d8a1963789e4a91af', // or use await User.me() to get the API key
                                 'Content-Type': 'application/json'
        }
    });
    const data = await response.json();
    console.log(data);
}

// JavaScript Example: Updating an Entity
// Filterable fields: name, content, category, audio_url
async function updatePrayerEntity(entityId, updateData) {
    const response = await fetch(`https://app.base44.com/api/apps/68a3cb7d7f79c93e97a4d538/entities/Prayer/${entityId}`, {
        method: 'PUT',
        headers: {
            'api_key': '008bf7c950294d1d8a1963789e4a91af', // or use await User.me() to get the API key
                                 'Content-Type': 'application/json'
        },
        body: JSON.stringify(updateData)
    });
    const data = await response.json();
    console.log(data);
}
