// New copy task for font files
module.exports = {
	copyFontAwesome: {
		src: ['{{ROOT}}/node_modules/font-awesome/fonts/**/*'],
		dest: '{{WWW}}/assets/fonts'
	},
	copyTypeIcons: {
		src: ['{{ROOT}}/node_modules/typicons.font/src/font/**/*'],
		dest: '{{WWW}}/assets/fonts'
	},
	copyBillboard: {
		src: ['{{ROOT}}/node_modules/billboard.js/dist/billboard.min.css'],
		dest: '{{WWW}}/assets'
	},
	copyLeaflet: {
		src: ['{{ROOT}}/node_modules/leaflet/dist/**/*'],
		dest: '{{WWW}}/assets'
	},
	copyCalendarCss: {
		src: '{{ROOT}}/node_modules/angular-calendar/css/angular-calendar.css',
		dest: '{{WWW}}/assets'
	},
	copyFullCalendarCss: {
		src: '{{ROOT}}/node_modules/fullcalendar/dist/fullcalendar.css',
		dest: '{{WWW}}/assets'
	},
	copyPrimeng: {
		src: [
			'{{ROOT}}/node_modules/primeng/resources/themes/omega/theme.css',
			'{{ROOT}}/node_modules/primeng/resources/primeng.min.css',
			'{{ROOT}}/node_modules/font-awesome/css/font-awesome.min.css',
			'{{ROOT}}/node_modules/fullcalendar/dist/fullcalendar.js',
			'{{ROOT}}/node_modules/moment/min/moment.min.js',
			'{{ROOT}}/node_modules/jquery/dist/jquery.slim.js'
		],
		dest: '{{WWW}}/assets'
	}
};
