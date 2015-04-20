

$(document).ready(function(event) {

  var halfCardView = Backbone.View.extend({

    tagName: "article",
    className: "block-half shadow",
    template: _.template("<h3><%= title %></h3><%= message %><span class='close'>(x) dismiss</span>"),
    initialize: function(data) {
      this.render(data);
    },
    render: function(data) {
      this.$el.html(this.template(data));
      //$('body').append(this.$el);
      var row = $('.row')[1];
      $(row).append(this.$el);
    }
  });

  var data = { title: "Stuff to do", message: "Be awesome"}
  var newCard = new halfCardView(data);

  var dataTwo = { title: "Schedule", message: "Time to be awesome"};
  var anotherCard = new halfCardView(dataTwo);

  var dataThree = { title: 'Grocery List', message: 'Awesome stuff'};
  var card3 = new halfCardView(dataThree);

  var quarterCardView = Backbone.View.extend({

    tagName: "article",
    className: "block-quarter shadow",
    template: _.template("<h3><%= title %></h3><%= message %><span class='close'>(x) dismiss</span>"),
    initialize: function(data) {
      this.render(data);
    },
    render: function(data) {
      this.$el.html(this.template(data));
      //$('body').append(this.$el);
      var row = $('.row')[1];
      $(row).append(this.$el);
    }
  });

  var dataFour = { title: "Peeps to meet", message: "Awesome people"}
  var card4 = new quarterCardView(dataFour);

});
