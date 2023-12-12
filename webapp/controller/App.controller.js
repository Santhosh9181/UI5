sap.ui.define(
    [
        "sap/ui/core/mvc/Controller",
        "sap/ui/model/json/JSONModel",
        "sap/ui/core/Core",
        "samplebasics/formatter/formatter"
    ],
    function(Controller,JSONModel,Core,formatter) {
      "use strict";
  
      return Controller.extend("samplebasics.controller.App", {
        formatter: formatter,
        onInit() {
          var i = {"Title": "Cricket World Cup Schedule",
                   "Year": "2023",
                   "edit": false,
                   "currentDate": '' };
          
          // this.getView().setModel( new JSONModel(i),"title");
          var wcschedule = new JSONModel("../model/WCSchedule.json");
          this.getView().setModel(wcschedule);

          this.getView().setModel( new JSONModel(i),"title");
          var global = Core.getModel("oModelGlobal");
          // alert("App");
        }
      });
    }
  );
  