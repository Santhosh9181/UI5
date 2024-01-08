sap.ui.define(
    [
        "sap/ui/model/json/JSONModel",
        "samplebasics/formatter/formatter",
        "samplebasics/controller/BaseController"

    ],
    function(JSONModel,formatter,BaseController) {
      "use strict";
  
      return BaseController.extend("samplebasics.controller.App", {
        formatter: formatter,

        onInit() {
          var i = {"Title": "Cricket World Cup Schedule",
                   "Year": "2023",
                   "edit": false,
                   "currentDate": '' };
          
          var wcschedule = new JSONModel("../model/WCSchedule.json");
          this.getView().setModel(wcschedule);

          this.getView().setModel( new JSONModel(i),"title");
        },
        onPressHome: function(){
          this.returnHome();
        }
      });
    }
  );
  