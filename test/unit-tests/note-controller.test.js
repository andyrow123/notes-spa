window.onload = function () {
    describe('NoteController', function() {
        function NoteListModelDouble() {};

        NoteListModelDouble.prototype = {
            getTitle: function() { return 'Shopping' },
            getNotes: function() { return [new NoteModelDouble('Steak')] }
        };

        function NoteModelDouble(text) {
            this._text = text;
        };

        NoteModelDouble.prototype = {
            // getText: function() { return 'Steak' }
        };

        const noteController = new NoteController(new NoteListModelDouble(new NoteModelDouble()));

        it('can be instantiated', function() {
            assert.isTrue(noteController instanceof NoteController);
        });

        it('takes a NoteList model as a parameter', function() {
            assert.isTrue(noteController.getNoteListModel() instanceof NoteListModelDouble);
        });

        describe('#displayList', function() {
            it('takes a NoteList model as a parameter', function() {
                noteController.displayList()
                assert.htmlContainsText(document.getElementById('app'), 'h2', 'Shopping');
            });
        });

    });
};
