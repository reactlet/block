

var WopToolbar = React.createClass({
    name: 'woptoolbar',
    mixins: [getCommonMixin],
    
    // attribute definitions
    getAttributes: function() {
        var attributes = [
            { name:'boxClass', type:'string', required:false, defaultValue:'', note:'container CSS class' },
            { name:'buttons', type:'array', required:false, defaultValue:'', note:'toolbar buttons' }
        ];
        return attributes;
    },
    
    render: function() {
        var links = [];
        this.state.buttons.map(function(button) {
            links.push(
                <WopBlock data={ button } />
            );
        })
        return (
            <div className={ this.state.containerClassNames.join(' ') } >
                { links }
            </div>
        );
    }
});
