// Block component
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

// Logo component
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


// Toolbar component
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


// Header component
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

// Footer component
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

