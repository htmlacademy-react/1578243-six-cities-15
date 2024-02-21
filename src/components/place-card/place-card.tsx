import { PlaceType } from '../../types/types';

export type TPlaceCardProps = {
    id?: number;
    isPremium?: boolean;
    image: string;
    price: number;
    isFavorite: boolean;
    title: string;
    type: PlaceType;
    rating: 1 | 2 | 3 | 4 | 5;
    isFavoriteClass?: boolean;
}

export const PlaceCard = ({ isPremium, image, isFavorite, price, title, type, rating, isFavoriteClass, id }: TPlaceCardProps): JSX.Element => (
  <article className="cities__card place-card" key={id}>
    {isPremium && (
      <div className="place-card__mark">
        <span>Premium</span>
      </div>
    )}

    <div className="cities__image-wrapper place-card__image-wrapper">
      <a href="#">
        <img className="place-card__image" src={image} width="260" height="200" alt="Place image" />
      </a>
    </div>
    <div className="place-card__info">
      <div className="place-card__price-wrapper">
        <div className="place-card__price">
          <b className="place-card__price-value">&euro;{price}</b>
          <span className="place-card__price-text">&#47;&nbsp;night</span>
        </div>
        <button
          className={
            isFavoriteClass
              ? 'place-card__bookmark-button place-card__bookmark-button--active button'
              : 'place-card__bookmark-button button'
          }
          type="button"
        >
          <svg className="place-card__bookmark-icon" width="18" height="19">
            <use xlinkHref="#icon-bookmark"></use>
          </svg>
          <span className="visually-hidden">{isFavorite ? 'In' : 'To'} bookmarks</span>
        </button>
      </div>
      <div className="place-card__rating rating">
        <div className="place-card__stars rating__stars">
          <span style={{ width: `${rating * 20}%` }}></span>
          <span className="visually-hidden">Rating</span>
        </div>
      </div>
      <h2 className="place-card__name">
        <a href="#">{title}</a>
      </h2>
      <p className="place-card__type">{type}</p>
    </div>
  </article>
);
