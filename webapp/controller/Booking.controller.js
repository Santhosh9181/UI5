sap.ui.define( [
  "samplebasics/controller/BaseController",
  "sap/ui/model/json/JSONModel"
  ],
  function (BaseController,JSONModel) {
    "use strict";
      return BaseController.extend(
          "samplebasics.controller.Booking",
          { 
            onInit() {
              var Booking = { Title : "Booking",
                              Seats : [
                                { Class : "Class A",
                                  TotalSeat : 40,
                                  PriceperSeat : 0,
                                  SeatSelected : 0,
                                  TotalPrice : 0,
                                  CurrencyCode : "INR"
                                  },
                                  { Class : "Class B",
                                  TotalSeat : 40,
                                  PriceperSeat : 0,
                                  SeatSelected : 0,
                                  TotalPrice : 0,
                                  CurrencyCode : "INR"
                                  },
                                  { Class : "Class C",
                                  TotalSeat : 40,
                                  PriceperSeat : 0,
                                  SeatSelected : 0,
                                  TotalPrice : 0,
                                  CurrencyCode : "INR"
                                  }
                              ] 
                             };
              this.getView().setModel(new JSONModel(Booking));

            }
          }
      ) 
    }
);