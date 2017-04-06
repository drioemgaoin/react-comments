import React from 'react/addons';
import ReactComments from '../lib/react-comments.jsx';

describe('ReactComments', function() {
  var component;

  beforeEach(function() {
    component = React.addons.TestUtils.renderIntoDocument(
      <ReactComments/>
    );
  });

  it('should render', function() {
    expect(component.getDOMNode().className).toEqual('react-comments');
  });
});
