

$(document).ready(function(event) {


  var cardModel = Backbone.Model.extend({
	initialize: function() {
		console.log("Hey, a card is here!");
	}
});


  var headerView = Backbone.View.extend({

    tagName: "article",
    className: "header",
    template: _.template("<h1><%= title %></h1>"),
    initialize: function(data) {
      this.render(data);
    },
    render: function(data) {
      this.$el.html(this.template(data));
      //$('body').append(this.$el);
      var header = $('.header')[0];
      $(header).append(this.$el);
    }
  });

  var intheheader = { title: "The Awesome Personal Concierge"}
  var dotheheader = new headerView(intheheader);

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
      var row = $('.row')[0];
      $(row).append(this.$el);
    }
  });

  var data = { title: "Stuff to do", message: "Be awesome"}
  var newCard = new halfCardView(data);

  var dataTwo = { title: "Schedule", message: "Time to be awesome"};
  var anotherCard = new halfCardView(dataTwo);


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
      var row3 = $('.row')[2];
      $(row3).append(this.$el);
    }
  });

  var dataFour = { title: "Peeps to meet", message: "Awesome people"}
  var card4 = new quarterCardView(dataFour);
  var dataPlaces = { title: "Places to go", message: "Where it's awesome"}
  var cardPlace = new quarterCardView(dataPlaces);


  var thirdCardView = Backbone.View.extend({

    tagName: "article",
    className: "block-third shadow",
    template: _.template("<h3><%= title %></h3><%= message %><span class='close'>(x) dismiss</span>"),
    initialize: function(data) {
      this.render(data);
    },
    render: function(data) {
      this.$el.html(this.template(data));
      //$('body').append(this.$el);
      var row2 = $('.row')[1];
      $(row2).append(this.$el);
    }
  });

  var dataFive = { title: "Weather", message: "It's awesome outside"}
  var card5 = new thirdCardView(dataFive);
  var dataEats = { title: "Where to eat", message: "Awesome restaurants"}
  var cardEats = new thirdCardView(dataEats);
  var dataThree = { title: 'Grocery List', message: 'Awesome stuff'}
  var card3 = new thirdCardView(dataThree);


  var cardlist = Backbone.collection.extend({
    model: cardModel,
    url: '/api/cards',
    initialize: function(){
      console.log("Here's my collection");



  }
  })






});
