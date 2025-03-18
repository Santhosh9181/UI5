sap.ui.define(
    [
      "sap/ui/core/mvc/Controller",
      "sap/m/MessageToast"
    ],
    function (Controller,MessageToast) {
        return Controller.extend(
            "samplebasics.controller.Tile",
            {
                onInit() {
                    var tiles = new sap.ui.model.json.JSONModel("../model/Tile.json");
                    this.getView().setModel(tiles);
                },
                onTilePress: function (event) {
                    var header = event.oSource.mProperties.header;
                    switch (header) {
                        case "Table Example":
                            // MessageToast.show("Table Example");
                            this.getOwnerComponent().getRouter().navTo("RouteApp");
                            break;
                        case "WCSchedule 2023":
                            break;
                        case "Pro Kabbadi":
                            this.getOwnerComponent().getRouter().navTo("RouteBooking");
                            break;
                    }
                }
            }
        );
    }
);