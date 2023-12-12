sap.ui.define([],
    function() {
        "use strict";
        return {
            checkMatch: function (matchdate) {
                
                var match = new Date(matchdate); 
                var today = new Date();
                
                if( today > match )
                {
                    return 'sap-icon://status-completed';
                }else{
                    return 'No';
                }
            }

        };
    }); 