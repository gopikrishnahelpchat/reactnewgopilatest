var React = require('react');
var ReactDOM = require('react-dom');

require('style!css!bootstrap/dist/css/bootstrap.min.css');

// App css
require('style!css!sass!applicationStyles');

var SingleMovieEvent = React.createClass({

    myclick: function()
    {
        // this.props.onClickForm(this.refs.city.value);
    },

    componentDidMount:function () {
        this.refs.orderRef.value = this.props.item.order;
        this.refs.ratingRef.value = this.props.item.rating;
        // alert('componenet didmount');
    },
    componentWillReceiveProps:function () {
        this.refs.orderRef.value = this.props.item.order;
        this.refs.ratingRef.value = this.props.item.rating;
        // alert("will Receive");
    },

    render: function () {
        return (
            <div style={{"padding": "20px 20px 30px 50px"}}>
                <div  style={{ "padding": "5px", "border":"1px solid red"}}>

                    <div className="row" >
                        <div className="col-md-12" style={{"paddingBottom": "10px"}}>
                            <img style={{"minHeight":"100px","float":"none","margin":"0 auto"}} src={this.props.item.img_loc1} />
                        </div>
                        <div className="col-md-12" style={{"paddingBottom": "10px"}}>
                            Video Url &nbsp;: &nbsp;&nbsp;&nbsp; <a href={this.props.item.Event_strTrailerURL} >{this.props.item.Event_strTrailerURL}</a>
                        </div>
                    </div>
                    <div className="row" style={{"paddingBottom": "10px"}}>
                            <div className="col-md-12">
                                <span className="authorName">Title &nbsp;:&nbsp;&nbsp;&nbsp;  {this.props.item.Event_strTitle}</span>
                            </div>
                    </div>
                    <div className="row" style={{"paddingBottom": "10px"}}>
                        <div className="col-md-12">
                            Language &nbsp;: &nbsp;&nbsp;&nbsp;  {this.props.item.Event_strLanguage}
                        </div>
                    </div>
                    <div className="row" style={{"paddingBottom": "10px"}}>
                        <div className="col-md-12">
                            Genre &nbsp;: &nbsp;&nbsp;&nbsp;  {this.props.item.genre}
                        </div>
                    </div>
                    <div className="row" style={{"paddingBottom": "10px"}}>
                        <div className="col-md-12">
                            Starring &nbsp;: &nbsp;&nbsp;&nbsp;  {this.props.item.Event_strStarring}
                        </div>
                    </div>
                    <div className="row" style={{"paddingBottom": "10px"}}>
                        <div className="col-md-12">
                            Director &nbsp;: &nbsp;&nbsp;&nbsp;  {this.props.item.Event_strDirector}
                        </div>
                    </div>
                    <div className="row" style={{"paddingBottom": "10px"}}>
                        <div className="col-md-12" style={{"paddingBottom": "10px"}}>
                            Release Date &nbsp;: &nbsp;&nbsp;&nbsp;  {this.props.item.Event_strReleaseDate}
                        </div>
                        <div className="col-md-12" style={{"paddingBottom": "10px"}}>
                            Url &nbsp;: &nbsp;&nbsp;&nbsp; <a href={this.props.item.url} >{this.props.item.url}</a>
                        </div>
                    </div>
                    <div className="row" style={{"paddingBottom": "10px"}}>
                        <div className="col-md-12">
                            Rating &nbsp;: &nbsp;&nbsp;&nbsp;  <input type="number" ref="ratingRef" value={this.props.item.rating}  onChange={(e) => this.props.onRatingChanged(this.props.item.position, e)}/>
                        </div>
                    </div><div className="row" style={{"paddingBottom": "10px"}}>
                        <div className="col-md-12">
                            Order &nbsp;: &nbsp;&nbsp;&nbsp;  <input type="number" ref="orderRef" value={this.props.item.order}  onChange={(e) => this.props.onOrderChanged(this.props.item.position, e)} />
                        </div>
                    </div>

                </div>
            </div>

        );
    }
});

module.exports = SingleMovieEvent;