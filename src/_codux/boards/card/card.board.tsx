import { createBoard } from '@wixc3/react-board';
import { Card } from '../../../components/card/card';

export default createBoard({
    name: 'Card',
    Board: () => (
        <Card
            movie={{
                id: 123,
                overview: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quod totam ullam nisi similique iusto libero eos dolorum fugiat! Repudiandae dolor, tempore accusamus perspiciatis sit iusto cum molestiae ut temporibus!',
                release_date: '2001',
                title: 'Avatar',
                vote_average: '4.6',
                poster_path:
                    'https://img-4.linternaute.com/cip2YBDZkVvjU4a2tqiFIaf6Yhw=/1240x/a9bfc660898e44a19d2d36f463c9c955/ccmcms-linternaute/124775.jpg',
            }}
        />
    ),
});
