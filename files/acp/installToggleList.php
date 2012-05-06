<?php
// wcf imports
require_once(WCF_DIR.'lib/data/style/StyleEditor.class.php');

/**
 * @author	Stefan Hahn
 * @copyright	2012 Stefan Hahn
 * @license	GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 * @package	com.leon.wcf.togglelist
 */
$sql = "SELECT	styleID
	FROM	wcf".WCF_N."_style";
$result = WCF::getDB()->sendQuery($sql);
while ($row = WCF::getDB()->fetchArray($result)) {
	$style = new StyleEditor($row['styleID']);
	$style->writeStyleFile();
}
