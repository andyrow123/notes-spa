(function(exports){
  function Note(text) {
      this._text = text;
  };

  Note.prototype.getText = function(){
      return this._text;
  };

  Note.prototype.setText = function(text){
      this._text = text;
  };

  exports.Note = Note;
})(this);
