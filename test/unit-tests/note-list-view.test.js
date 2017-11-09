window.onload = function () {
    describe('NoteList View', function () {
        const noteListModel = new NoteList('Shopping');
        noteListModel.addNote('Steak')
        const noteListView = new NoteListView(noteListModel);

        it('initializes with NoteList model.', function () {
            assert.toBe(noteListView.getModel(), noteListModel);
        });

        it('initializes with created html list string.', function () {
            let element = document.getElementById('listContainer');
            assert.toBe(noteListView._listView, '<div><h2>Shopping</h2><ul><li><div>Steak</div></li></ul></div>');
        });

        describe('#listView', function () {
            it('returns the html list string', function () {
                assert.toBe(noteListView.getListView(), '<div><h2>Shopping</h2><ul><li><div>Steak</div></li></ul></div>');
            });
        });
    });
};
