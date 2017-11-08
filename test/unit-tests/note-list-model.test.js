describe('Note List', function(){
    const noteList = new NoteList('Shopping List');
    const note = new Note('Steak');

    it('is an instance of NoteList', function() {
        assert.isTrue(noteList instanceof NoteList);
    });

    it('initializes NoteList with title', function() {
        assert.toBe(noteList.getTitle(), 'Shopping List');
    });

    it('initializes NoteList with notes array', function() {
        assert.isArray(noteList.getNotes());
    });

    describe('Adding Notes', function(){
        it('can add a note to the notes array', function(){
            noteList.addNote(note);
            assert.itContains(noteList.getNotes(), note)
        })
    });
});