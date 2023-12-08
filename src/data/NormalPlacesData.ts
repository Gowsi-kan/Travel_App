const PlacesData = [
    {
        id: 'D1',
        name: 'City of Lights',
        category: 'City',
        description: `Explore the enchanting City of Lights with its iconic landmarks, world-class museums, and charming streets. Immerse yourself in the rich cultural tapestry and savor exquisite cuisine.`,
        region: 'Europe',
        imagelink_square: require('../assets/places_assets/Acropolis/p2/Acropolis.png'),
        imagelink_portrait: require('../assets/places_assets/Acropolis/p1/Acropolis.png'),
        activities: ['Visit Louvre Museum', 'Eiffel Tower Experience', 'Seine River Cruise'],
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
        averageRating: 4.8,
        ratingsCount: '9,521',
        favorite: false,
        index: 0,
        type: 'Normal'
    },
    {
        id: 'D2',
        name: 'Tropical Paradise',
        category: 'Beach',
        description: `Escape to a tropical paradise with pristine beaches, lush landscapes, and vibrant coral reefs. Indulge in water activities, relax on the sandy shores, and experience the local hospitality.`,
        region: 'Asia',
        imagelink_square: require('../assets/places_assets/bora/p2/bora.png'),
        imagelink_portrait: require('../assets/places_assets/bora/p1/bora.png'),
        activities: ['Snorkeling Adventure', 'Beachfront Yoga', 'Island Excursion'],
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
        averageRating: 4.6,
        ratingsCount: '7,832',
        favorite: false,
        index: 1,
        type: 'Normal'
    },
    {
        id: 'D3',
        name: 'Majestic Mountains',
        category: 'Mountain',
        description: `Embark on a journey to the majestic mountains, where breathtaking landscapes, alpine meadows, and adventure await. Discover hiking trails, charming villages, and serene lakes.`,
        region: 'North America',
        imagelink_square: require('../assets/places_assets/Eiffel_Tower/p2/Eiffel_Tower.png'),
        imagelink_portrait: require('../assets/places_assets/Eiffel_Tower/p1/Eiffel_Tower.png'),
        activities: ['Mountain Hiking Expedition', 'Scenic Drives', 'Lake Retreat'],
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
        averageRating: 4.7,
        ratingsCount: '8,215',
        favorite: false,
        index: 2,
        type: 'Normal'
    },
    {
        id: 'D4',
        name: 'Historical Haven',
        category: 'Cultural',
        description: `Step back in time and explore a historical haven with ancient ruins, architectural wonders, and stories from the past. Immerse yourself in the rich history and cultural heritage of this captivating destination.`,
        region: 'Middle East',
        imagelink_square: require('../assets/places_assets/Acropolis/p2/Acropolis.png'),
        imagelink_portrait: require('../assets/places_assets/Acropolis/p2/Acropolis.png'),
        activities: ['Visit UNESCO World Heritage Sites', 'Guided Historical Tours', 'Cultural Performances'],
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
        averageRating: 4.9,
        ratingsCount: '6,942',
        favorite: false,
        index: 3,
        type: 'Normal'
    },
    {
        id: 'D5',
        name: 'Serenity Lake',
        category: 'Nature',
        description: `Unwind at a serene lake retreat surrounded by nature's beauty. Enjoy peaceful walks by the lake, birdwatching, and stargazing at night. Connect with the tranquility of the natural world.`,
        region: 'North America',
        imagelink_square: require('../assets/places_assets/Great_Wall/p2/Great_Wall.png'),
        imagelink_portrait: require('../assets/places_assets/Great_Wall/p1/Great_Wall.png'),
        activities: ['Lakefront Meditation', 'Nature Walks', 'Stargazing'],
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
        averageRating: 4.5,
        ratingsCount: '5,319',
        favorite: false,
        index: 4,
        type: 'Normal'
    },
    {
        id: 'D6',
        name: 'Island Oasis',
        category: 'Beach',
        description: `Discover an island oasis with pristine beaches, crystal-clear waters, and vibrant marine life. Dive into thrilling water sports, unwind on sandy shores, and experience the laid-back island lifestyle.`,
        region: 'Oceania',
        imagelink_square: require('../assets/places_assets/hotels/p2/hotels.png'),
        imagelink_portrait: require('../assets/places_assets/hotels/p1/hotels.png'),
        activities: ['Snorkeling Adventure', 'Beachside Relaxation', 'Island Exploration'],
        accommodations: [
            {
                id: 'A11', name: 'Beachfront Resort', room: [
                    { size: 'S', price: '$60', quantity: 0 },
                    { size: 'M', price: '$80', quantity: 0 },
                    { size: 'L', price: '$100', quantity: 0 },
                ],
                imagelink_square: require('../assets/places_assets/hotels/p2/hotels.png'),
            },
            {
                id: 'A12', name: 'Seaside Villa', room: [
                    { size: 'S', price: '$60', quantity: 0 },
                    { size: 'M', price: '$80', quantity: 0 },
                    { size: 'L', price: '$100', quantity: 0 },
                ],
                imagelink_square: require('../assets/places_assets/hotels/p2/hotels.png'),
            },
        ],
        averageRating: 4.7,
        ratingsCount: '6,754',
        favorite: false,
        index: 5,
        type: 'Normal'
    },
    {
        id: 'D7',
        name: 'Enchanted Forest',
        category: 'Nature',
        description: `Immerse yourself in the magic of an enchanted forest, where towering trees, winding trails, and mystical landscapes create a sense of wonder. Connect with nature's beauty and tranquility.`,
        region: 'Europe',
        imagelink_square: require('../assets/places_assets/Iguazu_Falls/p2/Iguazu_Falls.png'),
        imagelink_portrait: require('../assets/places_assets/Iguazu_Falls/p1/Iguazu_Falls.png'),
        activities: ['Forest Walks', 'Nature Photography', 'Birdwatching'],
        accommodations: [
            {
                id: 'A13', name: 'Woodland Cabin', room: [
                    { size: 'S', price: '$60', quantity: 0 },
                    { size: 'M', price: '$80', quantity: 0 },
                    { size: 'L', price: '$100', quantity: 0 },
                ],
                imagelink_square: require('../assets/places_assets/hotels/p2/hotels.png'),
            },
            {
                id: 'A14', name: 'Treehouse Retreat', room: [
                    { size: 'S', price: '$60', quantity: 0 },
                    { size: 'M', price: '$80', quantity: 0 },
                    { size: 'L', price: '$100', quantity: 0 },
                ],
                imagelink_square: require('../assets/places_assets/hotels/p2/hotels.png'),
            },
        ],
        averageRating: 4.6,
        ratingsCount: '7,421',
        favorite: false,
        index: 6,
        type: 'Normal'
    },
    {
        id: 'D8',
        name: 'Winter Wonderland',
        category: 'Mountain',
        description: `Experience the magic of a winter wonderland, with snow-covered landscapes, cozy cabins, and exciting winter activities. Enjoy skiing, snowboarding, and the beauty of a snowy escape.`,
        region: 'North America',
        imagelink_square: require('../assets/places_assets/Lush_Greenery/p2/Lush_Greenery.png'),
        imagelink_portrait: require('../assets/places_assets/Lush_Greenery/p1/Lush_Greenery.png'),
        activities: ['Skiing Adventure', 'Snowball Fights', 'Cozy Cabin Retreat'],
        accommodations: [
            {
                id: 'A15', name: 'Mountain Chalet', room: [
                    { size: 'S', price: '$60', quantity: 0 },
                    { size: 'M', price: '$80', quantity: 0 },
                    { size: 'L', price: '$100', quantity: 0 },
                ],
                imagelink_square: require('../assets/places_assets/hotels/p2/hotels.png'),
            },
            {
                id: 'A16', name: 'Snowy Lodge', room: [
                    { size: 'S', price: '$60', quantity: 0 },
                    { size: 'M', price: '$80', quantity: 0 },
                    { size: 'L', price: '$100', quantity: 0 },
                ],
                imagelink_square: require('../assets/places_assets/hotels/p2/hotels.png'),
            },
        ],
        averageRating: 4.8,
        ratingsCount: '8,932',
        favorite: false,
        index: 7,
        type: 'Normal'
    },
    {
        id: 'D9',
        name: 'Safari Adventure',
        category: 'Nature',
        description: `Embark on an unforgettable safari adventure, where you can witness incredible wildlife, vast landscapes, and the raw beauty of nature. Connect with the wonders of the animal kingdom.`,
        region: 'Africa',
        imagelink_square: require('../assets/places_assets/Machu_Picchu/p2/Machu_Picchu.png'),
        imagelink_portrait: require('../assets/places_assets/Machu_Picchu/p1/Machu_Picchu.png'),
        activities: ['Game Drives', 'Bush Walks', 'Safari Camp Experience'],
        accommodations: [
            {
                id: 'A17', name: 'Safari Lodge', room: [
                    { size: 'S', price: '$60', quantity: 0 },
                    { size: 'M', price: '$80', quantity: 0 },
                    { size: 'L', price: '$100', quantity: 0 },
                ],
                imagelink_square: require('../assets/places_assets/hotels/p2/hotels.png'),
            },
            {
                id: 'A18', name: 'Tented Camp', room: [
                    { size: 'S', price: '$60', quantity: 0 },
                    { size: 'M', price: '$80', quantity: 0 },
                    { size: 'L', price: '$100', quantity: 0 },
                ],
                imagelink_square: require('../assets/places_assets/hotels/p2/hotels.png'),
            },
        ],
        averageRating: 4.9,
        ratingsCount: '9,216',
        favorite: false,
        index: 8,
        type: 'Normal'
    },
    {
        id: 'D10',
        name: 'Sunset Beach',
        category: 'Beach',
        description: `Indulge in a romantic sunset beach escape, where golden sands, clear waters, and breathtaking sunsets set the scene for a perfect getaway. Relax in luxury and savor the beauty of the coast.`,
        region: 'Caribbean',
        imagelink_square: require('../assets/places_assets/Santorini/p2/Santorini.png'),
        imagelink_portrait: require('../assets/places_assets/Santorini/p1/Santorini.png'),
        activities: ['Beachside Dining', 'Sunset Cruises', 'Couples Massage'],
        accommodations: [
            {
                id: 'A19', name: 'Luxury Beach Resort', room: [
                    { size: 'S', price: '$60', quantity: 0 },
                    { size: 'M', price: '$80', quantity: 0 },
                    { size: 'L', price: '$100', quantity: 0 },
                ],
                imagelink_square: require('../assets/places_assets/hotels/p2/hotels.png'),
            },
            {
                id: 'A20', name: 'Private Beach Villa', room: [
                    { size: 'S', price: '$60', quantity: 0 },
                    { size: 'M', price: '$80', quantity: 0 },
                    { size: 'L', price: '$100', quantity: 0 },
                ],
                imagelink_square: require('../assets/places_assets/hotels/p2/hotels.png'),
            },
        ],
        averageRating: 4.7,
        ratingsCount: '7,590',
        favorite: false,
        index: 9,
        type: 'Normal'
    },
    {
        id: 'D11',
        name: 'Cultural Hub',
        category: 'Cultural',
        description: `Immerse yourself in a cultural hub, where art, history, and diverse traditions come to life. Explore museums, galleries, and vibrant neighborhoods to discover the heartbeat of the city.`,
        region: 'Asia',
        imagelink_square: require('../assets/places_assets/Rainbow_Mountain/p2/Rainbow_Mountain.png'),
        imagelink_portrait: require('../assets/places_assets/Rainbow_Mountain/p1/Rainbow_Mountain.png'),
        activities: ['Art Galleries Tour', 'Cultural Performances', 'Local Cuisine Exploration'],
        accommodations: [
            {
                id: 'A21', name: 'Cultural District Hotel', room: [
                    { size: 'S', price: '$60', quantity: 0 },
                    { size: 'M', price: '$80', quantity: 0 },
                    { size: 'L', price: '$100', quantity: 0 },
                ],
                imagelink_square: require('../assets/places_assets/hotels/p2/hotels.png'),
            },
            {
                id: 'A22', name: 'Artisan Guesthouse', room: [
                    { size: 'S', price: '$60', quantity: 0 },
                    { size: 'M', price: '$80', quantity: 0 },
                    { size: 'L', price: '$100', quantity: 0 },
                ],
                imagelink_square: require('../assets/places_assets/hotels/p2/hotels.png'),
            },
        ],
        averageRating: 4.6,
        ratingsCount: '7,128',
        favorite: false,
        index: 10,
        type: 'Normal'
    },
    {
        id: 'D12',
        name: 'Tranquil River',
        category: 'Nature',
        description: `Discover a tranquil river retreat, where the soothing sound of flowing water, lush landscapes, and riverside activities create a perfect escape. Reconnect with nature along the riverbanks.`,
        region: 'South America',
        imagelink_square: require('../assets/places_assets/hotels1/p2/hotels1.png'),
        imagelink_portrait: require('../assets/places_assets/hotels1/p2/hotels1.png'),
        activities: ['River Kayaking', 'Riverside Yoga', 'Nature Walks'],
        accommodations: [
            {
                id: 'A23', name: 'Riverside Cabin', room: [
                    { size: 'S', price: '$60', quantity: 0 },
                    { size: 'M', price: '$80', quantity: 0 },
                    { size: 'L', price: '$100', quantity: 0 },
                ],
                imagelink_square: require('../assets/places_assets/hotels/p2/hotels.png'),
            },
            {
                id: 'A24', name: 'Nature Lodge', room: [
                    { size: 'S', price: '$60', quantity: 0 },
                    { size: 'M', price: '$80', quantity: 0 },
                    { size: 'L', price: '$100', quantity: 0 },
                ],
                imagelink_square: require('../assets/places_assets/hotels/p2/hotels.png'),
            },
        ],
        averageRating: 4.5,
        ratingsCount: '6,418',
        favorite: false,
        index: 11,
        type: 'Normal'
    },
    {
        id: 'D13',
        name: 'Mountain Bliss',
        category: 'Mountain',
        description: `Experience mountain bliss in a picturesque setting, where snow-capped peaks, alpine meadows, and adventure await. Hike scenic trails, breathe in the fresh mountain air, and enjoy the serene surroundings.`,
        region: 'Europe',
        imagelink_square: require('../assets/places_assets/hotel3/p2/hotel3.png'),
        imagelink_portrait: require('../assets/places_assets/hotel3/p1/hotel3.png'),
        activities: ['Mountain Hiking', 'Alpine Photography', 'Mountain Lodge Retreat'],
        accommodations: [
            {
                id: 'A25', name: 'Alpine Chalet', room: [
                    { size: 'S', price: '$60', quantity: 0 },
                    { size: 'M', price: '$80', quantity: 0 },
                    { size: 'L', price: '$100', quantity: 0 },
                ],
                imagelink_square: require('../assets/places_assets/hotels/p2/hotels.png'),
            },
            {
                id: 'A26', name: 'Mountain View Cabin', room: [
                    { size: 'S', price: '$60', quantity: 0 },
                    { size: 'M', price: '$80', quantity: 0 },
                    { size: 'L', price: '$100', quantity: 0 },
                ],
                imagelink_square: require('../assets/places_assets/hotels/p2/hotels.png'),
            },
        ],
        averageRating: 4.7,
        ratingsCount: '8,021',
        favorite: false,
        index: 12,
        type: 'Normal'
    },
];
export default PlacesData;
