'use strict';

exports.seed = function(knex) {
  return knex('snacks').del()
    .then(() => {
      return knex('snacks').insert([{
        id: 1,
        name: 'Cheetos',
        image_url: 'http://www.fritolay.com/images/default-source/blue-bag-image/cheetos-crunchy-cheese.png?sfvrsn=2',
        review_description: 'Cheesy wholesome goodness is a bag',
        rating: 2,

      }, {
       id: 2,
       name: 'Corn Nuts',
       image_url: 'https://i5.walmartimages.com/asr/7410ed01-3dd0-44f2-8325-980dbd674b9c_1.9714da3beb322349fadfc00aba0a2700.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF',
       review_description: 'Nutty taste you cant resist',
       rating: 3,
  }]);
})
    .then(() => {
      return knex.raw(
        "SELECT setval('snacks_id_seq', (SELECT MAX(id) FROM snacks));"
      );
    });
};
