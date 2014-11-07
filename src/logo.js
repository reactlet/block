

var WopLogo = React.createClass({
    name: 'woplogo',
    mixins: [getCommonMixin],
    
    // attribute definitions
    getAttributes: function() {
        var attributes = [
            { name:'boxClass', type:'string', required:false, defaultValue:'', note:'container CSS class' },
            { name:'text', type:'string', required:false, defaultValue:' ', note:'display text' },
            { name:'link', type:'string', required:false, defaultValue:'', note:'web link' },
            { name:'backgroundImage', type:'string', required:false, defaultValue:'', note:'background image' }
        ];
        return attributes;
    },
    
    render: function() {
        return (
            <div className={ this.state.containerClassNames.join(' ') } >
                <WopBlock data={ this.state } />
            </div>
        );
    }
});
