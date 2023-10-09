exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex('products')
      .del()
      .then(function () {
        // Inserts seed entries
        return knex('products').insert([
          { 
            name : 'Pantalon', 
            price : 300,
            description : 'Dress and trousers',
            stocks: 34, 
           image: 'http://localhost:7070/uploads/hijab1.jpeg'
         },
         { 
            name : 'Pantalon', 
            price : 300,
            description : 'Dress and trousers',
            stocks: 4, 
           image: 'http://localhost:7070/uploads/hijab 2.jpg'
         },
         { 
            name : 'Pantalon', 
            price : 300,
            description : 'Dress and trousers',
            stocks: 14, 
           image: 'http://localhost:7070/uploads/hijab 4.jpg'
         },


           { 
            name : 'Skirt', 
            price : 150,
            description : 'Casual skirt',
            stocks: 4, 
           image: 'http://localhost:7070/uploads/skirt1.jpeg'
         },

           { 
            name : 'Wedge', 
            price : 300,
            description : 'footWear',
            stocks: 5, 
           image: 'http://localhost:7070/uploads/heel4.jpeg'
         },

          { 
            name : 'Watch', 
            price : 200,
            description : 'Designer Watch',
            stocks: 5, 
           image: 'http://localhost:7070/uploads/watch1.jpeg'
         },

         { 
            name : 'bag', 
            price : 250,
            description : 'Designer bag',
            stocks: 3, 
           image: 'http://localhost:7070/uploads/bag1.jpeg'
         },

          { 
            name : 'skirt', 
            price : 250,
            description : 'ladies skirt',
            stocks: 3, 
           image: 'http://localhost:7070/uploads/skirt2.gif'
         },

         
          { 
            name : 'Powder', 
            price : 250,
            description : 'make-up',
            stocks: 3, 
           image: 'http://localhost:7070/uploads/make-up gif1.gif'
         },

             { 
            name : 'heel', 
            price : 250,
            description : 'make-up',
            stocks: 3, 
           image: 'http://localhost:7070/uploads/heel4.jpeg'
         },

            { 
            name : 'Cerave', 
            price : 250,
            description : 'cosmetics',
            stocks: 3, 
           image: 'http://localhost:7070/uploads/cerave.webp'
         },

            { 
            name : 'pencil Heel', 
            price : 400,
            description : 'Heels',
            stocks: 3, 
           image: 'http://localhost:7070/uploads/heel3.jpeg'
         }
    
        ]);
      });
  };

  /*
  table.string('name').notNullable();
  table.integer('price').notNullable();
  table.string('description').notNullable();
  table.integer('stocks').notNullable();
  table.string('image').notNullable();
  */