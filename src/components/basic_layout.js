import React from "react";
import _ from "lodash";
import RGL, { WidthProvider } from "react-grid-layout";
import { fetchPipelineViewByName } from '../actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
const ReactGridLayout = WidthProvider(RGL);

class BasicLayout extends React.PureComponent {
  componentWillMount() {
    this.props.fetchPipelineViewByName("all");
  }
  static defaultProps = {
    className: "layout",
    items: 60,
    rowHeight: 45,
    onLayoutChange: function() {},
    cols: 12
  };

  constructor(props) {
    super(props);

    const layout = this.generateLayout();
    this.state = { layout };
  }

  generateDOM() {
    return _.map(_.range(this.props.items), function(i) {
      return (
        <div key={i} className="flexi">
          <span className="text">{i}</span><br></br>
          <span className="text">{i}</span><br></br>
          <span className="text">{i}</span><br></br>
        </div>
      );
    });
  }

  generateLayout() {
    const p = this.props;
    return _.map(new Array(p.items), function(item, i) {
      const y = _.result(p, "y") || Math.ceil(Math.random() * 4) + 1;
      return {
        x: (i * 2) % 12,
        y: Math.floor(i / 6) * y,
        w: 2,
        h: 2,
        i: i.toString()
      };
    });
  }

  onLayoutChange(layout) {
    this.props.onLayoutChange(layout);
  }

  render() {
    return (
      <ReactGridLayout
        layout={this.state.layout}
        onLayoutChange={this.onLayoutChange}
        {...this.props}
      >
        {this.generateDOM()}
      </ReactGridLayout>
    );
  }
}

//module.exports = BasicLayout;
function mapStateToProps(state){
  return {pipelines: state.pipelines};
}
export default connect(mapStateToProps, { fetchPipelineViewByName } )(BasicLayout);
