

var WopFooter = React.createClass({
    name: 'wopfooter',
    mixins: [getCommonMixin],
    
    getAttributes: function() {
        var attributes = [
            { name:'boxClass', type:'string', required:false, defaultValue:'', note:'container CSS class' },
            { name:'mainToolbar', type:'object', required:false, defaultValue:'', note:'main toolbar data' },
            { name:'socialToolbar', type:'object', required:false, defaultValue:'', note:'socail toolbar data' }
        ];
        return attributes;
    },
    
    render: function() {
        return (
            <div className={ this.state.containerClassNames.join(' ') } >
                <div className="col-md-10">
                    <WopToolbar data={ this.state.mainToolbar } />
                </div>
                <div className="col-md-2">
                    <WopToolbar data={ this.state.socialToolbar } />
                </div>
            </div>
        );
    }
});

