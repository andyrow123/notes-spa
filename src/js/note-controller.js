(function(exports){
    function NoteController(noteListModel) {
        this._container = document.getElementById('app');

        this._noteListModel = noteListModel
        this._noteListView = new NoteListView(noteListModel);
    }

    NoteController.prototype = {
        getNoteListModel: function() {
            return this._noteListModel;
        },
        setNoteListModel: function(noteListModel) {
            this._noteListModel = noteListModel;
        },
        displayList: function() {
            this._container.innerHTML = this._noteListView.getListView();
        }
    };

    exports.NoteController = NoteController;
})(this);