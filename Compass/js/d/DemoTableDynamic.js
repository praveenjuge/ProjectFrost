(function(namespace, $) {
	"use strict";

	var DemoTableDynamic = function() {
		var o = this;
		$(document).ready(function() {
			o.initialize();
		});

	};
	var p = DemoTableDynamic.prototype;
    
	p.initialize = function() {
		this._initDataTables();
	};

	p._initDataTables = function() {
		if (!$.isFunction($.fn.dataTable)) {
			return;
		}


		this._createDataTable1();
		this._createDataTable2();
	};

	p._createDataTable1 = function() {
		$('#datatable1').DataTable({
			"dom": 'lCfrtip',
			"order": [],
			"colVis": {
				"buttonText": "Columns",
				"overlayFade": 0,
				"align": "right"
			},
            "tableTools": {
				"sSwfPath": $('#datatable1').data('swftools')
			},
			"language": {
				"lengthMenu": '_MENU_ entries per page',
				"search": '<i class="fa fa-search"></i>',
				"paginate": {
					"previous": '<i class="fa fa-angle-left"></i>',
					"next": '<i class="fa fa-angle-right"></i>'
				}
			}
		});

		$('#datatable1 tbody').on('click', 'tr', function() {
			$(this).toggleClass('selected');
		});
	};
p._createDataTable2 = function() {
		$('#datatable2').DataTable({
			"dom": 'lCfrtip',
			"order": [],
			"colVis": {
				"buttonText": "Columns",
				"overlayFade": 0,
				"align": "right"
			},
			"language": {
				"lengthMenu": '_MENU_ entries per page',
				"search": '<i class="fa fa-search"></i>',
				"paginate": {
					"previous": '<i class="fa fa-angle-left"></i>',
					"next": '<i class="fa fa-angle-right"></i>'
				}
			}
		});

		$('#datatable1 tbody').on('click', 'tr', function() {
			$(this).toggleClass('selected');
		});
	};

	
	namespace.DemoTableDynamic = new DemoTableDynamic;
}(this.materialadmin, jQuery)); // pass in (namespace, jQuery):
