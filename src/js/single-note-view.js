(function(exports) {
    function SingleNoteView(noteModel) {
        this._noteModel = noteModel;
        this._noteView = '';
        this.init()
    };

    SingleNoteView.prototype = {
        init: function () {
            this.createNoteView();
        },
        getNoteModel: function () {
            return this._noteModel;
        },
        createNoteView: function () {
            const template = `<div>${ this._noteModel.getText() }</div>`;

            this._noteView = template;
        },
        getNoteView: function () {
            return this._noteView
        }
    };

    exports.SingleNoteView = SingleNoteView;
})(this);