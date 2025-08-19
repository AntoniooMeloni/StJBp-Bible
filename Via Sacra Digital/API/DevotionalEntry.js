// JavaScript Example: Reading Entities
// Filterable fields: date, reflection, bible_verse, prayer_time_minutes, gratitude, prayer_intentions
async function fetchDevotionalEntryEntities() {
    const response = await fetch(`https://app.base44.com/api/apps/68a3cb7d7f79c93e97a4d538/entities/DevotionalEntry`, {
        headers: {
            'api_key': '008bf7c950294d1d8a1963789e4a91af', // or use await User.me() to get the API key
                                 'Content-Type': 'application/json'
        }
    });
    const data = await response.json();
    console.log(data);
}

// JavaScript Example: Updating an Entity
// Filterable fields: date, reflection, bible_verse, prayer_time_minutes, gratitude, prayer_intentions
async function updateDevotionalEntryEntity(entityId, updateData) {
    const response = await fetch(`https://app.base44.com/api/apps/68a3cb7d7f79c93e97a4d538/entities/DevotionalEntry/${entityId}`, {
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
