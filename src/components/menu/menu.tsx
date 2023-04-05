import classNames from 'classnames';
import { useContext } from 'react';
import { SearchContext } from '../../context/SearchContext';
import styles from './menu.module.scss';

export interface MenuProps {
    className?: string;
}
const sortBy: { q: string, text: string }[] = [
    {q:"popularity.desc", text:'Popularity'},
    {q:"vote_count.desc", text:'Most Voted'},
    {q:"release_date.desc", text:'Release Date'},
];
const genres: { id: string, text: string }[] = [
    {
        id: "28",
        text: "Action"
    },
    {
        id: "12",
        text: "Adventure"
    },
    {
        id: "16",
        text: "Animation"
    },
    {
        id: "35",
        text: "Comedy"
    },
    {
        id: "80",
        text: "Crime"
    },
    {
        id: "99",
        text: "Documentary"
    },
    {
        id: "18",
        text: "Drama"
    },
    {
        id: "10751",
        text: "Family"
    },
    {
        id: "14",
        text: "Fantasy"
    },
    {
        id: "36",
        text: "History"
    },
    {
        id: "27",
        text: "Horror"
    },
    {
        id: "10402",
        text: "Music"
    },
    {
        id: "9648",
        text: "Mystery"
    },
    {
        id: "10749",
        text: "Romance"
    },
    {
        id: "878",
        text: "Science Fiction"
    },
    {
        id: "10770",
        text: "TV Movie"
    },
    {
        id: "53",
        text: "Thriller"
    },
    {
        id: "10752",
        text: "War"
    },
    {
        id: "37",
        text: "Western"
    },
];
/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-menus-and-templates
 */
export const Menu = ({ className }: MenuProps) => {

const {dispatch, state} = useContext(SearchContext);

    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.logo}>
                <img
                    src="https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg"
                    className={styles['logo-img']}
                />
                <span className={styles['logo-text']}>Movies</span>
            </div>
            <div>
                <span className={styles.title}>
                    SortBy
                    <hr className={styles.hr} />
                </span>
                <ul className={styles.list}>
                    {sortBy.map((item) => (
                        <li className={styles['list-item']} key={item.q} onClick={()=>dispatch({type:"SORT_BY", payload:item.q})}>
                            {item.text}
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <span className={styles.title}>
                    Genre
                    <hr className={styles.hr} />
                </span>
                <ul className={styles.list}>
                    {genres.map((item) => (
                        <li className={styles['list-item']} key={item.id} onClick={()=>dispatch({type:"ADD_GENRE", payload:item.id})}>
                            {item.text}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};
