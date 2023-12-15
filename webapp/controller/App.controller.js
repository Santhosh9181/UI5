sap.ui.define(
    [
        "sap/ui/model/json/JSONModel",
        "sap/ui/core/Core",
        "samplebasics/formatter/formatter",
        "samplebasics/controller/BaseController"

    ],
    function(JSONModel,Core,formatter,BaseController) {
      "use strict";
  
      return BaseController.extend("samplebasics.controller.App", {
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
        },
        onPressHome: function(){
          this.returnHome();
        }
        // BaseController: BaseController
        // function(){
        //   var that = this;
        //   BaseController.returnHome();
        // } 
        // function() {
        //   this.getOwnerComponent().getRouter().navTo("RouteTile");

        // }
      });
    }
  );
  