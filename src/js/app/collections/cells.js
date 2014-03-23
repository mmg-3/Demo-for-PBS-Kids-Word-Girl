/*global define $ requestAnimationFrame*/

define(function (require) {
	
	var Backbone = require('backbone'),
        Cell = require('app/models/cell'),
        data = require('text!app/data/document.json'),
        Cells;

    Cells = Backbone.Collection.extend({
        model: Cell,
        initialize: function () {
            var c,
                i,
                layer;

            this.on('add', this.handle_ADD.bind(this));

            data = JSON.parse(data);

            for (i = 0; i < data.layers.length; i += 1) {
                layer = data.layers[i];
                //TODO:: add option for custom class?

                //if (frame) {
                //    c = new Cell({layer: layer, frame: frame});
                //} else {
                    c = new Cell({layer: layer});
                //}

                this.add(c);
            }
            
        },

        parse: function (resp, options) {
            return resp;
        },

        handle_ADD: function (m) {
            //console.log('add', m);
        }

    });

	return Cells;
});
