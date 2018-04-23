import ReactModal from 'react-modal';
import React, { Component } from 'react';
var CONFIG = require("../constants/config")


class DetailsModal extends Component {
  constructor () {
    super();
    this.state = {
      showModal: false
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal () {
    console.log("openmodal called");
    this.setState({ showModal: true });
  }

  handleCloseModal () {
    this.setState({ showModal: false });
  }

  createMarkup(text){
      return { __html: text };
  }

  renderTime(duration){
    var date = new Date(duration);
    var str = '';
    let hrs = date.getUTCHours();
    let mins = date.getUTCMinutes()
    let secs = date.getUTCSeconds()
    let mills = date.getUTCMilliseconds()
    if (hrs > 0){
      str += hrs + "hr ";
    }
    if (mins > 0){
      str += mins + "m ";
    }
    if (secs > 0){
      str += secs + "s ";
    }
    else if (mills > 0){
      str += mills + "ms ";
    }
    return (
      <span className="label label-default">ETA: {str}</span>
    );
  }

  renderPipelineTable(pipelinedetail){
    if (pipelinedetail.latestRun){
    var url = `${CONFIG.JENKINS_BASE_URL}${ pipelinedetail.latestRun.artifactsZipFile }`;
    }
    else {
    var  url = "notfound";
    }
    return(
      <div>
              <table className="table table-hover table-bordered">
                <thead className="thead-light">
                  <tr>
                    <th scope="col" colSpan="2"><div className="jumbotron"><h2>Pipeline Details </h2></div></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <h4> Name of pipeline: </ h4>
                    </td>
                    <td>
                         <h4> {pipelinedetail.name} </h4>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <h4> Estimated Duration </ h4>
                    </td>
                    <td>
                      <h4> { pipelinedetail.estimatedDurationInMillis } </h4>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <h4> WeatherScore: </ h4>
                    </td>
                    <td>
                      <h4> { pipelinedetail.weatherScore } </h4>
                    </td>
                  </tr>
                  <tr>
                    <th scope="col" colSpan="2"><h4>Pipeline LatestRun </h4></th>
                  </tr>
                  <tr>
                    <td>
                      <h4> Latest run Artifacts: </ h4>
                    </td>
                    <td>
                      <h4> <a href={ url }> Download </a> </ h4>
                    </td>
                  </tr>

                      {pipelinedetail.latestRun ? (
                        <tr>
                        <td>
                          <h4> Commit URL </ h4>
                        </td>
                        <td>
                        <h4> {pipelinedetail.latestRun.commitUrl}</h4>
                        </td>
                        </tr>
                      ) : (
                        <tr>
                        <td>
                        </td>
                        <td>
                        </td>
                        </tr>
                      )}

                  <tr>
                    <td>
                      <h4> Duration </ h4>
                    </td>
                    <td>
                      {pipelinedetail.latestRun ? (
                        <h4> {this.renderTime(pipelinedetail.latestRun.durationInMillis)}</h4>
                      ) : (
                        <h4> undefined </h4>
                      )}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <h4> State </ h4>
                    </td>
                    <td>
                      {pipelinedetail.latestRun ? (
                        <h4> {pipelinedetail.latestRun.state}</h4>
                      ) : (
                        <h4> undefined </h4>
                      )}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <h4> Result </ h4>
                    </td>
                    <td>
                      {pipelinedetail.latestRun ? (
                        <h4> {pipelinedetail.latestRun.result}</h4>
                      ) : (
                        <h4> undefined </h4>
                      )}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <h4> RunSummary </ h4>
                    </td>
                    <td>
                      {pipelinedetail.latestRun ? (
                        <h4> {pipelinedetail.latestRun.runSummary}</h4>
                      ) : (
                        <h4> undefined </h4>
                      )}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <h4> Description </ h4>
                    </td>
                    <td>
                      {pipelinedetail.latestRun ? (
                        <h4> <div dangerouslySetInnerHTML={this.createMarkup(pipelinedetail.latestRun.description)}/></h4>
                      ) : (
                        <h4> undefined </h4>
                      )}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
    );
  }

  render () {
    console.log(this.props.modalContent);
    return (
      <div>
        <span onClick={this.handleOpenModal}>{this.props.pipelinename}</span>
        <ReactModal
           isOpen={this.state.showModal}
           contentLabel="Minimal Modal Example"
           ariaHideApp={false}
           overlayClassName="modaloverlay"
          >
          <div>
          <h2>
           {this.renderPipelineTable(this.props.modalContent)}
          <button onClick={this.handleCloseModal}>Close</button>
          </h2>
          </div>
        </ReactModal>
      </div>
    );
  }
}

export default DetailsModal;
