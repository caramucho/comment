$(function() {
    $('.demo1').contextMenu('myMenu1',
        {
            bindings: {
                'open': function(t) {
                  $('#myModal').modal({keyboard: true});
            }
        }
    });
});
