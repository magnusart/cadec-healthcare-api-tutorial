var app = app || {};

(function( $ ) {
	'use strict';
	
	app.BookingView = Backbone.View.extend({
		
		//... is a list tag.
		tagName:  'li',
		attributes: {
			'data-theme': 'c'
		},

		// Cache the template function for a single item.
		template: null,
		
		events: {
		},
		
		initialize: function() {
			this.template = _.template( $('#booking_template').html() );
		},
		
		// Re-render the booking
		render: function() {
			var renderedTemplate = this.template( this.model.toJSON() );
			this.$el.html( renderedTemplate );
			return this;
		}
	});
	
})(jQuery);