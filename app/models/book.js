import DS from 'ember-data';

export default DS.Model.extend({
    title: DS.attr('string'),
    libraryId: DS.attr('string'),
    library: Ember.computed('libraryId',function(){
             return this.store.peekRecord('library',this.get('libraryId'));
        }),//DS.belongsTo('library', { async: true }),
    author: DS.attr('string')
});
