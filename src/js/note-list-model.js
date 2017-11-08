(function(exports){
    function NoteList(title) {
        this._title = title;
        this._notes = [];
    };

    NoteList.prototype.getTitle = function(){
        return this._title;
    };

    NoteList.prototype.setTitle = function(title){
        this._title = title;
    };

    NoteList.prototype.getNotes = function(){
        return this._notes;
    };

    NoteList.prototype.addNote = function(note){
        this._notes.push(note);
    };

    exports.NoteList = NoteList;
})(this);