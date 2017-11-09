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

            const template = `
            <div>
                <h1>Notes</h1>
                <ul id="noteListView" class="person">
                    ${notes.map(note => `<li>${ note }</li>`)}
                </ul>
            </div>
            `;

            this._listView = template;
        },
        getListView: function () {
            return this._listView
        }
    };

    exports.NoteListView = NoteListView
})(this);