/**
 * @author	Stefan Hahn
 * @copyright	2012 Stefan Hahn
 * @license	GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 * @package	com.leon.wcf.togglebuttonlist
 */
var ToggleButtonList = Class.create({
	/**
	 * Initializes a toggle button list
	 * 
	 * @param	String	id	id of the toggle list
	 */
	initialize: function(id) {
		this.id = id;
		this.startState = [];
		
		$$('#'+this.id+' .toggleButtonListListElement').each(function(li) {
			var label = li.down('.toggleButtonListLabel');
			var checkbox = li.down('.toggleButtonListCheckbox');
			
			checkbox.addClassName('hidden');
			
			if (checkbox.checked) {
				label.addClassName('selected');
				this.startState.push(parseInt(checkbox.getAttribute('value')));
			}
			
			li.observe('click', function(event) {
				var checkbox = event.findElement('.toggleButtonListListElement').down('.toggleButtonListCheckbox');
				
				checkbox.click();
			}.bindAsEventListener(this));
			checkbox.observe('change', function(event) {
				this.toggle(event);
			}.bindAsEventListener(this));
			
			['mouseover', 'mouseout'].each(function(eventType) {
				li.observe(eventType, function(event) {
					var checkbox = event.findElement('.toggleButtonListListElement').down('.toggleButtonListCheckbox');
					
					if (document.activeElement === checkbox) {
						checkbox.blur();
					}
					else {
						checkbox.focus();
					}
				}.bindAsEventListener(this));
			}, this);
			
			['focus', 'blur'].each(function(eventType) {
				checkbox.observe(eventType, function(event) {
					this.hover(event);
				}.bindAsEventListener(this));
			}, this);
		}, this);
		
		var form = $(this.id).up('form');
		
		if (form) {
			form.observe('reset', function(event) {
				this.reset();
			}.bindAsEventListener(this));
		}
	},
	
	toggle: function(event) {
		var target = event.findElement('.toggleButtonListListElement');
		var label = target.down('.toggleButtonListLabel')
		var checkbox = target.down('.toggleButtonListCheckbox');
		var checked = checkbox.checked;
		
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
	},
	
	hover: function(event) {
		var target = event.findElement('li.toggleButtonListListElement');
		var label = target.down('.toggleButtonListLabel');
		var checkbox = target.down('.toggleButtonListCheckbox');
		
		if (label.hasClassName('selected')) {
			label.toggleClassName('hoverSelected');
		}
		else {
			label.toggleClassName('hover');
		}
	},
	
	reset: function() {
		$$('#'+this.id+' .toggleButtonListCheckbox').each(function(box) {
			var label = box.up('label');
			
			if (this.startState.indexOf(parseInt(box.getAttribute('value'))) > -1) {
				label.addClassName('selected');
			}
			else {
				label.removeClassName('selected');
			}
		}, this);
	}
});
