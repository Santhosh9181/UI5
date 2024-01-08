sap.ui.define([
  "samplebasics/controller/BaseController",
  "sap/ui/model/json/JSONModel"
],
  function (BaseController, JSONModel) {
    "use strict";
    return BaseController.extend(
      "samplebasics.controller.Booking",
      {
        onInit() {
          var Booking = {
            Title: "Booking",
            SeatA: [],
            SeatB: [],
            SeatC: [],
            Seats: [
              {
                Class: "Class A",
                TotalSeat: 50,
                PriceperSeat: 200,
                SeatSelected: 0,
                TotalPrice: 0,
                CurrencyCode: "₹"
              },
              {
                Class: "Class B",
                TotalSeat: 60,
                PriceperSeat: 300,
                SeatSelected: 0,
                TotalPrice: 0,
                CurrencyCode: "₹"
              },
              {
                Class: "Class C",
                TotalSeat: 70,
                PriceperSeat: 400,
                SeatSelected: 0,
                TotalPrice: 0,
                CurrencyCode: "₹"
              }
            ]
          };
          for (var i = 0; i <= Booking.Seats[0].TotalSeat - 1; i++) {
            Booking.SeatA[i] = "sap-icon://person-placeholder"
          }
          for (var i = 0; i <= Booking.Seats[1].TotalSeat - 1; i++) {
            Booking.SeatB[i] = "sap-icon://person-placeholder"
          }
          for (var i = 0; i <= Booking.Seats[2].TotalSeat - 1; i++) {
            Booking.SeatC[i] = "sap-icon://person-placeholder"
          }

          this.getView().setModel(new JSONModel(Booking));

        },

        onSeatPress: function (evt) {
          var Seatid = evt.getSource().sId;
          var SeatType = this.getView().byId(Seatid).getType();
          var Booking = this.getView().getModel().getData();
          if (Seatid.includes("ClassABox")) {
            var i = 0;
          }
          else if (Seatid.includes("ClassBBox")) {
            i = 1;
          }
          else if (Seatid.includes("ClassCBox")) {
            i = 2;
          }

          if (SeatType == "Default") {
            Booking.Seats[i].SeatSelected = Booking.Seats[i].SeatSelected + 1.
            Booking.Seats[i].TotalPrice = Booking.Seats[i].SeatSelected * Booking.Seats[i].PriceperSeat;
            this.getView().byId(Seatid).setType("Accept");
          }
          else if (SeatType == "Accept") {
            Booking.Seats[i].SeatSelected = Booking.Seats[i].SeatSelected - 1.
            Booking.Seats[i].TotalPrice = Booking.Seats[i].SeatSelected * Booking.Seats[i].PriceperSeat;
            this.getView().byId(Seatid).setType("Default");
          }
          this.getView().setModel(new JSONModel(Booking));
        }

      }
    )
  }
);