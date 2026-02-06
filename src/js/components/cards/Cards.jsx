import { Card } from './Card';

const cards = [
    {
        imagen: 'https://picsum.photos/500/325?random=1',
        titulo: 'Título Uno',
        descripcion:
            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi neque consequuntur tempora quam delectus sapiente!',
    },
    {
        imagen: 'https://picsum.photos/500/325?random=2',
        titulo: 'Título Dos',
        descripcion:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro id, dicta quas rem quae nemo.',
    },
    {
        imagen: 'https://picsum.photos/500/325?random=3',
        titulo: 'Título Tres',
        descripcion:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus quaerat optio a, atque ab dolorem?',
    },
    {
        imagen: 'https://picsum.photos/500/325?random=4',
        titulo: 'Título 4',
        descripcion:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia necessitatibus eum expedita ipsa, accusantium error.',
    },
];

export const Cards = () => {
    return (
        <div className="container">
            {/* <div className="row">{cardsRender()}</div> */}
            <div className="row">
                {cards.map((card, index) => (
                    <div
                        className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex align-items-stretch"
                        key={index}
                    >
                        <Card card={card} />
                    </div>
                ))}
            </div>
        </div>
    );
};
