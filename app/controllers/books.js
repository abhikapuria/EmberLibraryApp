import Ember from 'ember';
import Book from '../models/book'
export default Ember.Controller.extend({    
    showAddOptions: false,
    buttonText: "Add Book",    
    actions:{

        addBook(newBook){
            
            if(this.get('showAddOptions')){                
                var lib = this.store.peekRecord('library', this.get('model.book.libraryId'));                
                this.set('model.book.library', lib);
                newBook.save();                
                //this.send('saveBook', model);
                this.set('showAddOptions', false);

                this.transitionToRoute('books', this.get('model.id'));
            } 

            if(!this.get('showAddOptions')){
                this.set('buttonText', 'Save');
                this.set('showAddOptions', true);
            }      
        },
        cancel(){
            this.toggleProperty('showAddOptions');
            this.set('buttonText', 'Add Book');
        },
        selectedLibrary(libraryId){
            this.set('model.book.libraryId', libraryId);
            console.log(this.get('model.book.libraryId'))      
        }
    }
});
