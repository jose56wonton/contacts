import React, { Component } from 'react';
class AttributeListItem extends Component {
  render() {
    return (
      <article className="media " >       
        <div className="media-content">
          <div className="content flex-container">            
            <p className="flex-item ">
              {this.props.title}
              <br />
              <strong>{this.props.primary}</strong>  
              <br />
              <strong>{this.props.primarylong}</strong>
            </p>
          </div>
        </div>
        <div class="media-right">
          <p className="flex-item ">
            {this.props.secondary}            
          </p>
        </div>
      </article>
    );
  }
}
export default AttributeListItem;