import { TPlaceCardProps } from '../components/place-card/place-card';

export const mockData: TPlaceCardProps[] = [
  {
    id: 1,
    isPremium: true,
    price: 120,
    image: 'img/apartment-01.jpg',
    isFavorite: false,
    title: 'Beautiful & luxurious apartment at great location',
    type: 'Apartment',
    rating: 4
  },
  {
    id: 2,
    price: 80,
    image: 'img/room.jpg',
    isFavorite: false,
    title: 'Wood and stone place',
    type: 'Room',
    rating: 2,
    isFavoriteClass: true
  },
  {
    id: 3,
    price: 132,
    image: 'img/apartment-02.jpg',
    isFavorite: false,
    title: 'Canal View Prinsengracht',
    type: 'Apartment',
    rating: 3
  },
  {
    id: 4,
    isPremium: true,
    price: 180,
    image: 'img/apartment-03.jpg',
    isFavorite: false,
    title: 'Nice, cozy, warm big bed apartment',
    type: 'Apartment',
    rating: 5,
    isFavoriteClass: true
  },
  {
    id: 5,
    price: 80,
    image: 'img/room.jpg',
    isFavorite: false,
    title: 'Wood and stone place',
    type: 'Room',
    rating: 4,
    isFavoriteClass: true
  },
  {
    id: 6,
    isPremium: true,
    image: 'img/apartment-03.jpg',
    price: 300,
    isFavorite: true,
    title: 'Very Good Place',
    type: 'Apartment',
    rating: 4
  },
  {
    id: 7,
    image: 'img/apartment-02.jpg',
    price: 120,
    isFavorite: false,
    title: 'Nice, cozy, warm big bed apartment',
    type: 'Room',
    rating: 2,
    isFavoriteClass: true
  },
  {
    isPremium: true,
    id: 8,
    image: 'img/apartment-01.jpg',
    price: 350,
    isFavorite: true,
    title: 'Wood and stone place',
    type: 'Apartment',
    rating: 3
  },
  {
    id: 9,
    image: 'img/room.jpg',
    price: 90,
    isFavorite: true,
    title: 'Nice, cozy, warm big bed apartment',
    type: 'Apartment',
    rating: 5
  },
];
