import { createBoard } from '@wixc3/react-board';
import { FavoriteCard } from '../../../components/favorite-card/favorite-card';

export default createBoard({
    name: 'FavoriteCard',
    Board: () => (
        <FavoriteCard
            movie={{
                id: 4,
                overview:
                    "Francois, routard fatigué, débarque dans le port de Marseille. Musicien hors-pair, il est bien décidé à exploiter son talent dans les studios parisiens. Denis, inseparable compagnon et négatif de Fançois, est un grand spécialiste de l'angoisse et ne cesse de gémir. Vu ce qui les attend a Paris, il n'est pas prêt de s'arrêter...",
                release_date: '1999',
                title: "Marche à l'ombre",
                vote_average: '4.5',
                poster_path: 'https://fr.web.img3.acsta.net/medias/nmedia/18/62/84/50/19042452.jpg',
            }}
        />
    ),
    environmentProps: {
        windowHeight: 1265,
    },
});
