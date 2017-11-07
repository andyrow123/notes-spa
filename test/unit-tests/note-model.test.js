
describe('Note', function(){
    const note = new Note('A test note.');

    it('is an instance of Note', function() {
        assert.isTrue(note instanceof Note);
    });

    it('initializes Note with text', function() {
        assert.toBe(note.getText(), 'A test note.');
    })
});