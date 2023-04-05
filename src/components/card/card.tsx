import classNames from 'classnames';
import styles from './card.module.scss';
import {useContext} from 'react'
import { FavoriteContext } from '../../context/FavoriteContext';

export interface CardProps {
    className?: string;
    movie: {
        id: number;
        poster_path?: string;
        title: string;
        overview: string;
        vote_average: string;
        release_date: string;
    };
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-cards-and-templates
 */
export const Card = ({ className, movie }: CardProps) => {

    const { dispatch } = useContext(FavoriteContext);
    
    return (
        <div className={classNames(styles.root, className)}>
            <img
                src={`https://image.tmdb.org/t/p/w500/${movie?.poster_path}`}
                className={styles['card-image']}
            />
            <div className={styles.detail}>
                <h1 className={styles.title}>{movie.title}</h1>
                <span className={styles.rating}>{movie.vote_average}</span>
                <p className={styles.description}>{movie.overview}</p>
                <button className={styles.button} onClick={()=>dispatch({type:"ADD_MOVIE", payload:movie})}>+</button>
            </div>
        </div>
    );
};
