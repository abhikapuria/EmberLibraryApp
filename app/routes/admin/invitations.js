import Ember from 'ember';

export default Ember.Route.extend({
    model(){
        return this.store.findAll('invitation');
    },

    actions: {

        deleteInvite(invitation){
            let confirmation = confirm("Are you sure you want to delete invite");

            if(confirmation){
                invitation.destroyRecord();
            }
        }
    }
});
