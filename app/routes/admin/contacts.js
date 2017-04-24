import Ember from 'ember';

export default Ember.Route.extend({

    model() {
    return this.store.findAll('contact');
  },
  actions:{   
   deleteContact: function(params) {    
     this.store.findRecord('contact', params.id).then(function(record){
       record.destroyRecord();
     });
   }
  }
});
