window.onload = function () {
    describe('NoteController', function() {
        function NoteListModelDouble() {};

        NoteListModelDouble.prototype = {
            getNotes: function() { return ['Test note'] },
            addNote: function () {},
        };

        function NoteModelDouble(text) {
            this._text = text;
        };

        NoteModelDouble.prototype = {
        };

        const noteController = new NoteController(new NoteListModelDouble());

        it('can be instantiated', function() {
            assert.isTrue(noteController instanceof NoteController);
        });

        it('takes a NoteList model as a parameter', function() {
            assert.isTrue(noteController.getNoteListModel() instanceof NoteListModelDouble);
        });

        describe('#displayList', function() {
            it('takes a NoteList model as a parameter', function() {
                noteController.displayList()
                assert.htmlContainsText(document.getElementById('app'), 'li', 'Test note');
            });
        });

    });
};
