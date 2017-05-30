# Set of additional basic widgets for Yii2 Framework
## Install by composer
composer require sem-soft/yii2-widgets
## Or add this code into require section of your composer.json and then call composer update in console
"sem-soft/yii2-widgets": "*"
## Usage without Model
```php
<?= sem\widgets\TransliterationInput::widget([
  'name'      =>  'in',
  'targetId'  =>  'test',
]);?>
<?= \yii\helpers\Html::textInput('out', null, [
  'id'    =>	'test'
]);?>
 ```
 ## Usage with ActiveForm notation
 ```php
  <?= $form->field($model, 'name')->widget(sem\widgets\TransliterationInput::className(), [
    'maxlength' =>  true,
    'targetId'  =>  'company-code'
  ]);?>
  <?= $form->field($model, 'code')->widget(MaskedInput::className(), [
    'id'          =>  'company-code',
    'mask'        =>  '*{2,64}',
    'definitions' =>  [
      '*' =>  [
        'validator'   =>  '[a-z0-9-]',
        'cardinality  =>  1,
        'casing'      =>  'lower'
    ]
  ],
  'clientOptions'	=>	[
    'autoUnmask'=>true
  ]
]);?>
 ```
