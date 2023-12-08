const RecommendedData = [
    {
        id: 'FD1',
        name: 'Eiffel Tower',
        category: 'City',
        description: `The iconic Eiffel Tower in Paris, France, is a symbol of romance and architectural brilliance. Enjoy breathtaking views of the city from its observation decks.`,
        region: 'Europe',
        imagelink_square: require('../assets/places_assets/Eiffel_Tower/p2/Eiffel_Tower.png'),
        imagelink_portrait: require('../assets/places_assets/Eiffel_Tower/p1/Eiffel_Tower.png'),
        activities: ['Observation Deck Visit', 'River Seine Cruise', 'Champ de Mars Picnic'],
        averageRating: 4.9,
        ratingsCount: '12,540',
        favorite: false,
        index: 0,
        type: 'Recommend',
        accommodations: [
            {
                id: 'A1', name: 'Luxury Hotel', room: [
                    { size: 'S', price: '$60', quantity: 0 },
                    { size: 'M', price: '$80', quantity: 0 },
                    { size: 'L', price: '$100', quantity: 0 },
                ],
                imagelink_square: require('../assets/places_assets/hotels/p2/hotels.png'),
            },
            {
                id: 'A2', name: 'Boutique Inn', room: [
                    { size: 'S', price: '$60', quantity: 0 },
                    { size: 'M', price: '$80', quantity: 0 },
                ],
                imagelink_square: require('../assets/places_assets/hotels/p2/hotels.png'),
            },
        ],
    },
    {
        id: 'FD2',
        name: 'Great Barrier Reef',
        category: 'Beach',
        description: `The Great Barrier Reef in Australia is the world's largest coral reef system, offering stunning underwater biodiversity and vibrant marine life.`,
        region: 'Oceania',
        imagelink_square: require('../assets/recommend_assets/bora/p2/bora.png'),
        imagelink_portrait: require('../assets/recommend_assets/bora/p1/bora.png'),
        activities: ['Snorkeling Adventure', 'Scuba Diving', 'Island Exploration'],
        averageRating: 4.8,
        ratingsCount: '10,732',
        favorite: false,
        index: 1,
        type: 'Recommend',
        accommodations: [
            {
                id: 'A3', name: 'Beach Resort', room: [
                    { size: 'S', price: '$60', quantity: 0 },
                    { size: 'M', price: '$80', quantity: 0 },
                    { size: 'L', price: '$100', quantity: 0 },
                ],
                imagelink_square: require('../assets/places_assets/hotels/p2/hotels.png'),
            },
            {
                id: 'A4', name: 'Cozy Bungalow', room: [
                    { size: 'S', price: '$60', quantity: 0 },
                    { size: 'M', price: '$80', quantity: 0 },
                    { size: 'L', price: '$100', quantity: 0 },
                ],
                imagelink_square: require('../assets/places_assets/hotels/p2/hotels.png'),
            },
        ],
    },
    {
        id: 'FD3',
        name: 'Machu Picchu',
        category: 'Mountain',
        description: `Machu Picchu in Peru is an ancient Incan citadel nestled in the Andes Mountains. Explore its archaeological wonders and enjoy panoramic views of the surrounding landscape.`,
        region: 'South America',
        imagelink_square: require('../assets/recommend_assets/Eiffel_Tower/p2/Eiffel_Tower.png'),
        imagelink_portrait: require('../assets/recommend_assets/Eiffel_Tower/p1/Eiffel_Tower.png'),
        activities: ['Inca Trail Trek', 'Historical Tours', 'Sunrise at Machu Picchu'],
        averageRating: 4.7,
        ratingsCount: '9,865',
        favorite: false,
        index: 2,
        type: 'Recommend',
        accommodations: [
            {
                id: 'A5', name: 'Mountain Lodge', room: [
                    { size: 'S', price: '$60', quantity: 0 },
                    { size: 'M', price: '$80', quantity: 0 },
                    { size: 'L', price: '$100', quantity: 0 },
                ],
                imagelink_square: require('../assets/places_assets/hotels/p2/hotels.png'),
            },
            {
                id: 'A6', name: 'Cabin Getaway', room: [
                    { size: 'S', price: '$60', quantity: 0 },
                    { size: 'M', price: '$80', quantity: 0 },
                    { size: 'L', price: '$100', quantity: 0 },
                ],
                imagelink_square: require('../assets/places_assets/hotels/p2/hotels.png'),
            },
        ],
    },
    {
        id: 'FD4',
        name: 'Grand Canyon',
        category: 'Nature',
        description: `The Grand Canyon in the USA is a breathtaking natural wonder known for its vast canyons and stunning rock formations. Experience the beauty of this geological marvel.`,
        region: 'North America',
        imagelink_square: require('../assets/recommend_assets/Golden_Gate/p2/Golden_Gate.png'),
        imagelink_portrait: require('../assets/recommend_assets/Golden_Gate/p1/Golden_Gate.png'),
        activities: ['Hiking Trails', 'Helicopter Tours', 'Colorado River Rafting'],
        averageRating: 4.8,
        ratingsCount: '11,249',
        favorite: false,
        index: 3,
        type: 'Recommend',
        accommodations: [
            {
                id: 'A7', name: 'Heritage Hotel', room: [
                    { size: 'S', price: '$60', quantity: 0 },
                    { size: 'M', price: '$80', quantity: 0 },
                    { size: 'L', price: '$100', quantity: 0 },
                ],
                imagelink_square: require('../assets/places_assets/hotels/p2/hotels.png'),
            },
            {
                id: 'A8', name: 'Charming Guesthouse', room: [
                    { size: 'S', price: '$60', quantity: 0 },
                    { size: 'M', price: '$80', quantity: 0 },
                    { size: 'L', price: '$100', quantity: 0 },
                ],
                imagelink_square: require('../assets/places_assets/hotels/p2/hotels.png'),
            },
        ],
    },
    {
        id: 'FD5',
        name: 'The Colosseum',
        category: 'Cultural',
        description: `The Colosseum in Rome, Italy, is a historic amphitheater that hosted gladiatorial contests. Explore its ancient architecture and learn about the rich history of the Roman Empire.`,
        region: 'Europe',
        imagelink_square: require('../assets/places_assets/Acropolis/p2/Acropolis.png'),
        imagelink_portrait: require('../assets/places_assets/Acropolis/p1/Acropolis.png'),
        activities: ['Colosseum Tour', 'Roman Forum Visit', 'Historical Walking Tour'],
        averageRating: 4.9,
        ratingsCount: '13,178',
        favorite: false,
        index: 4,
        type: 'Recommend',
        accommodations: [
            {
                id: 'A9', name: 'Cottage by the Lake', room: [
                    { size: 'S', price: '$60', quantity: 0 },
                    { size: 'M', price: '$80', quantity: 0 },
                    { size: 'L', price: '$100', quantity: 0 },
                ],
                imagelink_square: require('../assets/places_assets/hotels/p2/hotels.png'),
            },
            {
                id: 'A10', name: 'Wilderness Cabin', room: [
                    { size: 'S', price: '$60', quantity: 0 },
                    { size: 'M', price: '$80', quantity: 0 },
                    { size: 'L', price: '$100', quantity: 0 },
                ],
                imagelink_square: require('../assets/places_assets/hotels/p2/hotels.png'),
            },
        ],
    },
];

export default RecommendedData;
