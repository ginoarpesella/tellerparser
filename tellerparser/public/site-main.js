var siteMainModule = (function() {
    function init() {
        $('#btn_parser').click(function() {
            alert('this worked');
        });
    }

    return {
        init : init
    }
})();
$(document).ready(function() {
    siteMainModule.init();
});
