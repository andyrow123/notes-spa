describe('SingleNoteView', function() {

    function NoteModelDouble() {};

    NoteModelDouble.prototype = {
        getText: function() { return 'Test note'}
    }
    const noteModelDouble = new NoteModelDouble;

    const singleNoteView = new SingleNoteView(noteModelDouble);

    it('takes a note model as a parameter', function() {
        assert.toBe(singleNoteView.getNoteModel(), noteModelDouble);
    });

    describe('#getNoteView', function () {
        it('returns the html list string', function () {
            assert.toBe(singleNoteView.getNoteView(), '<div>Test note</div>');
        });
    });
});