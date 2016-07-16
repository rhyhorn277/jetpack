

## connectModuleOptions

A High Order Component that connects to Jetpack modules'options
redux state selectors and action creators.

**Arguments**

* {React.Component} Component - The component to be connected to the state
* Return: {React.Component} -	The component with some props connected to the state

This HOC provides the wrapped component with the following properties

* validValues( option_name )
* getOptionCurrentValue( module_name, option_name)
* getModuleOption ( module_name )
* isUpdating ( option_name )
* toggleOption( option_name, currentValue )
* updateOptions( newOptions )
* regeneratePostByEmailAddress()

## module-settings-form

A High Order Component that provide a &lt;form&gt; with functionality to handle input values on the forms own React component state.

_Basically useful for using in composition with the connectModuleOptions HOC._

** Props **

* getOptionCurrentValue()
* props.module
* props.updateOptions

