/**
 * @author	Stefan Hahn
 * @copyright	2012 Stefan Hahn
 * @license	GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 * @package	com.leon.wcf.togglelist
 */
var ToggleList = Class.create({
	/**
	 * Initializes a toggle list
	 * 
	 * @param	String	id	id of the toggle list
	 */
	initialize: function(id) {
		$$('#'+id+' .toggleListListElement').each(function(li) {
			var label = li.down('.toggleListLabel');
			var checkbox = li.down('.toggleListCheckBox');
			
			checkbox.addClassName('hidden');
			if (checkbox.checked) label.addClassName('selected');
			
			li.observe('click', function(event) {
				this.toggle(event);
			}.bindAsEventListener(this));
			li.observe('mousemove', function(event) {
				this.toggle(event);
			}.bindAsEventListener(this));
			li.observe('mouseout', function(event) {
				this.toggle(event);
			}.bindAsEventListener(this));
		});
	},
	
	toggle: function(event) {
		var target = event.findElement('li.toggleListListElement');
		var label = target.down('.toggleListLabel')
		var checkbox = target.down('.toggleListCheckBox');
		
		if (event.type == 'click') {
			checkbox.checked = !checkbox.checked;
			label.toggleClassName('selected');
		}
		
		if (checkbox.checked) {
			if (event.type == 'mousemove' || event.type == 'focus' || event.type == 'change') {
				label.toggleClassName('hoverSelected');
			} else {
				label.toggleClassName('hoverSelected');
			}
			
			if (event.type !== 'click') {
				label.toggleClassName('hoverSelected');
			}
		}
		else {
			if (event.type == 'mousemove' || event.type == 'focus' || event.type == 'change') {
				label.toggleClassName('hover');
			} else {
				label.toggleClassName('hover');
			}
			
			if (event.type !== 'click') {
				label.toggleClassName('hoverSelected');
			}
		}
	}
});
