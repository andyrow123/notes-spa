describe('NoteList View', function () {
    window.onload = function () {
        const noteListModel = new NoteList('Shopping');
        noteListModel.addNote('Steak')
        const noteListView = new NoteListView('listContainer', noteListModel);

        it('initializes with NoteList model.', function () {
            assert.toBe(noteListView.getModel(), noteListModel);
        });

        it('initializes with container specified.', function () {
            let element = document.getElementById('listContainer');
            assert.toBe(noteListView._container, element);
        });

        it('initializes with created html list string.', function () {
            let element = document.getElementById('listContainer');
            assert.toBe(noteListView._listView, '<ul><li><div>Steak</div></li></ul>');
        });

        describe('#listView', function(){
            it('returns the html list string', function(){
                assert.toBe(noteListView.getListView(), '<ul><li><div>Steak</div></li></ul>');
            });
        });

        describe('#listView', function(){
            it('returns list html string', function(){
                assert.toBe(noteListView.getListView(), '<ul><li><div>Steak</div></li></ul>');
            });
        });
    };
});