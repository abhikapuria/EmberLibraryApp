import Ember from 'ember';

export default Ember.Route.extend({  
         
    model(){

        return  Ember.RSVP.hash({            
            books: this.store.findAll('book', { reload: true }),
            book: this.store.createRecord('book'),
            libraries: this.store.findAll('library')
        }).then((results) => { return results });
    },
    
    actions: {
        /*
        saveBook(book){
                   
           book.saveRelationships().then(function() {
                return book.save()
            });
           this.refresh();
        }
        */
    }   
});
