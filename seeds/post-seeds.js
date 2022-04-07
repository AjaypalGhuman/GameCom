const { Post } = require('../models');

const postdata = [
    {
        title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        game_name: 'Halo',
        description: 'Mollitia ratione debitis culpa, earum voluptate illum neque facere placeat quam quaerat? Explicabo maxime tempore suscipit incidunt aperiam rem laudantium delectus ratione!',
        image: 'Images\\halo.jpg',
        user_id: 1
    },
    {
        title: 'Sed, facilis ipsam',
        game_name: 'Final Fantasy',
        description: 'Deleniti quasi molestias eos adipisci aliquid facilis, maxime sapiente harum. Sunt nobis voluptatum aut dolorum temporibus beatae dolores vel?. Eos quos est maiores nesciunt voluptatum eligendi cupiditate',
        image: 'Images\\final-fantasy.jpg',
        user_id: 2
    },
    {
        title: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
        game_name: 'Call of Duty',
        description: 'Corrupti, voluptates ipsam sunt, assumenda sapiente mollitia in, animi sed accusantium autem eius. Tenetur natus dolor autem delectus tempore corporis? Iure, eius.',
        image: 'Images\\callofduty.jpg',
        user_id: 3
    },
    {
        title: 'Pellentesque eget nunc.',
        game_name: 'Minecraft',
        description: 'Provident veniam vero 🗡️ quidem id! Recusandae perferendis sit alias vel magni? Unde, quisquam cumque. Quas soluta vel aliquam deserunt laborum accusantium quos.',
        image: 'Images\\minecraft.jpg',
        user_id: 1
    },
    {
        title: 'In hac habitasse platea dictumst.',
        game_name: 'Diablo III',
        description: 'Impedit, quo. Minima voluptatem, nam voluptas dolores id magni placeat? Aliquam veritatis sapiente ad officia quisquam asperiores libero similique molestias iure earum.',
        image: 'Images\\.diablojpg',
        user_id: 1
    },
    {
        title: 'Morbi non quam nec dui luctus rutrum.',
        game_name: 'Super Mario Bros',
        description: '',
        image: 'Images\\supermario.jpg',
        user_id: 2
    },
    {
        title: 'Duis ac nibh.',
        game_name: 'Super Smash Brothers',
        description: 'Tenetur, ad? Beatae repudiandae asperiores consequatur est, ex sint autem ab. Maiores quia aliquam ut temporibus blanditiis facere maxime vero assumenda earum.',
        image: 'Images\\supersmash.jpg',
        user_id: 3
    },
    {
        title: 'In hac habitasse platea.',
        game_name: 'Pokemon',
        description: 'Quo in voluptatum molestiae aperiam suscipit hic fuga illum inventore sequi saepe distinctio quis iste omnis quae quos, eos magnam rem porro?',
        image: 'Images\\pokemon.jpg',
        user_id: 3
    },

];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;