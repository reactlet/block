

var WopHeader = React.createClass({
    name: 'wopheader',
    mixins: [getCommonMixin],
    
    // attribute definitions
    getAttributes: function() {
        var attributes = [
            { name:'boxClass', type:'string', required:false, defaultValue:'', note:'container CSS class' },
            { name:'logo', type:'object', required:false, defaultValue:'', note:'logo data' },
            { name:'toolbar', type:'object', required:false, defaultValue:'', note:'toolbar data' }
        ];
        return attributes;
    },
    
    render: function() {
        return (
            <div className={ this.state.containerClassNames.join(' ') } >
                <div className="col-md-4">
                    <WopLogo data={ this.state.logo } />
                </div>
                <div className="col-md-8">
                    <WopToolbar data={ this.state.toolbar } />
                </div>
            </div>
        );
    }
});
