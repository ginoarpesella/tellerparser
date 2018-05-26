
/*
ICD:LOCK:OPE | 82600-005-161109-0003;2018-05-09T03:08:09;OPEN

DrawerOpen event: 82600-005-161109-0003;2018-05-09T03:08:09;OPEN

DrawerClosed event: 82600-005-161109-0003;2018-05-09T03:08:12;CLOSED

Count event: 82600-005-161109-0003;2018-05-09T03:08:17;COUNT;0000000561;1,826,10p,0,0.00;2,826,£2,0,0.00;3,826,5p,0,0.00;4,826,£1,0,0.00;5,826,2p,0,0.00;6,826,50p,0,0.00;7,826,1p,0,0.00;8,826,20p,0,0.00;9,826,£5,6,30.00;10,826,£10,7,70.00;11,826,£20,8,160.00;12,826,£50,0,0.00;13,826,£5,7,35.00;14,826,BN14,0,0.00;


var siteMainModule = (function () {
    function init() {
        $('#btn_parser').click(function () {
            ParseText();
        });
    }

    function ParseText() {
        let txt = $('.main-textarea').val();

        const txtSplit = txt.split(/\n/);
        let cmds = []; 
        let what = txtSplit.forEach(element => {
            if (element.length > 1) {
                cmds.push(element);
            }
        });

        cmds.forEach(line => {
           if (line.endsWith('OPEN'))
           {
                Decode_OpenEvent(line);
                return;
           }
            
        });
    }

    function Decode_OpenEvent(line) {
        $('#open-drawer').text(line);
    }

    return {
        init: init
    }
})();
$(document).ready(function () {
    siteMainModule.init();
});

*/