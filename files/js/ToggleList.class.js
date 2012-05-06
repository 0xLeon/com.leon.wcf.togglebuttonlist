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
			var checkbox = li.down('.toggleListCheckbox');
			
			checkbox.addClassName('hidden');
			if (checkbox.checked) label.addClassName('selected');
			
			li.observe('click', function(event) {
				this.toggle(event);
			}.bindAsEventListener(this));
			li.observe('mouseover', function(event) {
				this.hover(event);
			}.bindAsEventListener(this));
			li.observe('mouseout', function(event) {
				this.hover(event);
			}.bindAsEventListener(this));
		}, this);
	},
	
	toggle: function(event) {
		var target = event.findElement('li.toggleListListElement');
		var label = target.down('.toggleListLabel')
		var checkbox = target.down('.toggleListCheckbox');
		var checked = !checkbox.checked;
		
		if (checked) {
			label.removeClassName('hover');
			label.addClassName('selected');
			label.addClassName('hoverSelected');
		}
		else {
			label.removeClassName('selected');
			label.removeClassName('hoverSelected');
			label.addClassName('hover');
		}
		
		checkbox.checked = checked;
	},
	
	hover: function(event) {
		var target = event.findElement('li.toggleListListElement');
		var label = target.down('.toggleListLabel');
		var checkbox = target.down('.toggleListCheckbox');
		
		if (label.hasClassName('selected')) {
			label.toggleClassName('hoverSelected');
		}
		else {
			label.toggleClassName('hover');
		}
	}
});
