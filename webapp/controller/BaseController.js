sap.ui.define(["sap/ui/core/mvc/Controller"],
    function (Controller) {
        "use strict";

        return Controller.extend("sample_basics.ontroller.BaseController",
            {
                onInit() { },
                returnHome: function() {
                    this.getOwnerComponent().getRouter().navTo("RouteTile");
                }
            }
        )
    }
);