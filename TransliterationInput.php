<?php
/**
 * @author Самсонов Владимир <samsonov.sem@gmail.com>
 * @copyright Copyright &copy; S.E.M. 2017-
 * @license http://www.opensource.org/licenses/bsd-license.php New BSD License
 */
namespace sem\widgets;

use yii\widgets\InputWidget;
use yii\base\InvalidConfigException;
use yii\helpers\Html;

/**
 * Производит транслитерацию вводимого текста в текстовое поле
 * и запись результата транслитерации в указазанное по id поле формы (RU -> EN)
 */
class TransliterationInput extends InputWidget
{

    /**
     * HTML-идентификатор поля для результата транслитерации
     * @var string 
     */
    public $targetId;

    /**
     * @inheritdoc
     */
    public function init()
    {
        if (empty($this->targetId)) {
            throw new InvalidConfigException("id поля ввода назначения должно быть указано");
        }
        parent::init();
    }

    /**
     * @inheritdoc
     */
    public function run()
    {
        $this->registerClientScript();

        $this->options['data-translit_target'] = '#' . $this->targetId;

        if ($this->hasModel()) {
            echo Html::activeTextInput($this->model, $this->attribute, $this->options);
        } else {
            echo Html::textInput($this->name, $this->value, $this->options);
        }
    }

    /**
     * Регистрирует необходимые ассеты для включения клиентских скриптов
     */
    public function registerClientScript()
    {
        $js = "$(function () {
	    var isFirst = true;
	    var wasEmpty = false;

	    $(document).on('change blur focus keyup','input[data-translit_target*=\"#\"]',function(e){

		\$input = $(\$(this).attr('data-translit_target'));
		\$input.bind('keyup',function(e){
		    wasEmpty = false;
		    isFirst = false;
		    return true;
		});

		if(isFirst){
		    isFirst = false;
		    if(!\$input.val())
			    wasEmpty = true;
		}
		
		if(wasEmpty){
			\$input.val(translitirate($(this).val().toLowerCase(),true));
		}
		
		return true;

	    });
	});";
        $view = $this->getView();
        TransliterationInputAsset::register($view);
        $view->registerJs($js);
    }
}
