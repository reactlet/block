

var WopBlock = React.createClass({
    name: 'wopblock',
    mixins: [getCommonMixin],
    
    // attribute definitions
    getAttributes: function() {
        var attributes = [
            { name:'boxClass', type:'string', required:false, defaultValue:'', note:'container CSS class' },
            { name:'iconClass', type:'string', required:false, defaultValue:'', note:'icon CSS class' },
            { name:'text', type:'string', required:false, defaultValue:'', note:'display text' },
            { name:'link', type:'string', required:false, defaultValue:'', note:'web link' },
            { name:'backgroundImage', type:'string', required:false, defaultValue:'', note:'background image' },
            { name:'layout', type:'string', required:false, defaultValue:'h', note:'h - horizontal, v - vertical' }
        ];
        return attributes;
    },
    
    render: function() {
        // set icon class names
        this.state.iconClassNames = ['wopblock-icon-container'];
        this.state.iconClass && this.state.iconClassNames.push(this.state.iconClass);
        var iconContent = '';
        // iconClass is CSS class name for icon in Bootstrape
        if (this.state.iconClass) {
            iconContent =
                <i className={ this.state.iconClassNames.join(' ') }></i>
        }
        // set background image if backgroundImage is present
        var divStyle = null;
        if (this.state.backgroundImage) {
            divStyle = {
                'background-image': 'url(' + this.state.backgroundImage + ')'
            };
        }
        // set content display
        var content =
            <div className="wopblock-content-container" >
                { iconContent }
                <span className="wopblock-text-container">{ this.state.text }</span>
            </div>;
        if (this.state.link) {
            content =
                <a href={ this.state.link }>{ content }</a>
        }
        return (
            <div className={ this.state.containerClassNames.join(' ') }  style={ divStyle } >
                { content }
            </div>
        );
    }
});
