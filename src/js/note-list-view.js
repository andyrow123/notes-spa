(function(exports) {
    function NoteListView(containerId, model) {
        this._model = model;
        this._container = document.getElementById(containerId);
        this._listView = '';
        this.init();
    }

    NoteListView.prototype = {
        init: function () {
            this.createListView();
            this.displayListView();
        },
        getModel: function () {
            return this._model;
        },
        createListView: function () {
            let notes = this._model.getNotes();
            let ul = '<ul>';

            notes.forEach(function(note) {
                let li = '<li><div>' + note + '</div></li>';
                ul = ul + li;
            });

            ul = ul + '</ul>';
            this._listView = ul;
        },
        displayListView: function () {
          this._container.innerHTML = this._listView;
        },
        getListView: function () {
            return this._listView
        }
    };

    exports.NoteListView = NoteListView
})(this);