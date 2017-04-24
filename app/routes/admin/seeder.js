import Ember from 'ember';

export default Ember.Route.extend({

    model(){

        //for downloading multiple models in the same route we have to use the 
        //Ember.RSVP.hash() function in the model hook.
        return Ember.RSVP.hash({
            libraries: this.store.findAll('library'),
            books: this.store.findAll('book'),
            authors: this.store.findAll('author')
        });
    },

    setupController(controller, model){
        controller.set('libraries', model.libraries);
        controller.set('books', model.books);
        controller.set('authors', model.authors);
    }
});
