export type PlaceType = 'Room' | 'Apartment'

export const enum AppRoute {
  MAIN = '/',
  LOGIN = '/login',
  FAVORITES = '/favorites',
  OFFER = '/offer/:id'
}

export type AuthorizationStatus ='AUTH' | 'NO_AUTH' | 'UNKNOWN'
