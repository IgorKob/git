<?php if (!defined( 'FW' )) die('Forbidden');

$options = array(
    'body-color' => array(
        'type' => 'color-picker',
        'label' => __('Body Color', '{domain}'),
        'value' => '#ADFF2F',
    ),
    'section_1' => array(
        'title' => __('Unyson Section', '{domain}'),
        'options' => array(

            'option_1' => array(
                'type' => 'text',
                'value' => 'Default Value',
                'label' => __('Unyson Option', '{domain}'),
                'desc' => __('Option Description', '{domain}'),
            ),

        ),
    ),
    array(
    'type'  => 'text',
    'value' => 'default value kim',
    'attr'  => array( 'class' => 'custom-class', 'data-foo' => 'bar' ),
    'label' => __('Label', '{domain}'),
    'desc'  => __('Description', '{domain}'),
    'help'  => __('Help tip', '{domain}'),
),
);
