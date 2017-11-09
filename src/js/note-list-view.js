(function(exports) {
    function NoteListView(noteListModel) {
        this._noteListModel = noteListModel;
        this._listView = '';
        this.init();
    }

    NoteListView.prototype = {
        init: function () {
            this.createListView();
        },
        getModel: function () {
            return this._noteListModel;
        },
        createListView: function () {
            let notes = this._noteListModel.getNotes();

            let ul = '<ul>';

            notes.forEach(function(note) {
                let li = '<li><div>' + note + '</div></li>';
                ul = ul + li;
            });

            ul = ul + '</ul>';

            let container = '<div><h2>' + this._noteListModel.getTitle() + '</h2>' + ul + '</div>';
            this._listView = container;
        },
        getListView: function () {
            return this._listView
        }
    };

    exports.NoteListView = NoteListView
})(this);