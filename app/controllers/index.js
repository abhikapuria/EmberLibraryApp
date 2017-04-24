import Ember from 'ember';

export default Ember.Controller.extend({

    headerMessage: 'Coming Soon',
    emailAddress: '',
    isValid: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
    isDisabled: Ember.computed.not('isValid'),
    actions: {
        saveInvitation() {
            //alert(`Saving of the following email address is in progress: ${this.get('emailAddress')}`);
            //this.set('responseMessage', `Thank you! We've just saved your email address: ${this.get('emailAddress')}`);
            //this.set('emailAddress', '');

            const email = this.get('emailAddress');

            const newInvitation = this.store.createRecord('invitation', { email: email });
            newInvitation.save().then((response => {
                 this.set('responseMessage', `Thank you! We have just saved your email address: ${this.get('emailAddress')} and id: ${response.get('id')}`);
                 this.set('emailAddress', '');
            }));           
        }
    }
});
