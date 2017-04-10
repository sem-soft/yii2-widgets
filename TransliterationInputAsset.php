<?php
/**
 * @author Самсонов Владимир <samsonov.sem@gmail.com>
 * @copyright Copyright &copy; S.E.M. 2017-
 * @license http://www.opensource.org/licenses/bsd-license.php New BSD License
 */

namespace sem\widgets;

use yii\web\AssetBundle;

/**
 * Бандл для виджета [[TransliterationInput]]
 */
class TransliterationInputAsset extends AssetBundle
{
    /**
     * @inheritdoc
     */
    public $js = [
        'js/script.js'
    ];
    
    /**
     * @inheritdoc
     */
    public $depends = [
        'yii\web\JqueryAsset',
    ];
    
    /**
     * @inheritdoc
     */
    public function init() {
	$this->sourcePath = __DIR__ . '/assets';
    }
}
